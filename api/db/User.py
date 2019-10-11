
from api.main import app, db

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True, nullable=False)
  name = db.Column(db.String(60), nullable=False)
  nick_name = db.Column(db.String(20), unique=True, nullable=False)
  email = db.Column(db.String(40), nullable=False)
  message_boxes = db.relationship('MessageBox', backref='person', lazy=True)
