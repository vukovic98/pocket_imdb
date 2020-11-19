from rest_framework import serializers
from .models import Like, Movie, Comment


class MovieSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Movie 
        fields = ('id', 'title', 'description', 'genre', 'image')

class LikeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Like
        fields = ('id', 'user', 'movie')

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'user', 'movie', 'content')

