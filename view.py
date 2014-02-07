# -*- coding: utf-8 -*-
import web


render = web.template.render("templates/") 


# Custom NotFound message
def notfound():
    return web.notfound(render.notfound())


def index():
    return render.index()

