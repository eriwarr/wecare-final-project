# Generated by Django 3.2.5 on 2021-07-20 16:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0005_auto_20210711_1523'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='date_created',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
