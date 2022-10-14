import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LogIn from './pages/LogIn/LogIn';
import Cadastro from './pages/Cadastro/Cadastro';
import Dashboard from './pages/Dashboard/Dashboard';
import MeuPerfil from './pages/MeuPerfil/MeuPerfil';
import Listagem from './pages/Listagem/Listagem';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LogIn />} />
                <Route path='/Cadastro' element={<Cadastro />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/MeuPerfil' element={<MeuPerfil />} />
                <Route path='/Listagem' element={<Listagem />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Rotas;