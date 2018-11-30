from newsmaker.models.rubrics import Rubric
from newsmaker.services.db import db


def get_rubrics():
    return db.session.query(
        Rubric.id,
        Rubric.title,
    )
