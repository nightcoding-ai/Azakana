from django.contrib.auth.models import Group
from django.http import JsonResponse
from django.http.response import HttpResponse
import requests
from .models import Teams, CustomUser

API_DEV = 'api_key=RGAPI-7359a042-7d85-4b67-bbf2-ce8acc14de4f'


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


def champions(request):
    url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json'
    r = requests.get(url, headers={'Content-Type': 'application/json'})
    data = r.json()
    return JsonResponse(data, safe=False)


def historyDetails(request, server, idGame):
    url = 'https://' + server + \
        '.api.riotgames.com/lol/match/v4/matches/' + idGame + "?" + API_DEV
    r = requests.get(url, headers={'Content-Type': 'application/json'})
    data = r.json()
    return JsonResponse(data)


def equipes(request):
    '''
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
    '''
    data = list(Teams.objects.values())
    return JsonResponse(data, safe=False)


def utilisateurs(request):
    data = list(CustomUser.objects.values('username', 'team'))
    return JsonResponse(data, safe=False)