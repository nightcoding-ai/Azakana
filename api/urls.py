from allauth.account.views import confirm_email
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from .views import *
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^account/', include('allauth.urls')),
    path('profile/<str:server>/<str:pseudo>', profile),
    path('ranks/<str:server>/<str:summonerId>', ranks),
    path('masteries/<str:server>/<str:summonerId>', masteries),
    path('history/<str:fullserver>/<str:summonerPuuid>', history),
    path('details/<str:server>/<str:idGame>', historyDetails),
    path('Champions/', champions, name='champions'),
    path('teams/', equipes, name='teams'),
    path('teams/<int:index>/', equipes, name='team'),
    path('users/', utilisateurs, name='users'),
    path('users/<str:user>/', utilisateurs, name='user'),
    path('members/', members, name='members'),
    path('members/<int:user_id>', members, name='members'),
    path('create_team/', createTeam, name='creating'),
    path('join_team/', joinTeam, name='joining'),
    path('csrf_token/', get_or_create_csrf_token, name='csrf'),
]
