# Generated by Django 3.0.6 on 2020-11-19 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='veryfied',
            field=models.BooleanField(default=False),
        ),
    ]
