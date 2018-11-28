import logging

from flask import Flask
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager, Server

from newsmaker.api import set_up_views as api_views
from newsmaker.auth import set_up_views as auth_views
from newsmaker.lib.config import config, to_upper_cased_keys
from newsmaker.services.db import db

log = logging.getLogger(__name__)


def configure_views(app):
    api_views(app)
    auth_views(app)


def configure_db(app):
    db.init_app(app)


def configure_migration(app, db):
    return Migrate(app, db)


def configure_manager(app):
    manager = Manager(app)
    manager.add_command(
        "runserver",
        Server(host='0.0.0.0', threaded=True)
    )

    @manager.command
    def list_routes():
        from urllib.parse import unquote
        output = []
        for rule in app.url_map.iter_rules():

            options = {}
            for arg in rule.arguments:
                options[arg] = "[{0}]".format(arg)

            methods = ','.join(rule.methods)
            line = unquote(
                "{:50s} {:20s} {}".format(
                    rule.endpoint, methods, rule))
            output.append(line)

    manager.add_command('db', MigrateCommand)
    return manager


def create_app():
    app = Flask(__name__)
    app.config.update(to_upper_cased_keys(config['flask']))
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    configure_db(app)
    configure_migration(app, db)

    configure_views(app)
    app.manager = configure_manager(app)
    return app
