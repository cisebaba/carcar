from common.json import ModelEncoder

from .models import SalesPerson, Customer, SalesRecord, AutomobileVO


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_id",
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer,
    properties = [
        "name",
        "address",
        "phone_number",
    ]
