from django.urls import path
from Home import views

urlpatterns = [
    path('', views.Home, name='Home'),
    path('login', views.loginPage, name='login'),
    path('register', views.registerPage, name='register'),
]
