from flask import jsonify
from flask.views import MethodView
from marshmallow import Schema, fields

from newsmaker.models.news import News
from newsmaker.services.db import db


class NewsSchema(Schema):
    id = fields.Integer()
    title = fields.String()
    content = fields.String()


class NewsView(MethodView):
    def get(self):
        news = db.session.query(
            News.id,
            News.title,
            News.content,
        )
        return jsonify(NewsSchema().dump(news, many=True).data)
