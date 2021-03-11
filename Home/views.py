from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateUserFrom
# Create your views here.

def Home(request):
    return render(request, 'home.html', {})


def registerPage(request):
    form = CreateUserFrom()
    if request.method == 'POST':
        form = CreateUserFrom(request.POST)
        if form.is_valid():
            form.save()

    context = {'form':form}
    return render(request, 'register.html', context)


def loginPage(request):
    context = {}
    return render(request, 'login.html', context)
