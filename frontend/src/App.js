import './App.css';
import Minha_Conta from './paginas/minha-conta/minha_Conta';
import Tela_Certificados from './paginas/meus-certificados/tela_Certificados';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = '/' element = {<Minha_Conta />} />
          <Route path = '/certificados' element = {<Tela_Certificados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
