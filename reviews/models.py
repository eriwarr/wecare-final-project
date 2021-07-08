from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class Review(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    title = models.CharField(max_length=255)
    feedback = models.TextField()
    picture = models.ImageField(upload_to='reviews/')
