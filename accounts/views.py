from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer
from django.shortcuts import render, get_object_or_404

# Create your views here.
class ProfileListAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ProfileViewAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProfileSerializer

    def get_object(self):
        return get_object_or_404(Profile, user=self.request.user)

    def perform_update(self, serializer):
        instance = serializer.save(user=self.request.user)

class OrganizerProfileListAPIView(generics.ListAPIView):
    serializer_class = ProfileSerializer

    def get_queryset(self):
        # import pdb; pdb.set_trace()
        return Profile.objects.filter(user__is_organizer=1)
