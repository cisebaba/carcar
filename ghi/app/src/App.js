import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ModelsList from './ModelsList';
import ModelForm from './ModelForm';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="models">
            <Route path="" element={<ModelsList models={props.models}/>} />
            <Route path="new" element={<ModelForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
