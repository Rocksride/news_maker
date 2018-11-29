import hashlib
import logging

import jwt
from flask import current_app as app


log = logging.getLogger()


def generate_password_hash(password):
    password_bin = password.encode()
    password_sha256 = hashlib.sha256(password_bin)
    return password_sha256.hexdigest()


def create_jwt(user_data):
    return jwt.encode(
        {
            'login': user_data['login'],
            'password': generate_password_hash(user_data['password'])
        },
        app.config['SECRET'],
        algorithm='HS256'
    ).decode('utf-8')


def decode_jwt(token):
    try:
        return jwt.decode(
            token,
            app.config['SECRET'],
            algorithms=['HS256']
        )
    except jwt.exceptions.DecodeError as exc:
        log.error(exc)
        return None
