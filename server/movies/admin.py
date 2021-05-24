from django.contrib import admin

# Register your models here.
from .models import Movie
from accounts.models import User

admin.site.register(Movie)
admin.site.register(User)
