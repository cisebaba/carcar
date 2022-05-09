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
  if (manufacturersResponse.ok && vehicleModelsResponse.ok && automobilesResponse.ok) {
    const manufacturersData = await manufacturersResponse.json();
    const vehicleModelsData = await vehicleModelsResponse.json();
    const automobilesData = await automobilesResponse.json();
    root.render(
      <React.StrictMode>
        <App manufacturers={manufacturersData.manufacturers} 
          models={vehicleModelsData.models}
          automobiles={automobilesData.autos}/>
      </React.StrictMode>
    );
  } else {
    console.error("manufacturersResponse", manufacturersResponse);
    console.error("vehicleModelsResponse", vehicleModelsResponse);
    console.error("automobilesResponse", automobilesResponse);
  }
}
loadInventory();