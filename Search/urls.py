from django.urls import path
from Search import views

urlpatterns = [
    path('', views.Search, name='Search'),

]