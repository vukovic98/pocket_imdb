from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register(r'movies', views.MovieViewSet, basename='movie')
router.register(r'genres', views.GenreViewSet, basename='genre')
router.register(r'comments', views.CommentViewSet, basename='comment')
router.register(r'likes', views.LikeViewSet, basename='like')


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
] 