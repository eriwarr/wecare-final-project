from rest_framework import serializers
from .models import Event, Attendance
from accounts.serializers import UserSerializer
from django.contrib.auth.models import User
from django.conf import settings


class AttendanceCreateSerializer(serializers.ModelSerializer):
    volunteer = serializers.ReadOnlyField(source='attendee.username')
    last_name = serializers.ReadOnlyField(source='attendee.last_name')
    name = serializers.ReadOnlyField(source='event.name')
    date = serializers.ReadOnlyField(source='event.start')
    location = serializers.ReadOnlyField(source='event.address')

    class Meta:
        model = Attendance
        fields = '__all__'

class AttendanceReadSerializer(serializers.ModelSerializer):
    volunteer = serializers.ReadOnlyField(source='attendee.username')
    class Meta:
        model = Attendance
        fields = '__all__'
        depth=2

class EventSerializer(serializers.ModelSerializer):
    has_owner_permissions = serializers.SerializerMethodField('get_owner_status')
    owner = serializers.ReadOnlyField(source='organizer.username')
    attendance = AttendanceCreateSerializer(many=True, read_only=True)

    def get_owner_status(self, obj):
        return obj.organizer == self.context['request'].user

    class Meta:
        model = Event
        fields = ("__all__")
        depth=1

class EventAddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = ("id", "address","position","name")
