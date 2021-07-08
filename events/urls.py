from django.urls import path
from . import views

urlpatterns = [
    path('', views.EventListView.as_view()),
    path('<int:pk>/', views.EventDetailAPIView.as_view()),
    path('category/', views.EventCategoryListView.as_view()),
    path('event_log/', views.EventLogView.as_view()),
    path('<int:pk>/attendees/add/', views.RegisterAttendeeAPIView.as_view()),
    path('organizer_event/', views.OrganizerEventsView.as_view())
]
