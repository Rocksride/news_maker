from flask import jsonify, request
from flask.views import MethodView
from marshmallow import Schema, fields, validate

from newsmaker.bl.tags import get_tags, validate_tag, save_tag
from newsmaker.lib.helpers.views import user_authorised, error_response


class TagSchema(Schema):
    id = fields.Integer(allow_none=True)
    title = fields.String(validate=[validate.Length(max=255)])


class TagView(MethodView):
    def get(self):
        tags = get_tags()
        return jsonify(TagSchema().dump(tags, many=True).data)

    @user_authorised
    def post(self):
        tag_data, errors = TagSchema().load(request.json)
        if errors:
            return error_response(errors)
        errors = validate_tag(tag_data)
        if errors:
            return error_response(errors)
        save_tag(tag_data)
        return jsonify('success')
