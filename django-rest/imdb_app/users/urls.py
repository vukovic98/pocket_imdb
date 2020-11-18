from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register(r'users', views.UserViewSet, basename='user')


urlpatterns = [
    path('', include(router.urls)),
    path('api/auth/register/', views.CustomUserRegister.as_view(), name='create_user'),
] 