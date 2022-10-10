import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LogIn from './pages/LogIn/LogIn';
import Cadastro from './pages/Cadastro/Cadastro';


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact component={LogIn} />
                <Route path='/Cadastro' component={Cadastro} />
            </Routes>
        </BrowserRouter>
    )
};

export default Rotas;