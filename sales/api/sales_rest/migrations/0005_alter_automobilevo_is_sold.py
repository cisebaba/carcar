# Generated by Django 4.0.3 on 2022-05-12 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0004_remove_salesrecord_sales_person_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automobilevo',
            name='is_sold',
            field=models.BooleanField(default=False),
        ),
    ]
