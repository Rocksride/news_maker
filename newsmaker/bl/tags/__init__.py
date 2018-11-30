from newsmaker.models.tags import Tag
from newsmaker.services.db import db


def get_tags():
    return db.session.query(
        Tag.id,
        Tag.title,
    ).all()
