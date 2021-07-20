from rest_framework import serializers
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    has_owner_permissions = serializers.SerializerMethodField('get_owner_status')
    event_name = serializers.ReadOnlyField(source='event.name')
    author_name = serializers.ReadOnlyField(source='author.first_name')
    organizer = serializers.ReadOnlyField(source='organizer.username')

    def get_owner_status(self,obj):
        return obj.author == self.context['request'].user

    class Meta:
        model = Review
        fields = '__all__'
        
