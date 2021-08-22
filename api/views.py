from django.contrib.auth.models import Group
from django.http import JsonResponse
from django.http.response import HttpResponse
import requests
from .models import Member, Teams, CustomUser
from django.db.models import Count
from django.middleware import csrf

API_DEV = 'api_key=RGAPI-6d65a016-9895-4397-8b9a-8266f7d06bc8'


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


def equipes(request, index=0):
    if index != 0:
        data = list(Teams.objects.filter(id=index).values('name'))
        if len(data) > 0:
            team = data[0]
            return JsonResponse(team, safe=False)
        else:
            error = {
                "error": 'wrong request, this number is not in our index.'
            }
            return JsonResponse(error)
    elif index == 0:
        data = list(Teams.objects.values())
        return JsonResponse(data, safe=False)


def utilisateurs(request, user='default'):
    if user != 'default':
        alldata = list(CustomUser.objects.values())
        for i in alldata:
            if i['username'] == user:
                utilisateur = i
                return JsonResponse(utilisateur, safe=False)
        else:
            error = {
                "error": 'wrong request, the username introduced does not exist.'
            }
            return JsonResponse(error)
    elif user == 'default':
        data = list(CustomUser.objects.values('id', 'username', 'email'))
        return JsonResponse(data, safe=False)


def members(request):
    data = list(Member.objects.values())
    return JsonResponse(data, safe=False)


def createTeam(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        Teams.objects.create(
            name=name,
        )
    return JsonResponse({"status": 'Success'})


def joinTeam(request):
    if request.method == 'POST':
        team = request.POST.get('team')
        user = request.POST.get('user')
        Member.objects.create(
            team=team,
            user=user
        )
    return JsonResponse({"status": 'Success'})


def get_or_create_csrf_token(request):
    token = request.META.get('CSRF_COOKIE', None)
    if token is None:
        token = csrf._get_new_csrf_key()
        request.META['CSRF_COOKIE'] = token
    request.META['CSRF_COOKIE_USED'] = True
    return HttpResponse(token)
