import hashlib

from newsmaker.models.users import User
from newsmaker.services.db import db


def validate_user(user_data):
    errors = {}
    login_already_exists = db.session.query(
        User.query.filter(User.login == user_data['login']).exists()
    ).scalar()
    if login_already_exists:
        errors.update({"login": "User login already exists"})
    return errors


def create_user(user_data):
    password_bin = user_data['password'].encode()
    password_sha256 = hashlib.sha256(password_bin)
    password_hash = password_sha256.hexdigest()
    db.session.add(
        User(
            login=user_data['login'],
            password=password_hash,
        )
    )
    db.session.commit()
