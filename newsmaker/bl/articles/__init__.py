from sqlalchemy import func, Date, cast

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
        author_id=get_current_user_id(),
    )
    db.session.add(new_article_db)
    db.session.commit()
    for tag_id in article_data.get('tags_ids'):
        add_article_tag(new_article_db.id, tag_id)


def get_articles(search_filter):
    query = db.session.query(
        Article.id,
        Article.create_date,
        Article.update_date,
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
    )
    query = apply_search_filter(search_filter, query)
    return query.all()


def apply_search_filter(search_filter, query):
    if search_filter.get('title'):
        query = query.filter(
            Article.title.ilike(f'%{search_filter.get("title")}%')
        )
    if search_filter.get('rubric_id'):
        query = query.filter(
            Article.rubric_id == search_filter.get('rubric_id')
        )
    if search_filter.get('author_id'):
        query = query.filter(
            Article.author_id == search_filter.get('author_id')
        )
    if search_filter.get('tags_ids'):
        article_with_tags_subquery = db.session.query(
            article_tags.c.article_id,
        ).filter(
            article_tags.c.tag_id.in_(search_filter.get('tags_ids'))
        ).subquery()
        query = query.filter(
            Article.id.in_(article_with_tags_subquery)
        )
    create_date_from = search_filter.get('create_date_from')
    if create_date_from:
        query = query.filter(
            cast(Article.create_date, Date) >= create_date_from
        )
    create_date_to = search_filter.get('create_date_to')
    if create_date_to:
        query = query.filter(
            cast(Article.create_date, Date) <= create_date_to
        )
    return query
