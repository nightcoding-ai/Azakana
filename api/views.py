from rest_framework import serializers, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import Group, User
from django.core import serializers
from .serializers import UserSerializer
from django.http import JsonResponse, HttpResponse
import requests
from .models import Team, Profile

API_DEV = 'api_key=RGAPI-8bf22d2a-24b4-493a-bd12-8534bb7ac05d'


def profile(request, server, pseudo):
    url = 'https://' + server + \
        '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + pseudo + "?" + API_DEV
    r = requests.get(url, headers={'Content-Type': 'application/json'})
    account = r.json()
    return JsonResponse(account)


def ranks(request, server, summonerId):
    url = 'https://' + server + \
        '.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summonerId + "?" + API_DEV
    r = requests.get(url, headers={'Content-Type': 'application/json'})
    ranking = r.json()
    return JsonResponse(ranking, safe=False)


def masteries(request, server, summonerId):
    url = 'https://' + server + \
        '.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/' + \
        summonerId + "?" + API_DEV
    r = requests.get(url, headers={'Content-Type': 'application/json'})
    data = r.json()
    return JsonResponse(data, safe=False)


def history(request, fullserver, summonerPuuid):
    url = 'https://' + fullserver + \
        '.api.riotgames.com/lol/match/v5/matches/by-puuid/' + \
        summonerPuuid + '/ids?start=0&count=10&' + API_DEV
    r = requests.get(url, headers={'Content-Type': 'application/json'})
    data = r.json()
    return JsonResponse(data, safe=False)


def historyDetails(request, server, idGame):
    url = 'https://' + server + \
        '.api.riotgames.com/lol/match/v4/matches/' + idGame + "?" + API_DEV
    r = requests.get(url, headers={'Content-Type': 'application/json'})
    data = r.json()
    return JsonResponse(data)


def equipe(request):
    data_temp = list(Team.objects.values('name', 'players'))
    data = []
    noms = []
    for i in data_temp:
        dict = {}
        # print(data)
        if not data:
            dict['name'] = i['name']
            noms.append(i['name'])
            dict['players'] = list()
            dict['players'].append(i['players'])
            data.append(dict)
        else:
            for j in data:
                #print(i, j)
                if (i['name'] == j['name'] and i['players'] not in j['players']):
                    j['players'].append(i['players'])

                elif i['name'] not in noms:
                    dict['name'] = i['name']
                    noms.append(i['name'])
                    dict['players'] = list()
                    dict['players'].append(i['players'])
                    data.append(dict)

    return JsonResponse(data, safe=False)


def profils(request):
    data = list(Profile.objects.values())
    return JsonResponse(data, safe=False)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
