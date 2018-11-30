from sqlalchemy import func

from newsmaker.bl.auth import get_current_user_id
from newsmaker.bl.tags import add_article_tag
from newsmaker.models.articles import Article
from newsmaker.models.tags import article_tags
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
        content=article_data.get('content'),
        rubric_id=article_data.get('rubric_id'),
        user_id=get_current_user_id(),
    )
    db.session.add(new_article_db)
    # flash db to create article id for many to many table article_tags
    db.session.flush()
    for tag_id in article_data.get('tags_ids'):
        add_article_tag(new_article_db.id, tag_id)
    db.session.commit()


def get_articles():
    return db.session.query(
        Article.id,
        Article.title,
        Article.content,
        Article.author_id,
        Article.rubric_id,
        func.array_agg(article_tags.c.tag_id).label('tags_ids'),
    ).join(
        article_tags,
        article_tags.c.article_id == Article.id
    ).group_by(
        Article.id,
        Article.title,
        Article.content,
        Article.author_id,
        Article.rubric_id,
    ).all()
