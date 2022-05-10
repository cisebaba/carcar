import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import ModelsList from './ModelsList';
import AutomobileList from './AutomobileList';

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
          <Route index path="/" element={<MainPage />} />
            <Route path="models" element={<ModelsList models={props.models}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
