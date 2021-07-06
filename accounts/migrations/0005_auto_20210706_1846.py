# Generated by Django 3.2.5 on 2021-07-06 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_user_is_organizer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_organizer',
        ),
        migrations.AddField(
            model_name='profile',
            name='is_organizer',
            field=models.BooleanField(default=False),
        ),
    ]