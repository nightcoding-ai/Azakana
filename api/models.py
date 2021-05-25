from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.db.models.deletion import CASCADE
from .managers import CustomUserManager


class CustomUser(AbstractUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(_('email address'), unique=True)
    teams = models.CharField(max_length=150, blank=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = CustomUserManager()
    

    def __str__(self):
        return self.username

class Team(models.Model):
    name = models.CharField(max_length=64, unique=True)
    players = models.ManyToManyField(CustomUser, default=None)


class Profile(models.Model):
    user = models.OneToOneField(CustomUser, null=True, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=32, unique=True, primary_key=True)
    #team = models.ForeignKey('Team', on_delete=models.CASCADE, default=None)