from rest_framework import serializers
from .models import User, Code

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'image', 'password', 'username', 'verified')

    def create(self, validated_data):
        user = User(
            image=validated_data['image'],
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            verified=False
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class CodeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Code
        fields = ('id', 'user', 'verificationCode')