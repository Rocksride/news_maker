import os
import socket

from aiohttp import web
from redis import Redis, RedisError


# Connect to Redis
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)


async def handle(request):
    try:
        visits = redis.incr("counter")
    except RedisError:
        visits = "<i>cannot connect to Redis, counter disabled</i>"
    html = "<h3>Welcome, {name}!</h3>" \
           "<b>Hostname:</b> {hostname}<br/>" \
           "<b>Visits:</b> {visits}"
    return web.Response(
        body=html.format(
            name=os.getenv("NAME", "world"),
            hostname=socket.gethostname(),
            visits=visits,
        ),
    )

app = web.Application()
app.add_routes([web.get('/', handle)])
