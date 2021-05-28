from allauth.account.views import confirm_email
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^account/', include('allauth.urls')),
    path('profile/<str:server>/<str:pseudo>', views.profile),
    path('ranks/<str:server>/<str:summonerId>', views.ranks),
    path('masteries/<str:server>/<str:summonerId>', views.masteries),
    path('history/<str:fullserver>/<str:summonerPuuid>', views.history),
    path('details/<str:server>/<str:idGame>', views.historyDetails),
    path('Champions/', views.champions, name='champions'),
    path('teams/', views.equipes, name='teams'),
    path('teams/<int:index>/', views.equipes, name='team'),
    path('users/', views.utilisateurs, name='users'),
    path('users/<str:user>/', views.utilisateurs, name='user'),
]
