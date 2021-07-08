from rest_framework import generics, views
from .models import Event
from .serializers import EventSerializer
from .permissions import IsAuthOrReadOnly
from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
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

class EventLogView(generics.ListCreateAPIView):
    serializer_class = EventSerializer
    permission_classes = (IsAuthOrReadOnly,)

    def get_queryset(self):
        attendee = self.request.user
        return Event.objects.filter(attendees=attendee)

class RegisterAttendeeAPIView(views.APIView):
    def post(self, request, pk, format=None):
        event = get_object_or_404(Event, id=pk)
        user = self.request.user
        event.attendees.add(user)
        return Response('Resource updated successfully!', status=status.HTTP_200_OK)

class OrganizerEventsView(generics.ListCreateAPIView):
    serializer_class = EventSerializer
    permission_classes = (IsAuthOrReadOnly,)

    def get_queryset(self):
        organizer = self.request.user
        return Event.objects.filter(organizer=organizer)
