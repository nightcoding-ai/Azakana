from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('auth/', obtain_auth_token),
    re_path(r'^statistiques', TemplateView.as_view(
        template_name='index.html')),
    re_path(r'^team', TemplateView.as_view(template_name='index.html')),
    re_path(r'^patch-notes', TemplateView.as_view(template_name='index.html')),
    re_path(r'^champions', TemplateView.as_view(template_name='index.html')),
    re_path(r'^e-sport', TemplateView.as_view(template_name='index.html')),
    re_path(r'^sign-up', TemplateView.as_view(template_name='index.html')),
]
