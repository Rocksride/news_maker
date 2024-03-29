from newsmaker.lib.auth import generate_password_hash, decode_jwt
from newsmaker.models.users import User
from newsmaker.services.db import db


def validate_user(user_data):
    errors = {}
    login_already_exists = db.session.query(
        User.query.filter(User.login == user_data['login']).exists()
    ).scalar()
    if login_already_exists:
        errors["login"] = "User login already exists"
    return errors


def validate_token(token):
    user_data = decode_jwt(token)
    if user_data is None:
        return False
    return bool(user_exists(user_data))


def user_exists(user_data_from_token):
    return db.session.query(
        User.query.filter(
            User.login == user_data_from_token['login'],
            User.password == user_data_from_token['password']
        ).exists()
    ).scalar()


def authenticate_user(user_data):
    errors = {}
    login_exists = db.session.query(
        User.query.filter(User.login == user_data['login']).exists()
    ).scalar()
    if not login_exists:
        errors['login'] = "User does not exists"
    password_correct = db.session.query(
        User.query.filter(
            User.login == user_data['login'],
            User.password == generate_password_hash(user_data['password'])
        ).exists()
    ).scalar()
    if not password_correct:
        errors['password'] = "Wrong password"
    return errors


def create_user(user_data):
    db.session.add(
        User(
            login=user_data['login'],
            password=generate_password_hash(user_data['password']),
        )
    )
    db.session.commit()


def get_current_user_id():
    from newsmaker.lib.helpers.views import get_token

    token = get_token()
    user_data = decode_jwt(token)
    return db.session.query(
        User.id,
    ).filter(
        User.login == user_data.get('login')
    ).first().id
