import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LogIn from './pages/LogIn/LogIn';
import Cadastro from './pages/Cadastro/Cadastro';
import Listagem from './pages/Listagem/Listagem';
import MeusPedidos from './pages/MeusPedidos/MeusPedidos'

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LogIn />} />
                <Route path='/Cadastro' element={<Cadastro />} />
                <Route path='/Listagem' element={<Listagem />} />
                <Route path='/MeusPedidos' element={<MeusPedidos />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Rotas;