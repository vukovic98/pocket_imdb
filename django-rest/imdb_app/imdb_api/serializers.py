from rest_framework import serializers
from .models import Like, Movie, Comment, Genre


class MovieSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )
    class Meta:
        model = Movie 
        fields = ('id', 'title', 'description', 'genre', 'image', 'times_viewed', 'comments', 'user')

    

class LikeSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )
    class Meta:
        model = Like
        fields = ('id', 'user', 'movie')

class GenreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Genre
        fields = ('id', 'name')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'user', 'movie', 'content')


