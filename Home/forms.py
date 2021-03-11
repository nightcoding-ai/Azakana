from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(label="Summoner Name" )
    region = forms.but