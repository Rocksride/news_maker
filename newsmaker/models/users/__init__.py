from newsmaker.services.db import db


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    login = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
