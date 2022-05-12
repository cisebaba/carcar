import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


async function loadInventory() {
  let manufacturersData, vehicleModelsData, automobilesData,technicianData, appointmentData, salesrecordsData;
  const manufacturersResponse = await fetch('http://localhost:8100/api/manufacturers/');
  const vehicleModelsResponse = await fetch('http://localhost:8100/api/models/');
  const automobilesResponse = await fetch('http://localhost:8100/api/automobiles/');
  const technicianResponse = await fetch('http://localhost:8080/api/technicians/');
  const appointmentResponse = await fetch('http://localhost:8080/api/appointments/');
  const salesrecordsResponse = await fetch('http://localhost:8090/api/salesrecords/');
  
  if(manufacturersResponse.ok) {
    manufacturersData = await manufacturersResponse.json();
  }else{
    console.error("manufacturersResponse", manufacturersResponse);
  }
  if(vehicleModelsResponse.ok) {
    vehicleModelsData = await vehicleModelsResponse.json();
  }else{
    console.error("vehicleModelsResponse", vehicleModelsResponse);
  }
  if(automobilesResponse.ok) {
    automobilesData = await automobilesResponse.json();
  }else{
    console.error("automobilesResponse", automobilesResponse);
  }
  if(technicianResponse.ok) {
    technicianData = await technicianResponse.json();
  }else{
    console.error("techniciansResponse", technicianResponse);

  }
  if(appointmentResponse.ok) {
    appointmentData = await appointmentResponse.json();
  }else{
    console.error("appointmentResponse", appointmentResponse);
  }
  if(salesrecordsResponse.ok) {
    salesrecordsData = await salesrecordsResponse.json();
  }else{
    console.error("salesrecordsResponse", salesrecordsResponse);

  }

  root.render(
    <React.StrictMode>
      <App manufacturers={manufacturersData.manufacturers} 
        models={vehicleModelsData.models}
        salesrecords={salesrecordsData.sales}
        automobiles={automobilesData.autos} technicians={technicianData.technicians} appointments={appointmentData.appointments}/>
    </React.StrictMode>
  )
}

loadInventory();