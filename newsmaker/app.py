import logging

from flask import Flask

from newsmaker.lib.config import config, to_upper_cased_keys


log = logging.getLogger(__name__)


def create_app():
    app = Flask(__name__)
    app.config.update(to_upper_cased_keys(config['flask']))

    return app
