from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from .models import db, User, Event, Ticket
import qrcode
import io
from base64 import b64encode

main_bp = Blueprint('main', __name__)


@main_bp.route('/register', methods=['POST'])
def register():
    """
    Register a new user.
    """
    data = request.json
    hashed_password = generate_password_hash(data['password'])
    user = User(
        username=data['username'],
        email=data['email'],
        password=hashed_password
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User registered successfully"})


@main_bp.route('/login', methods=['POST'])
def login():
    """
    Log in a user.
    """
    data = request.json
    user = User.query.filter_by(email=data['email']).first()

    if user and check_password_hash(user.password, data['password']):
        return jsonify({"message": "Login successful"})
    return jsonify({"error": "Invalid credentials"}), 401


@main_bp.route('/events', methods=['GET'])
def get_events():
    """
    Retrieve a list of all events.
    """
    events = Event.query.all()
    event_list = [
        {
            "id": event.id,
            "name": event.name,
            "date": event.date,
            "price": event.price
        }
        for event in events
    ]
    return jsonify(event_list)


@main_bp.route('/events', methods=['POST'])
def create_event():
    """
    Create a new event.
    """
    data = request.json
    event = Event(
        name=data['name'],
        date=data['date'],
        price=data['price']
    )
    db.session.add(event)
    db.session.commit()
    return jsonify({"message": "Event created successfully"})


@main_bp.route('/purchase', methods=['POST'])
def purchase_ticket():
    """
    Purchase a ticket for an event.
    """
    data = request.json
    user = User.query.get(data['user_id'])
    event = Event.query.get(data['event_id'])

    if not user or not event:
        return jsonify({"error": "Invalid user or event"}), 400

    qr_data = f"{user.id}-{event.id}"
    qr_img = qrcode.make(qr_data)
    buffer = io.BytesIO()
    qr_img.save(buffer, format="PNG")
    qr_code_b64 = b64encode(buffer.getvalue()).decode('utf-8')

    ticket = Ticket(
        user_id=user.id,
        event_id=event.id,
        qr_code=qr_code_b64
    )
    db.session.add(ticket)
    db.session.commit()

    return jsonify({
        "message": "Ticket purchased successfully",
        "qr_code": qr_code_b64
    })


@main_bp.route('/validate', methods=['POST'])
def validate_ticket():
    """
    Validate a ticket's QR code.
    """
    data = request.json
    ticket = Ticket.query.filter_by(qr_code=data['qr_code']).first()

    if not ticket or not ticket.is_valid:
        return jsonify({"error": "Invalid or already used ticket"}), 400

    ticket.is_valid = False
    db.session.commit()
    return jsonify({"message": "Ticket validated successfully"})
