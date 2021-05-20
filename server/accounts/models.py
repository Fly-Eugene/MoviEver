from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.fields.related import ForeignKey, ManyToManyField


# Create your models here.
class User(AbstractUser):
    like_movies = ManyToManyField('movies.Movie', through='LikeMovie', related_name='like_users')

class LikeMovie(models.Model):
    movie = ForeignKey('movies.Movie', on_delete=models.CASCADE)
    user = ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()


