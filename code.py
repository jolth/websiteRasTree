# -*- coding: utf-8 -*-
import web
import urls
import view


app = web.application(urls.urls, globals())

app.notfound = view.notfound


class Home:
    def GET(self):
        return view.index()


# Quitar en producción
if __name__ == "__main__": app.run()
