from django.urls import path
from . import views

urlpatterns = [
    path('', views.UserReviewListView.as_view()),
    path('organizer_reviews/', views.OrganizerReviewListView.as_view()),
    path('<int:pk>/', views.UserReviewDetailListView.as_view()),
]
