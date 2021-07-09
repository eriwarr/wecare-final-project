from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from events.models import Event

class Review(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    feedback = models.TextField()
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=True)
