from newsmaker.models.articles import Article
from newsmaker.services.db import db


def validate_article(article_data):
    errors = {}
    article_title_already_exists = db.session.query(
        Article.query.filter(
            Article.title == article_data.get('title')
        ).exists()
    ).scalar()
    if article_title_already_exists:
        errors.update({"title": "Article title already exists"})
    return errors


def save_article(article_data):
    new_article_db = Article(
        title=article_data.get('title'),
        content=article_data.get('content')
    )
    db.session.add(new_article_db)
    db.session.commit()


def get_articles():
    return db.session.query(
        Article.id,
        Article.title,
        Article.content,
    ).all()
