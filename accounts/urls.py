from django.urls import include, path

from . import views

app_name = 'api_v1'

urlpatterns = [
    path('profiles/', views.ProfileListAPIView.as_view()),
    path('profiles/user/', views.ProfileDetailAPIView.as_view()),
]
