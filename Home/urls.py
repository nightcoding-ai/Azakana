from django.urls import path, re_path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    re_path(r'^statistiques', TemplateView.as_view(
        template_name='index.html')),
    re_path(r'^team', TemplateView.as_view(template_name='index.html')),
    re_path(r'^patch-notes', TemplateView.as_view(template_name='index.html')),
    re_path(r'^champions', TemplateView.as_view(template_name='index.html')),
    re_path(r'^e-sport', TemplateView.as_view(template_name='index.html')),
    re_path(r'^sign-up', TemplateView.as_view(template_name='index.html')),
    path('api/Home/', views.HomeListCreate.as_view()),
    path('login', views.loginPage, name='login'),
    path('register', views.registerPage, name='register'),
    path('logout', views.logoutUser, name='logout'),
]
