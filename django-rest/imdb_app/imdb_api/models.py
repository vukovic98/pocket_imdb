from django.db import models
from imdb_app.users.models import User


class Genre(models.Model):
    name = models.CharField(max_length=20)

class Movie(models.Model):

    title = models.CharField(max_length=50)
    description = models.TextField(max_length=500)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE, null=False)
    image = models.CharField(max_length=160)
    times_viewed = models.PositiveIntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, related_name='movies')

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, related_name='likes')
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, null=False)

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, null=False, related_name='comments')
    content = models.TextField(max_length=200)
