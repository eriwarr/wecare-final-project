# Generated by Django 3.2.5 on 2021-07-07 18:22

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('events', '0004_auto_20210707_1818'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='attendee',
        ),
        migrations.AddField(
            model_name='event',
            name='attendees',
            field=models.ManyToManyField(blank=True, related_name='events', to=settings.AUTH_USER_MODEL),
        ),
    ]
