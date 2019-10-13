from api.main import app, db

class MessageBox(db.Model):
  id = db.Column(db.Integer, primary_key=True, nullable=False)
  name = db.Column(db.String(100), nullable=False)
  messages = db.relationship('Message', backref='message', lazy=True)
