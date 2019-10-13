from api.main import db

message_boxes = db.Table('message_boxes',
    db.Column('message_box_id', db.Integer, db.ForeignKey('message_box.id'), primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True)
)
