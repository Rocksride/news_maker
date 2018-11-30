from flask import jsonify
from flask.views import MethodView
from marshmallow import Schema, fields, validate

from newsmaker.bl.tags import get_tags


class TagSchema(Schema):
    id = fields.Integer(allow_none=True)
    title = fields.String(validate=[validate.Length(max=255)])


class TagView(MethodView):
    def get(self):
        tags = get_tags()
        return jsonify(TagSchema().dump(tags, many=True).data)
