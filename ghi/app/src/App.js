import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './pages/ManufacturerList';
import ManufacturerForm from './pages/ManufacturerForm';
import ModelsList from './pages/ModelsList';
import AutomobileList from './pages/AutomobileList';
import ModelForm from './pages/ModelForm';
import AutomobileForm from './pages/AutomobileForm';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';
import TechnicianForm from './pages/servicePages/TechnicianForm';
import AppointmentForm from './pages/servicePages/AppointmentForm';
import AppointmentList from './pages/servicePages/AppointmentList';
import VinHistory from './pages/servicePages/VinHistory';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='manufacturers' element= {<ManufacturerList manufacturers={props.manufacturers}/>}/>
          <Route path='manufacturers/new' element= {<ManufacturerForm/>}/>
          <Route path='automobiles' element= {<AutomobileList automobiles={props.automobiles}/>}/>
          <Route path="models">
            <Route path="" element={<ModelsList models={props.models}/>} />
            <Route path="new" element={<ModelForm />} />
          </Route>
          <Route path='automobiles/new' element={<AutomobileForm/>}/>
          <Route path='salespeople' element={<SalesPersonForm/>}/>
          <Route path='customers' element={<CustomerForm/>}/>
          <Route path='salesrecords' element={<SalesRecordList salesrecords={props.salesrecords}/>}/>
          <Route path='salesrecords/new' element={<SalesRecordForm/>}/>
          <Route path='technicians/new' element={<TechnicianForm/>}/>
          <Route path='appointments' element={<AppointmentList appointments={props.appointments}/>}/>
          <Route path='appointments/new' element={<AppointmentForm/>}/>
          <Route path='search' element={<VinHistory appointments={props.appointments}/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
