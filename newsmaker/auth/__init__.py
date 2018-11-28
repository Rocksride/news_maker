from flask import Blueprint


def set_up_views(app):
    mod = Blueprint('auth', __name__)

    from newsmaker.views.auth import RegisterView, LoginView
    mod.add_url_rule(
        '/register',
        view_func=RegisterView.as_view('register')
    )
    mod.add_url_rule(
        '/login',
        view_func=LoginView.as_view('login')
    )

    app.register_blueprint(mod, url_prefix='/auth')
