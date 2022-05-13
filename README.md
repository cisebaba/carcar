# CarCar

DreamTeam:

* Amanda K.- Sales
* Cise  - Service


## Design
We determined that the bounded contexts of the problem domain would align with the three main portions of our application: Automobile Inventory, Automobile Service, and Automobile Sales. We began first with bulding out the Inventory front end to better understand the existing models and APIs. We determined that the Service and Sales microservices would poll the Inventory for automobile data, which is then utilized within the respective microservice. For a more detailed look at our bounded contexts and overall application design, please see the diagram below.

![Project Beta Design](ProjectBetaAKCB_Design.png)

## Service microservice

Service microservice is handling; creating a technician, creating an appointment with a specific technician, to list the appointments filtering by their VIP or completed status. 
Appointment, Technician, AutomobileVo is created. I preferred the completed appointment and VIP status as a boolean property. 
I polled the Automobile list to my microservice to compare if the VIN numbers are matching with the created appointment VIN num and changed the VIP status. Finished button is hiding it from the list. The cancel button is removing the appointment forever from the database.  
The search feature is working with an “onChange” attribute any type of change will filter the result of appointments. Completed appointments are green highlighted, black highlighted VIN numbers are VIP customers. I prefered to change the status of VIP at the back-end on the views. 


## Sales microservice

Explain your models and integration with the inventory
microservice, here.