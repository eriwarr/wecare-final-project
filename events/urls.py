from django.urls import path
from . import views

urlpatterns = [
    path('', views.EventListView.as_view()),
    path('category/', views.EventCategoryListView.as_view()),
    path('address/', views.EventLocationListView.as_view()),
    path('<int:pk>/', views.EventDetailAPIView.as_view()),
    path('event_log/', views.UserEventLogView.as_view()),
    path('organizer_event/', views.OrganizerEventsView.as_view()),
    path('organizer_event/<int:pk>/', views.OrganizerEventsDetailView.as_view()),
    path('attendance/', views.AttendanceAPIView.as_view()),
    path('attendance/<int:pk>/', views.AttendanceDetailAPIView.as_view()),
]


# path('<int:pk>/attendees/add/', views.RegisterAttendeeAPIView.as_view()),
