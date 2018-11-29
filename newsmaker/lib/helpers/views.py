from flask import jsonify


def error_response(errors, code=400):
    return jsonify({'errors': errors}), code
