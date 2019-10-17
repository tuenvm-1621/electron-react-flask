
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import flask_restless

app = Flask(__name__)
db = SQLAlchemy(app)

app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sqlite3.db'
CORS(app)

from api.db.User import User
from api.db.Box import Box
from api.db.Message import Message
db.create_all()

manager = flask_restless.APIManager(app, flask_sqlalchemy_db=db)

manager.create_api(User, methods=['GET', 'POST', 'PUT', 'DELETE'])
manager.create_api(Box, methods=['GET', 'POST', 'PUT', 'DELETE'])
manager.create_api(Message, methods=['GET', 'POST', 'PUT', 'DELETE'])

# import pdb; pdb.set_trace()

if __name__ == '__main__':
    app.run()
    