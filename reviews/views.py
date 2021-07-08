from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer
from django.shortcuts import render, get_object_or_404

class UserReviewListView(generics.ListCreateView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthOrReadOnly,)

    def perform_create(self, serializer):
    serializer.save(author=self.request.user)

    
