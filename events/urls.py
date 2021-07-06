from django.urls import path
from . import views

urlpatterns = [
    path('', views.EventListView.as_view()),
    path('<int:pk>/', views.EventDetailAPIView.as_view()),
    path('category/', views.EventCategoryListView.as_view()),
]
