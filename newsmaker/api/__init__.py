from flask import Blueprint


def set_up_views(app):
    mod = Blueprint('api', __name__)

    from newsmaker.views.articles import ArticleView
    mod.add_url_rule(
        '/news',
        view_func=ArticleView.as_view('news')
    )

    app.register_blueprint(mod, url_prefix='/api')
