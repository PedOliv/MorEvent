import React, { useState } from 'react';
import MaisOpcoes from './MaisOpcoes.png';
import './EstiloBarraLateral.css';

function BarraLateral() {

  const [menuAberto, setMenuAberto] = useState(false);

  const handleClick = () => {
    setMenuAberto(!menuAberto);
  };

  const abrirMenu = () =>
  {
      setMenuAberto(true);  
  };

  const fecharMenu = () =>
  {
    setMenuAberto(false); 
  };

  return (
    <div id = "conteudo">
      <button className="Botao" onClick={handleClick} style={{position: 'absolute', left: '0'}}>
        <img className="MaisOpcoes" src={MaisOpcoes} alt="Mais Opçoes" width="35" height="35"/>
      </button>
      <nav id = "menu" className={`MenuLateral ${menuAberto ? 'aberto' : ''}`}>
        <a className = "Opcoes" href="#" onClick = {fecharMenu}>&times; Fechar</a>
        <a className = "Opcoes" href="#">Home</a>
        <a className = "Opcoes" href="#">Sobre</a>
        <a className = "Opcoes" href="#">Contato</a>
        <a className = "Opcoes" href="#">Youtube</a>
      </nav>
    </div>
  );
}

export default BarraLateral;