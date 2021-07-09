from rest_framework import serializers
from .models import Event, Attendance
from accounts.serializers import UserSerializer
from django.contrib.auth.models import User
from django.conf import settings


class AttendanceCreateSerializer(serializers.ModelSerializer):
    volunteer = serializers.ReadOnlyField(source='attendee.username')

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

    # attendance = serializers.SerializerMethodField()



    # All the attendace objects (you are trying to filter them)
    # Attendee is a User (this targets a specific User record in the Users table)
    # __event is going to target an event that was created by that User

    # def get_attendance(self, obj):
    #     selected_attendance = Attendance.objects.filter(
    #         attendee__event=obj)
    #     return AttendanceCreateSerializer(selected_attendance, many=True).data

    def get_owner_status(self, obj):
        return obj.organizer == self.context['request'].user

    class Meta:
        model = Event
        fields = "__all__"
