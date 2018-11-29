from flask import Blueprint


def set_up_views(app):
    mod = Blueprint('auth', __name__)

    from newsmaker.views.auth import RegisterView, LoginView, ValidateTokenView
    mod.add_url_rule(
        '/register',
        view_func=RegisterView.as_view('register')
    )
    mod.add_url_rule(
        '/login',
        view_func=LoginView.as_view('login')
    )
    mod.add_url_rule(
        '/validate_token',
        view_func=ValidateTokenView.as_view('validate_token')
    )

    app.register_blueprint(mod, url_prefix='/auth')
