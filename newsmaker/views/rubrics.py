from flask import jsonify, request
from flask.views import MethodView
from marshmallow import Schema, fields, validate

from newsmaker.bl.rubrics import get_rubrics, validate_rubric, save_rubric
from newsmaker.lib.helpers.views import user_authorised, error_response


class RubricSchema(Schema):
    id = fields.Integer(allow_none=True)
    title = fields.String(validate=[validate.Length(max=255)])
    description = fields.String(
        validate=[validate.Length(max=255)],
        allow_none=True,
        default=''
    )


class RubricView(MethodView):
    def get(self):
        rubrics = get_rubrics()
        return jsonify(RubricSchema().dump(rubrics, many=True).data)

    @user_authorised
    def post(self):
        rubric_data, errors = RubricSchema().load(request.json)
        if errors:
            return error_response(errors)
        errors = validate_rubric(rubric_data)
        if errors:
            return error_response(errors)
        save_rubric(rubric_data)
        return jsonify('success')
