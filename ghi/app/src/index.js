import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


async function loadInventory() {
  const manufacturersResponse = await fetch('http://localhost:8100/api/manufacturers/');
  const vehicleModelsResponse = await fetch('http://localhost:8100/api/models/');
  const automobilesResponse = await fetch('http://localhost:8100/api/automobiles/');
  const technicianResponse = await fetch('http://localhost:8080/api/technicians/');
  const appointmentResponse = await fetch('http://localhost:8080/api/appointments/');
  
  if (manufacturersResponse.ok && vehicleModelsResponse.ok && automobilesResponse.ok && technicianResponse.ok && appointmentResponse.ok) {
    const manufacturersData = await manufacturersResponse.json();
    const vehicleModelsData = await vehicleModelsResponse.json();
    const automobilesData = await automobilesResponse.json();
    const technicianData = await technicianResponse.json();
    const appointmentData = await appointmentResponse.json();
  
    root.render(
      <React.StrictMode>
        <App manufacturers={manufacturersData.manufacturers} 
          models={vehicleModelsData.models}
          automobiles={automobilesData.autos} technicians={technicianData.technicians} appointments={appointmentData.appointments}/>
      </React.StrictMode>
    );
  } else {
    console.error("manufacturersResponse", manufacturersResponse);
    console.error("vehicleModelsResponse", vehicleModelsResponse);
    console.error("automobilesResponse", automobilesResponse);
    console.error("techniciansResponse", technicianResponse);
    console.error("appointmentResponse", appointmentResponse);

  }
}
loadInventory();