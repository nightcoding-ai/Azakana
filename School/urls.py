from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    re_path(r'^statistiques', TemplateView.as_view(template_name='index.html')),
    re_path(r'^team', TemplateView.as_view(template_name='index.html')),
    re_path(r'^patch-notes', TemplateView.as_view(template_name='index.html')),
    re_path(r'^champions', TemplateView.as_view(template_name='index.html')),
    re_path(r'^e-sport', TemplateView.as_view(template_name='index.html')),
    re_path(r'^sign-in', TemplateView.as_view(template_name='index.html')),
    re_path(r'^sign-up', TemplateView.as_view(template_name='index.html')),
    re_path(r'^connected', TemplateView.as_view(template_name='index.html')),
    re_path(r'^Add_team', TemplateView.as_view(template_name='index.html')),
    re_path(r'^Join_team', TemplateView.as_view(template_name='index.html')),
    re_path(r'^mentions', TemplateView.as_view(template_name='index.html')),
    re_path(r'^contact', TemplateView.as_view(template_name='index.html')),

]
