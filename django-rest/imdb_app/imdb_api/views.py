from django.shortcuts import render
from rest_framework import permissions, viewsets
from .models import Movie, Genre, Comment
from .serializers import MovieSerializer, GenreSerializer, CommentSerializer
from django_filters.rest_framework import DjangoFilterBackend

class MovieViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer 
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title']

class GenreViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    permission_classes = [permissions.IsAuthenticated]

class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['movie']
    