from functools import wraps

from flask import jsonify, request, abort

from newsmaker.bl.auth import validate_token


def error_response(errors, code=400):
    return jsonify({'errors': errors}), code


def user_authenticated(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        token = request.headers.get('Authorization')
        if token.startswith('Bearer'):
            token = token[7:]
        if not validate_token(token):
            abort(401)
        func(*args, **kwargs)
    return wrapper

