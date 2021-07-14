from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now=True)
    start = models.DateTimeField(auto_now=False, null=True)
    end = models.DateTimeField(auto_now=False, null=True)
    organizer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    address = models.CharField(max_length=64, default="1234 Alligator Highway")
    position = models.JSONField(null=True)

    def __str__(self):
        return self.name

class Attendance(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="attendance")
    attendee = models.ForeignKey(settings.AUTH_USER_MODEL, related_name= "attendee", on_delete=models.CASCADE, blank=True)
    confirmed = models.BooleanField(default=False)
    organizer = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="attendance_organizer", on_delete=models.CASCADE, null=True)
