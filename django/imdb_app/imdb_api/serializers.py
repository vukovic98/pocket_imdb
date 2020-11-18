from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Like, Movie, Comment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'password', 'username')

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

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
