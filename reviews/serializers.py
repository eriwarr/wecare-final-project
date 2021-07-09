from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    has_owner_permissions = serializers.SerializerMethodField('get_owner_status')
    event_name = serializers.ReadOnlyField(source='event.name')

    def get_owner_status(self,obj):
        return obj.author == self.context['request'].user

    class Meta:
        model = Review
        fields = '__all__'
        depth = 1
