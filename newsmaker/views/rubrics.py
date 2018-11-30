from flask import jsonify
from flask.views import MethodView
from marshmallow import Schema, fields, validate

from newsmaker.bl.rubrics import get_rubrics


class RubricSchema(Schema):
    id = fields.Integer(allow_none=True)
    title = fields.String(validate=[validate.Length(max=255)])


class RubricView(MethodView):
    def get(self):
        rubrics = get_rubrics()
        return jsonify(RubricSchema().dump(rubrics, many=True).data)
