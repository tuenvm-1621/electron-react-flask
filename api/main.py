
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import flask_restless

app = Flask(__name__)
db = SQLAlchemy(app)

app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
CORS(app)

from api.db.User import User, db
db.create_all()

manager = flask_restless.APIManager(app, flask_sqlalchemy_db=db)

manager.create_api(User, methods=['GET', 'POST', 'PUT', 'DELETE'])

app.run()

# import pdb; pdb.set_trace()