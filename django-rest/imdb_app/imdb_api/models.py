from django.db import models
from imdb_app.users.models import User


class Genre(models.Model):
    name = models.CharField(max_length=20)

class Movie(models.Model):

    title = models.CharField(max_length=20)
    description = models.TextField(max_length=100)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE, null=False)
    image = models.CharField(max_length=60)

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, null=False)

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, null=False)
    content = models.TextField(max_length=200)

class Code(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    verificationCode = models.CharField(max_length=6)