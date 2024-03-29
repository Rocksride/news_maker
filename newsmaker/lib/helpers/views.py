from functools import wraps

from flask import jsonify, request, abort

from newsmaker.bl.auth import validate_token


def error_response(errors, code=400):
    return jsonify({'errors': errors}), code


def get_token():
    token = request.headers.get('Authorization')
    if token and token.lower().startswith('bearer'):
        token = token[7:]
    return token


def user_authorised(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        token = get_token()
        if not validate_token(token):
            abort(401)
        return func(*args, **kwargs)
    return wrapper
