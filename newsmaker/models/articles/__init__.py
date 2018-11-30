from datetime import datetime

from newsmaker.models.rubrics import Rubric
from newsmaker.models.users import User
from newsmaker.services.db import db


class Article(db.Model):
    __tablename__ = 'articles'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    create_date = db.Column(db.DateTime, default=datetime.now)
    update_date = db.Column(db.DateTime, onupdate=datetime.now)
    title = db.Column(db.String(255), unique=True, nullable=False)
    content = db.Column(db.String(1000), nullable=False)
    rubric_id = db.Column(
        db.Integer,
        db.ForeignKey(Rubric.id),
        nullable=False,
    )
    author_id = db.Column(
        db.Integer,
        db.ForeignKey(User.id),
        nullable=False,
    )
    rubric = db.relationship(Rubric)
    author = db.relationship(User)
