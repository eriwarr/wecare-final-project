# Generated by Django 3.2.5 on 2021-07-06 18:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_alter_profile_profile_picture'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_organizer',
            field=models.BooleanField(default=False),
        ),
    ]
