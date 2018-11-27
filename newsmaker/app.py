import logging

from flask import Flask

from newsmaker.api import set_up_views
from newsmaker.lib.config import config, to_upper_cased_keys
from newsmaker.services.db import db

log = logging.getLogger(__name__)


def configure_db(app):
    db.init_app(app)


def create_app():
    app = Flask(__name__)
    app.config.update(to_upper_cased_keys(config['flask']))
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    configure_db(app)

    set_up_views(app)

    return app
