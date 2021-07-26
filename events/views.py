from rest_framework import generics, views
from .models import Event, Attendance
from .serializers import EventSerializer, AttendanceCreateSerializer, AttendanceReadSerializer, EventAddressSerializer
from .permissions import IsAuthOrReadOnly
from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
# Create your views here.

class EventListView(generics.ListCreateAPIView):
    permission_classes = (IsAuthOrReadOnly,)
    queryset = Event.objects.all().order_by("start")
    serializer_class = EventSerializer

    def perform_create(self, serializer):
        serializer.save(organizer=self.request.user)

class EventDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permissions = (IsAuthOrReadOnly,)

class UserEventLogView(generics.ListCreateAPIView):
    serializer_class = AttendanceReadSerializer
    permission_classes = (IsAuthOrReadOnly,)

    def get_queryset(self):
        attendee = self.request.user
        return Attendance.objects.filter(attendee=attendee)

class OrganizerEventsView(generics.ListCreateAPIView):
    serializer_class = EventSerializer
    permission_classes = (IsAuthOrReadOnly,)

    def get_queryset(self):
        organizer = self.request.user
        return Event.objects.filter(organizer=organizer)

class OrganizerEventsDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EventSerializer
    permission_classes = (IsAuthOrReadOnly,)

    def get_queryset(self):
        organizer = self.request.user
        return Event.objects.filter(organizer=organizer)

class AttendanceAPIView(generics.ListCreateAPIView):
    # queryset = Attendance.objects.all()
    serializer_class = AttendanceCreateSerializer
    permission_classes = (IsAuthOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(attendee=self.request.user)

    def get_queryset(self):
        organizer = self.request.user
        return Attendance.objects.filter(organizer=organizer)


class AttendanceDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceCreateSerializer
    permission_classes = (IsAuthOrReadOnly,)

class EventCategoryListView(generics.ListCreateAPIView):
    serializer_class = EventSerializer
    permission_classes = (IsAuthOrReadOnly,)

    def get_queryset(self):
        selection = self.request.query_params['category']
        return Event.objects.filter(category=selection)

class EventLocationListView(generics.ListCreateAPIView):
    serializer_class = EventAddressSerializer
    permission_classes = (IsAuthOrReadOnly,)
    queryset = Event.objects.all()


# class OrganizerEventsView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = AttendanceCreateSerializer
#     permission_classes = (IsAuthOrReadOnly,)
#
#     def get_queryset(self):
#         organizer = self.request.user
#         return Attendance.objects.filter(organization=organizer)


# class EventCategoryListView(generics.ListCreateAPIView):
#     serializer_class = EventSerializer
#
#     def get_queryset(self):
#         selection = self.request.query_params['category']
#         return Event.objects.filter(category=selection)

# class RegisterAttendeeAPIView(views.APIView):
#     def post(self, request, pk, format=None):
#         event = get_object_or_404(Event, id=pk)
#         user = self.request.user
#         event.attendees.add(user)
#         return Response('Resource updated successfully!', status=status.HTTP_200_OK)
