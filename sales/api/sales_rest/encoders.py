from common.json import ModelEncoder

from .models import SalesPerson, Customer, SalesRecord, AutomobileVO


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "is_sold",
    ]


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_id",
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer,
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
    ]


class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "price",
        "salesperson",
        "customer",
        "automobile",
    ]
    encoders = {
        "salesperson": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
        "automobile": AutomobileVOEncoder(),
    }
