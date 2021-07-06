from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now=True)
    event_date = models.DateTimeField(auto_now=False)
    organizer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    attendees = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='events', blank=True)
