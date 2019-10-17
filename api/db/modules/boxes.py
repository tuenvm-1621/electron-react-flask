from api.main import db

boxes = db.Table('boxes',
    db.Column('box_id', db.Integer, db.ForeignKey('box.box_id'), primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('user.user_id'), primary_key=True)
)
