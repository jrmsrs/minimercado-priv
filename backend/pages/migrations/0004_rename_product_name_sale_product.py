# Generated by Django 4.0.3 on 2022-03-30 04:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0003_sector_category_product_category'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sale',
            old_name='product_name',
            new_name='product',
        ),
    ]