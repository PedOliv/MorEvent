import React from 'react';
import Minha_Conta from './paginas/minha-conta/minha_Conta';
import Tela_Certificados from './paginas/meus-certificados/tela_Certificados';
import { Route, Routes } from 'react-router-dom';

function AppRouter(){
    return(
        <Routes>
            <Route path="/minha-conta" component={Minha_Conta} />
            <Route path="/certificados" component={Tela_Certificados} />
        </Routes>
    );
}

export default AppRouter;


