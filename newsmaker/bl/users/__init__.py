from newsmaker.models.users import User
from newsmaker.services.db import db


def get_users():
    return db.session.query(
        User.id,
        User.login
    )
