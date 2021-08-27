from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.base import Model
from django.utils.translation import ugettext_lazy as _
from django.db.models.deletion import CASCADE
from .managers import CustomUserManager


class CustomUser(AbstractUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(_('email address'), unique=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = CustomUserManager()

    def __str__(self):
        return self.username


class Teams(models.Model):
    name = models.CharField(max_length=64, unique=True)
    members = models.ManyToManyField(CustomUser, through="Member")

    def __str__(self):
        return self.name


class Member(models.Model):
    team = models.ForeignKey(Teams, on_delete=CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=CASCADE, unique=True)

    def __str__(self):
        return str(self.team) + ' : ' + str(self.user)

class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.TextField()
    def __str__(self):
        return self.name
