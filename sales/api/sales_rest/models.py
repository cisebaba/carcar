from django.db import models

#from inventory.api.inventory_rest.models import Automobile

# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    is_sold = models.BooleanField()


class SalesPerson(models.Model):
    name = models.CharField(max_length=250)
    employee_id = models.PositiveSmallIntegerField(unique=True)


class Customer(models.Model):
    name = models.CharField(max_length=250)
    address = models.TextField()
    phone_number = models.PositiveSmallIntegerField(unique=True)


class SalesRecord(models.Model):
    price = models.PositiveIntegerField()

    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales",
        on_delete=models.CASCADE,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE,
    )

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE,
    )