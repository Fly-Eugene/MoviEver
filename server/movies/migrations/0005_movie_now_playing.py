# Generated by Django 3.2.3 on 2021-05-25 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0004_remove_movie_backdrop_path'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='now_playing',
            field=models.BooleanField(default=False),
        ),
    ]
