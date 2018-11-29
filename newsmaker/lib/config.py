import logging
import os

import yaml


log = logging.getLogger()


def to_upper_cased_keys(mapping):
    result = {}
    for k, v in mapping.items():
        upper_cased_key = k.upper()
        result[upper_cased_key] = v
    return result


def parse_config():
    try:
        with open(os.getenv('CONFIG_FILE'), 'r') as config_file:
            return yaml.load(config_file)
    except Exception:
        return {}


config = parse_config()
