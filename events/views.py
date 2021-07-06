from rest_framework import generics
from .models import Event
from .serializers import EventSerializer
from .permissions import IsAuthOrReadOnly
from django.shortcuts import render, get_object_or_404
# Create your views here.
class EventListView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permissions = (IsAuthOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(organizer=self.request.user)

class EventDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permissions = (IsAuthOrReadOnly,)

class EventCategoryListView(generics.ListCreateAPIView):
    serializer_class = EventSerializer

    def get_queryset(self):
        selection = self.request.query_params['category']
        return Event.objects.filter(category=selection)
