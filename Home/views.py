from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateUserFrom
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

def Home(request):
    return render(request, 'home.html', {})


def registerPage(request):
    form = CreateUserFrom()
    if request.method == 'POST':
        form = CreateUserFrom(request.POST)
        if form.is_valid():
            form.save()
            user = form.cleaned_data.get('username')
            messages.success(request, 'Account was created for ' + user)

            return redirect('login')

    context = {'form':form}
    return render(request, 'register.html', context)


def loginPage(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username= username, password=password)
        if user is not None:
            login(request, user)
            return redirect('Home')
        else:
            messages.info(request,'Username OR password is incorrect')
            
    context = {}
    return render(request, 'login.html', context)

def logoutUser(request):
    logout(request)
    return redirect('login')
