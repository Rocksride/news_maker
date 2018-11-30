from newsmaker.models.articles import Article
from newsmaker.services.db import db


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), unique=True)


article_tags = db.Table(
    'article_tags',
    db.Model.metadata,
    db.Column(
        'article_id',
        db.Integer,
        db.ForeignKey(Article.id),
    ),
    db.Column(
        'tag_id',
        db.Integer,
        db.ForeignKey(Tag.id),
    ),
    db.UniqueConstraint(
        'article_id',
        'tag_id',
        name='unique_article_tag'
    )
)
