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
    attendees = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='events', blank=True)
    address = models.CharField(max_length=64, default="1234 Alligator Highway")
    city = models.CharField(max_length=64, default="Greenville")
    state = models.CharField(max_length=2, default="SC")
    zip_code = models.CharField(max_length=5, default="43701")

    def __str__(self):
        return self.name
