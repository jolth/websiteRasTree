# -*- coding: utf-8 -*-
import web

urls = (
    "/", "Home",
)

app = web.application(urls, globals())

render = web.template.render("templates/")

class Home:
    def GET(self):
        return render.index()


# Quitar en producción
if __name__ == "__main__": app.run()
