
from api.main import app, db
from api.db.modules.boxes import boxes

class User(db.Model):
  user_id = db.Column(db.Integer, primary_key=True, nullable=False)
  user_name = db.Column(db.String(60), nullable=False)
  nick_name = db.Column(db.String(20), unique=True)
  user_email = db.Column(db.String(40), nullable=False)
  message_boxes = db.relationship('Box', secondary=boxes, lazy='subquery',
    backref=db.backref('members', lazy=True))
  messages = db.relationship('Message', backref='member', lazy=True)