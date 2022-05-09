import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ModelsList from './ModelsList';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index path="/" element={<MainPage />} />
            <Route path="models" element={<ModelsList models={props.models}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
