# CarCar

DreamTeam:

* Amanda K.- Sales
* Cise  - Service


## Design
We determined that the bounded contexts of the problem domain would align with the three main portions of our application: Automobile Inventory, Automobile Service, and Automobile Sales. We began first with bulding out the Inventory front end to better understand the existing models and APIs. We determined that the Service and Sales microservices would poll the Inventory for automobile data, which is then utilized within each respective microservice. For a more detailed look at our bounded contexts and overall application design, please see the diagram below.

![Project Beta Design](ProjectBetaAKCB_Design.png)

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

For the Sales microservice, I created a model for the following, based on the requirements, our application design, and with consideration for the forms that were to be built: SalesPerson, Customer, SalesRecord, and AutomobileVO. 

New Sales People and Customer instances are added to the database upon submission of the "Add a sales person" and "Add a potential customer" forms, respectively. This Sales Person and Customer data, along with data for available automobiles (described below) then populates the form to create a new Sale Record. 

The Sales microservice poller requests and receives automobile data from the Inventory via the existing automobile API. For each automobile available in the inventory, a new AutomobileVO instance is created within the Sales microservice. The automobile VIN is shared between systems and acts as the unique identifier. I added an is_sold Boolean field to the AutomobileVO model, which defaults to False upon creation of the VO instance. When a Sale Record is created with a specific VIN, the AutomobileVO instance associated with that same VIN is updated to reflect having a sold status of True now within the database. Only the automobiles which have not yet been sold are available to select on the Sale Record creation form. 

Last, I created list views to display all of the Sales Records overall, and for sales records associated to a specific Sales Person, based on their unique employee ID. 