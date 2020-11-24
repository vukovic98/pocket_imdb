from rest_framework import serializers
from .models import Like, Movie, Comment, Genre


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie 
        fields = ('id', 'title', 'description', 'genre', 'image', 'times_viewed', 'comments')
        depth = 1

class LikeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Like
        fields = ('id', 'user', 'movie')

class GenreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Genre
        fields = ('name')

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'user', 'movie', 'content')


