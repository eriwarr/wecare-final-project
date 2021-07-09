# Generated by Django 3.2.5 on 2021-07-09 20:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0017_remove_attendance_organization'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance',
            name='event',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='attendance', to='events.event'),
        ),
    ]
