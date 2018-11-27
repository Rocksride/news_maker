from flask import Blueprint


def set_up_views(app):
    from newsmaker.views.news import NewsView
    mod = Blueprint('api', __name__)

    mod.add_url_rule(
        '/news',
        view_func=NewsView.as_view('news')
    )
    app.register_blueprint(mod, url_prefix='/api')
