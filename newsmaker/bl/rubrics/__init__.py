from newsmaker.models.rubrics import Rubric
from newsmaker.services.db import db


def validate_rubric(rubric_data):
    errors = {}
    rubric_title_already_exists = db.session.query(
        Rubric.query.filter(
            Rubric.title == rubric_data.get('title')
        ).exists()
    ).scalar()
    if rubric_title_already_exists:
        errors.update({"title": "Rubric title already exists"})
    return errors


def save_rubric(rubric_data):
    db.session.add(
        Rubric(
            title=rubric_data.get('title'),
            description=rubric_data.get('description'),
        )
    )
    db.session.commit()


def get_rubrics():
    return db.session.query(
        Rubric.id,
        Rubric.title,
    )
