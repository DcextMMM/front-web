import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LogIn from './pages/LogIn/LogIn';
import Cadastro from './pages/Cadastro/Cadastro';


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LogIn />} />
                <Route path='/Cadastro' element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Rotas;