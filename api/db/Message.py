from api.main import app, db

class Message(db.Model):
    message_id = db.Column(db.Integer, primary_key=True, nullable=False)
    message_content = db.Column(db.String(255), nullable=False)
    created_on = db.Column(db.DateTime, server_default=db.func.now())
    member_id = db.Column(db.Integer, db.ForeignKey('user.user_id'))
    box_id = db.Column(db.Integer, db.ForeignKey('box.box_id'))