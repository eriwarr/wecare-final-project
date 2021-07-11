from rest_framework import generics
from .models import Review
from .serializers import ReviewSerializer
from .permissions import IsAuthOrReadOnly
from django.shortcuts import render, get_object_or_404

class UserReviewListView(generics.ListCreateAPIView):

    serializer_class = ReviewSerializer
    permission_classes = (IsAuthOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_queryset(self):
        attendee = self.request.user
        return Review.objects.filter(author=self.request.user)

class OrganizerReviewListView(generics.ListAPIView):
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthOrReadOnly,)

    def get_queryset(self):
        organizer = self.request.user
        return Review.objects.filter(organizer=organizer)

class UserReviewDetailListView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthOrReadOnly,)
