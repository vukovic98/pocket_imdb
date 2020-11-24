from django.shortcuts import render
from .serializers import UserSerializer, CodeSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser, MultiPartParser
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import permissions, viewsets
from .models import User, Code
from random import randint
from django.core.mail import send_mail
from django_filters.rest_framework import DjangoFilterBackend
import os

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer 
    #permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['username']

class SessionUserData(APIView):

    permission_classes = [IsAuthenticated]
    

    def get(self, request):
        user_data = UserSerializer(request.user).data

        return Response(data=user_data)


class CustomUserVerify(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        code = request.data['code']
        mail = request.data['username']

        user = User.objects.get(username=mail)

        if user and user.code.verificationCode == str(code):
            user.code.delete()
            user.verified = True
            user.save()
            return Response(status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

class CustomUserRegister(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = UserSerializer(data=request.data)
        
        if reg_serializer.is_valid(raise_exception=True):
            newUser = reg_serializer.save()
            
            userUrl = os.getenv('USER_PATH') + str(newUser.id) + "/"
            print(userUrl)
            newCode = {
                "user": userUrl ,
                "verificationCode": randint(100000, 999999)
            }
            serializer_context = {
                'request': request,
            }
            code_reg = CodeSerializer(data=newCode, context=serializer_context)

            if code_reg.is_valid(raise_exception=True):
                code_reg.save() 
                send_mail(
                    'Verification Mail',
                    'Follow the link and insert the code below.\n'+ os.getenv('VERIFICATION_PATH') +'\n' + str(code_reg.data['verificationCode']),
                    'from@example.com',
                    [reg_serializer.data['username']],
                    fail_silently=False,
                )
                return Response(data=reg_serializer.data , status=status.HTTP_201_CREATED)
        
        return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)