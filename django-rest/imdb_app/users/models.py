from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    image = models.ImageField(upload_to='imgs/')
    verified = models.BooleanField(default=False)

class Code(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    verificationCode = models.CharField(max_length=6)
