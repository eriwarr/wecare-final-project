from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    is_organizer = models.BooleanField(default=False)

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    username = models.CharField(max_length=255)
    profile_picture = models.ImageField(upload_to='profiles/', default='profiles/volunteerdefault.jpeg')


    def __str__(self):
        return self.username
