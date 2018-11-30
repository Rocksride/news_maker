from newsmaker.models.tags import Tag
from newsmaker.services.db import db


def validate_tag(tag_data):
    errors = {}
    tag_title_already_exists = db.session.query(
        Tag.query.filter(
            Tag.title == tag_data.get('title')
        ).exists()
    ).scalar()
    if tag_title_already_exists:
        errors.update({"title": "Tag title already exists"})
    return errors


def save_tag(tag_data):
    db.session.add(Tag(title=tag_data.get('title')))
    db.session.commit()


def get_tags():
    return db.session.query(
        Tag.id,
        Tag.title,
    ).all()
