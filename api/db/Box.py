from api.main import app, db

class Box(db.Model):
  box_id = db.Column(db.Integer, primary_key=True, nullable=False)
  box_name = db.Column(db.String(100), nullable=False)
  messages = db.relationship('Message', backref='message_box', lazy=True)
