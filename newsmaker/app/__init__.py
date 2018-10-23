from aiohttp import web


async def handle(request):
    return web.json_response(
        {
            'json_field_1': 1,
            'json_field_2': 'value'
        }
    )

app = web.Application(debug=True)
app.add_routes([web.get('/', handle)])
