from flask import jsonify
from flask.views import MethodView
from marshmallow import Schema, fields, validate

from newsmaker.bl.users import get_users


class UserSchema(Schema):
    id = fields.Integer(allow_none=True)
    login = fields.String(validate=[validate.Length(max=255)])


class UserView(MethodView):
    def get(self):
        users = get_users()
        return jsonify(UserSchema().dump(users, many=True).data)
