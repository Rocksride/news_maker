from flask import request, jsonify
from flask.views import MethodView
from marshmallow import Schema, fields, validate

from newsmaker.bl.auth import validate_user, create_user
from newsmaker.lib.helpers.views import error_response


class RegisterSchema(Schema):
    id = fields.Integer(allow_none=True)
    login = fields.String(
        validate=[validate.Length(max=255)],
        required=True,
    )
    password = fields.String(
        validate=[validate.Length(min=6, max=255)],
        required=True,
    )


class RegisterView(MethodView):
    def post(self):
        register_data, errors = RegisterSchema().load(request.json)
        if errors:
            return error_response(errors)
        errors = validate_user(register_data)
        if errors:
            return error_response(errors)
        create_user(register_data)
        return jsonify("success")
