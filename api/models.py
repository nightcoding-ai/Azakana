from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE


class Team(models.Model):
    name = models.CharField(max_length=64, unique=True)
    players = models.ManyToManyField(User, default=None)


class Profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=32, unique=True, primary_key=True)
    #team = models.ForeignKey('Team', on_delete=models.CASCADE, default=None)
