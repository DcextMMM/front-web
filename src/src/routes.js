import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LogIn from './pages/LogIn/LogIn';
import Cadastro from './pages/Cadastro/Cadastro';
import Dashboard from './pages/Dashboard/Dashboard';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LogIn />} />
                <Route path='/Cadastro' element={<Cadastro />} />
                <Route path='/Dashboard' element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    )
};

export default Rotas;