from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .serializers import UserSerializer
from django.http import JsonResponse, HttpResponse
import requests
import json


def profile(request, server, pseudo):
    API_DEV = '?api_key=RGAPI-cf20f189-4379-4fb0-81a9-f09eb8337db8'
    url = 'https://' + server + \
        '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + pseudo + API_DEV
    r = requests.get(url, headers={'Content-Type': 'application/json'})
    account = r.json()
    return JsonResponse(account)


def ranks(request, server, summonerId):
    API_DEV = '?api_key=RGAPI-cf20f189-4379-4fb0-81a9-f09eb8337db8'
    url = 'https://' + server + \
        '.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summonerId + API_DEV
    r = requests.get(url, headers={'Content-Type': 'application/json'})
    ranking = r.json()
    return JsonResponse(ranking, safe=False)


def masteries(request, server, summonerId):
    API_DEV = '?api_key=RGAPI-cf20f189-4379-4fb0-81a9-f09eb8337db8'
    url = 'https://' + server + \
        '.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/' + \
        summonerId + API_DEV
    r = requests.get(url, headers={'Content-Type': 'application/json'})
    data = r.json()
    return JsonResponse(data, safe=False)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
