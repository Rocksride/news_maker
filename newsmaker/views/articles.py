from flask import jsonify, request
from flask.views import MethodView
from marshmallow import Schema, fields, validate

from newsmaker.bl.articles import save_article, validate_article
from newsmaker.models.articles import Article
from newsmaker.services.db import db


class ArticleSchema(Schema):
    id = fields.Integer(allow_none=True)
    title = fields.String(validate=[validate.Length(max=255)])
    content = fields.String(validate=[validate.Length(max=1000)])


class ArticleView(MethodView):
    def get(self):
        news = db.session.query(
            Article.id,
            Article.title,
            Article.content,
        )
        return jsonify(ArticleSchema().dump(news, many=True).data)

    def post(self):
        article_data, errors = ArticleSchema().load(request.json)
        if errors:
            return jsonify(errors), 400
        errors = validate_article(article_data)
        if errors:
            return jsonify(errors), 400
        save_article(article_data)
        return jsonify("success")
