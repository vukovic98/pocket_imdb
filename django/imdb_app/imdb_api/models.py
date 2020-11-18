from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Movie(models.Model):

    GENRE = (
        ('1', 'Action'),
        ('2', 'Horror'),
        ('3', 'Comedy'),
        ('4', 'Drama'),
        ('5', 'Science Fiction'),
        ('6', 'Romance'),
        ('7', 'Animation'),
        ('8', 'Thriller'),
        ('9', 'Adventure')
    )

    title = models.CharField(max_length=20)
    description = models.TextField(max_length=100)
    genre = models.CharField(max_length=1, choices=GENRE)
    image = models.CharField(max_length=60)

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, null=False)

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, null=False)
    content = models.TextField(max_length=200)