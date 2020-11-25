from rest_framework import serializers
from .models import User, Code

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'image', 'password', 'username', 'verified', 'likes')
        depth = 1

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


    def update(self, instance, validated_data):

        if 'password' in validated_data:
            instance.set_password(validated_data['password'])
        
        return super(UserSerializer, self).update(instance, validated_data)

class CodeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Code
        fields = ('id', 'user', 'verificationCode')