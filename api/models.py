from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.base import Model
from django.utils.translation import ugettext_lazy as _
from django.db.models.deletion import CASCADE
from .managers import CustomUserManager


class Teams(models.Model):
    name = models.CharField(max_length=64, unique=True)
    # members = models.ManyToManyField(CustomUser, default=None)

    def __str__(self):
        return self.name


class CustomUser(AbstractUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(_('email address'), unique=True)
    team = models.ForeignKey(
        Teams, default=None, on_delete=CASCADE, blank=True, null=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = CustomUserManager()

    def __str__(self):
        return self.username


class Members(models.Model):
    team = models.ForeignKey(Teams, on_delete=CASCADE)
    user = models.ManyToManyField(CustomUser)

    def __str__(self):
        return str(self.team)
