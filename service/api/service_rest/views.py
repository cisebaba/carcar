from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, Technician, Appointment
from common.json import ModelEncoder
import json

# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties=['vin']

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [ 'name','employee_number']


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = ['vin_num','owner','date','time','reason','technician']
    encoders ={
        "technician": TechnicianEncoder(),
    }

    def get_extra_data(self,o):
        return {"technician": o.technician.name}

class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = ['vin_num','owner','date','date','time','reason']
    encoders ={
        "technician": TechnicianEncoder()
    }

    def get_extra_data(self,o):
        return {"technician": o.technician.name}



@require_http_methods(["GET","POST"])
def api_list_technician(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        print(technicians)
        return JsonResponse(
            {"technicians":technicians},
            encoder=TechnicianEncoder,
            safe=False
        )
    else: #POST
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False
        )

@require_http_methods(["GET","POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
            safe=False
        )
    else: #POST
        content = json.loads(request.body)
        print(content)

        try:
            technician = Technician.objects.get(id=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician href"},
                status=400,
            )

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
          appointment,
          encoder=AppointmentListEncoder,
          safe=False
        )

@require_http_methods(["DELETE","GET"])
def api_show_appointment(request,pk):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment, encoder=AppointmentDetailEncoder, safe=False
        )
    else:
        request.method == "DELETE"
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    
