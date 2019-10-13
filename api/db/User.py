
from api.main import app, db
from api.db.modules.message_boxes import message_boxes

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True, nullable=False)
  name = db.Column(db.String(60), nullable=False)
  nick_name = db.Column(db.String(20), unique=True, nullable=False)
  email = db.Column(db.String(40), nullable=False)
  message_boxes = db.relationship('MessageBox', secondary=message_boxes, lazy='subquery',
    backref=db.backref('user', lazy=True))
  messages = db.relationship('Message', backref='user', lazy=True)