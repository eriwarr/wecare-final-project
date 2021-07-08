from rest_framework import serializers
from .models import Profile
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_auth.models import TokenModel
from django.contrib.auth.models import AbstractUser
from rest_auth.registration.serializers import RegisterSerializer

User = get_user_model()

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email','is_staff', 'is_organizer')

class TokenSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = TokenModel
        fields = ('key', 'user')

class CustomRegisterSerializer(RegisterSerializer):
    is_organizer = serializers.BooleanField()

    def custom_signup(self,request,user):
        user.is_organizer=self.validated_data.get("is_organizer")
        user.save()
