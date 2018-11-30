from flask import Blueprint


def set_up_views(app):
    mod = Blueprint('api', __name__)

    from newsmaker.views.articles import ArticleView
    mod.add_url_rule(
        '/articles',
        view_func=ArticleView.as_view('articles')
    )

    from newsmaker.views.rubrics import RubricView
    mod.add_url_rule(
        '/rubrics',
        view_func=RubricView.as_view('rubrics')
    )

    from newsmaker.views.tags import TagView
    mod.add_url_rule(
        '/tags',
        view_func=TagView.as_view('tags')
    )

    from newsmaker.views.users import UserView
    mod.add_url_rule(
        '/users',
        view_func=UserView.as_view('users')
    )

    app.register_blueprint(mod, url_prefix='/api')
