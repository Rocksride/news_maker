from flask import jsonify, request
from flask.views import MethodView
from marshmallow import Schema, fields, validate

from newsmaker.bl.articles import save_article, validate_article, get_articles
from newsmaker.lib.helpers.views import user_authorised, error_response


class ArticleSchema(Schema):
    id = fields.Integer(allow_none=True)
    title = fields.String(
        validate=[validate.Length(max=255)],
        required=True,
    )
    content = fields.String(
        validate=[validate.Length(max=1000)],
        required=True,
    )
    authorId = fields.Integer(attribute='author_id', required=True)
    rubricId = fields.Integer(attribute='rubric_id', required=True)
    tagsIds = fields.List(
        fields.Integer(),
        attribute='tags_ids',
        required=True,
    )


class ArticleView(MethodView):
    def get(self):
        articles = get_articles()
        return jsonify(ArticleSchema().dump(articles, many=True).data)

    @user_authorised
    def post(self):
        article_data, errors = ArticleSchema().load(request.json)
        if errors:
            return error_response(errors)
        errors = validate_article(article_data)
        if errors:
            return error_response(errors)
        save_article(article_data)
        return jsonify("success")
