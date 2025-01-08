from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object("app.config.Config")
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tickets.db'


    db.init_app(app)
    migrate.init_app(app, db)

    with app.app_context():
        from .routes import main_bp
        app.register_blueprint(main_bp)

        db.create_all()

    return app
