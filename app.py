from flask import Flask
from flask_cors import CORS
from config import Config
from .models import db
from .utils import create_app

app = create_app(Config)
CORS(app)

if __name__ == "__main__":
    app.run(debug=True)
