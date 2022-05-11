from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import SalesPerson, Customer, SalesRecord, AutomobileVO
from .encoders import SalesPersonEncoder, CustomerEncoder, SalesRecordEncoder

# Create your views here.

@require_http_methods(["GET", "POST"])
def api_salespeople(request):
    if request.method == "GET":
        salespeople = SalesPerson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalesPersonEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            salesperson = SalesPerson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the salesperson"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_salesperson(request, pk):
    if request.method == "GET":
        try:
            salesperson = SalesPerson.objects.get(id=pk)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            salesperson = SalesPerson.objects.get(id=pk)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:
        try:
            content = json.loads(request.body)
            salesperson = SalesPerson.objects.get(id=pk)

            props = ["employee_id"]
            for prop in props:
                if prop in content:
                    setattr(salesperson, prop, content[prop])
            salesperson.save()
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response



@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the customer"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_customer(request, pk):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=pk)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=pk)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.get(id=pk)

            props = ["phone_number"]
            for prop in props:
                if prop in content:
                    setattr(customer, prop, content[prop])
            customer.save()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_salesrecords(request):
    if request.method == "GET":
        sales = SalesRecord.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SalesRecordEncoder,
        )
    # else:
    #     try:
    #         content = json.loads(request.body)
    #         print("content: ", content)
    #         #
    #         employee_id = content["salesperson"]
    #         salesperson = SalesPerson.objects.get(pk=employee_id)
    #         content["salesperson"] = salesperson

    #         customer_id = content["customer"]
    #         customer = Customer.objects.get(pk=customer_id)
    #         print("customer", customer)
    #         content["customer"] = customer

    #         vin = content["automobile"]
    #         # Issue with line below - figure out why automobile is not printing
    #         automobile = AutomobileVO.objects.get(pk=id)
    #         print("automobile: ", automobile)
    #         content["automobile"] = automobile

    #         sale = SalesRecord.objects.create(**content)
    #         return JsonResponse(
    #             sale,
    #             encoder=SalesRecordEncoder,
    #             safe=False,
    #         )
    #     except:
    #         response = JsonResponse(
    #             {"message": "Could not create the sales record"}
    #         )
    #         response.status_code = 400
    #         return response
