import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import ModelsList from './ModelsList';
import ModelForm from './ModelForm';
import AutomobileForm from './AutomobileForm';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='manufacturers' element= {<ManufacturerList manufacturers={props.manufacturers}/>}/>
          <Route path='manufacturers/new' element= {<ManufacturerForm/>}/>
          <Route index path="/" element={<MainPage />} />
          <Route path="models">
            <Route path="" element={<ModelsList models={props.models}/>} />
            <Route path="new" element={<ModelForm />} />
          </Route>
          <Route path='automobiles/new' element= {<AutomobileForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
