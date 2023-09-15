import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';
import Home from './components/rodape/Rodape';
import Rodape from './components/rodape/Rodape';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { createContext, useState } from 'react';

export const TemaContexto = createContext();

function App() {
  const [dark, setDark] = useState(true);
 

  return (
    <div className='all-body'>
      <TemaContexto.Provider value={[dark, setDark]}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route exact path='/' Component={() => <Home />} ></Route>
          </Routes>

          <Rodape />
        </BrowserRouter>
      </TemaContexto.Provider>
    </div>
  );
}

export default App;
