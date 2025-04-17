from django.views.generic import View
from django.http import HttpResponse
import os

class FrontendAppView(View):
    def get(self, request):
        try:
            file_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'staticfiles', 'index.html')
            with open(file_path) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            return HttpResponse("index.html no encontrado", status=404)
