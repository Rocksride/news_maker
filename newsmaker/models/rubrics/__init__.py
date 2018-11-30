from newsmaker.services.db import db


class Rubric(db.Model):
    __tablename__ = 'rubrics'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), unique=True, nullable=False)
    description = db.Column(db.String(255))
