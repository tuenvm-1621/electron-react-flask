from api.main import app, db

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    content = db.Column(db.String(255), nullable=False)
    created_on = db.Column(db.DateTime, server_default=db.func.now())