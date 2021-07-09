# Generated by Django 3.2.5 on 2021-07-09 19:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0014_remove_event_attendees'),
    ]

    operations = [
        migrations.AddField(
            model_name='attendance',
            name='organization',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='attendance', to='events.event'),
        ),
        migrations.AlterField(
            model_name='attendance',
            name='event',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event', to='events.event'),
        ),
    ]
