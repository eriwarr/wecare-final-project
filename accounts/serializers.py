from rest_framework import serializers
from .models import Profile
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_auth.models import TokenModel
from django.contrib.auth.models import AbstractUser

User = get_user_model()

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email','is_staff',)

class TokenSerializer(serializers.ModelSerializer):
    # id  = serializers.ReadOnlyField(source='user.id')
    # username = serializers.ReadOnlyField(source='user.username')
    # email = serializers.ReadOnlyField(source='user.email')
    # is_staff = serializers.ReadOnlyField(source='user.is_staff')
    user = UserSerializer()
    class Meta:
        model = TokenModel
        fields = ('key', 'user')
