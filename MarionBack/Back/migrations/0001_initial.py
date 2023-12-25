# Generated by Django 3.2.12 on 2023-12-25 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Element',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagine', models.ImageField(upload_to='imagini/')),
                ('perioada', models.TextField()),
                ('tarif', models.TextField()),
                ('telefon', models.TextField()),
                ('url', models.CharField(max_length=255)),
                ('program', models.TextField()),
                ('include', models.TextField()),
                ('nu_include', models.TextField()),
                ('acte', models.TextField()),
                ('important', models.TextField()),
            ],
        ),
    ]
