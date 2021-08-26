from api.models import CustomUser
from django.http import response
from django.test import TestCase, Client
from .models import *

# Create your tests here.


class ChrisTestClass(TestCase):

    def test_champions(self):
        response = self.client.get('/api/Champions/')
        self.assertEqual(response.status_code, 200)

    def test_teams(self):
        response = self.client.get('/api/teams/')
        self.assertEqual(response.status_code, 200)

    def test_createTeam(self):
        user_added = CustomUser.objects.create(
            username="chris",
            email="chris@gmail.com"
        )
        user_added.save()

        Member.objects.create(
            team_id=1,
            user_id=1,
        )
        user_invited = CustomUser.objects.create(
            username="test",
            email="test@gmail.com"
        )
        user_invited.save()
        data = {
            'name': 'SKT',
            'user_id': 2
        }
        response = self.client.post(
            '/api/create_team/', data)
        self.assertEqual(response.status_code, 200)

    def test_members(self):
        res = self.client.get('/api/members/')
        self.assertEqual(res.status_code, 200)

    def test_users(self):
        res = self.client.get('/api/users/')
        self.assertEqual(res.status_code, 200)

    def test_user_custom(self):
        custom = 'chris'
        res = self.client.get('/api/users/'+custom, follow=True)
        self.assertEqual(res.status_code, 200)

    def test_addPlayer(self):
        user_added = CustomUser.objects.create(
            username="chris",
            email="chris@gmail.com"
        )
        user_added.save()

        team_skt = Teams.objects.create(name="SKT")
        team_skt.save()

        Member.objects.create(
            team_id=1,
            user_id=1,
        )
        user_invited = CustomUser.objects.create(
            username="test",
            email="test@gmail.com"
        )
        user_invited.save()
        data = {
            'team_name': 'SKT',
            'user_id': 2
        }

        res = self.client.post('/api/add_player/', data)
        res.content

    def test_profile(self):
        username = 'lamia classy'
        server = 'euw1'
        res = self.client.get('/api/profile/'+server+'/'+username)
        self.assertEqual(res.status_code, 200)

    def test_ranks(self):
        server = 'euw1'
        summonerId = 'TIb8LDXAoVISM6XFO5Y9TooyF6XhSUSNQg1c2F30B8XqhFY'
        res = self.client.get('/api/ranks/'+server+'/'+summonerId)
        self.assertEqual(res.status_code, 200)

    def test_history(self):
        server_full = 'europe'
        summonerPuuid = 'vGx8N4ZUwa2SYWrxaZ045T9vufjD8ab6WhU88ova4uUnud9Aq4Rw2yHJtaTUeHas5bUTSSg8J6S37A'
        res = self.client.get('/api/ranks/'+server_full+'/'+summonerPuuid)
        self.assertEqual(res.status_code, 200)

    def test_details(self):
        server = 'euw1'
        idGame = '5237756513'
        res = self.client.get('/api/ranks/'+server+'/'+idGame)
        self.assertEqual(res.status_code, 200)
