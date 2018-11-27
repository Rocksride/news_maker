from newsmaker.services.db import db


class News(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), unique=True)
    content = db.Column(db.String(1000))
