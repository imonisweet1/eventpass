from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """Model for storing user information."""
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)

class Event(db.Model):
    """Model for storing event information."""
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    date = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)

class Ticket(db.Model):
    """Model for storing ticket information."""
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('event.id'), nullable=False)
    qr_code = db.Column(db.Text, nullable=False)
    is_valid = db.Column(db.Boolean, default=True)

    user = db.relationship('User', backref=db.backref('tickets', lazy=True))
    event = db.relationship('Event', backref=db.backref('tickets', lazy=True))
