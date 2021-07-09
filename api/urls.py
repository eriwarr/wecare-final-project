from django.urls import include, path

urlpatterns = [
    path('users/', include('accounts.urls')),
    path('events/', include('events.urls')),
    path('reviews/', include('reviews.urls')),
]
