from rest_framework import serializers
from .models import Event
from accounts.serializers import UserSerializer

class EventSerializer(serializers.ModelSerializer):
    has_owner_permissions = serializers.SerializerMethodField('get_owner_status')
    owner = serializers.ReadOnlyField(source='organizer.username')
    attendees = UserSerializer(read_only=True, many=True)

    def get_owner_status(self, obj):
        return obj.organizer == self.context['request'].user

    class Meta:
        model = Event
        fields = "__all__"
