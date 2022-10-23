import React, { useState } from 'react';
import './LogIn.css'; 
import {Link} from 'react-router-dom';
import Cadastro from '../Cadastro/Cadastro';
import * as yup from "yup";
import { api } from '../../services/apiClient';

function LogIn() {
    const [user, setUser] = useState({});

    const valueInput = e => {
        setUser({...user, [e.target.name]: e.target.value});
    } 

    const sendForm = e => {
        e.preventDefault();
        
        const request = api();

        request.post('/login', { ...user, type: 'agronomo' })
            .then(res => {
                localStorage["@auth.token"]  = res.data.token;
                window.location = 'http://localhost:3000/Listagem';
            })
            .catch(error => console.log(error));
    }


    return( 
      
    <div className="body login">
        <div className="inner login">
            <div className="container login" id="container">
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Login</h1>
                        <input type="email" name="login" placeholder="Email" onChange={valueInput} value={user.email}/>
                        <input type="password" name="senha" placeholder="Senha" onChange={valueInput} value={user.senha}/>
                        <Link to="">Esqueceu sua senha?</Link>
                        <button className='entrar' onClick={sendForm}>Entrar</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Olá, Agrônomo MMM!</h1>
                            <p>Faça aqui o seu cadastro no nosso sistema!</p>
                            <Link to="/Cadastro" element={Cadastro} id="register-button"><button className="ghost">Cadastro</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <footer>
        <p>
            Acesse o site da Muda Meu Mundo (MMM) para conhecer 
            <a href="https://www.mudameumundo.com.br/" rel='norefrerrer'> mais</a>
        </p>
    </footer>
            </div>
    )
}

export default LogIn;