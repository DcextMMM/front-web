import React from 'react';
import './LogIn.css';
import {Link} from 'react-router-dom';
import Cadastro from '../Cadastro/Cadastro';

const image = new url("./src/images/agris.jpg", import.meta.url);

function LogIn() {

    return(
      
    <div className="body login">
       <img src={image} />
        <div className="inner login">
            <div className="container login" id="container">
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Login</h1>
                        <input type="email" placeholder="Email" id="email"/>
                        <input type="password" placeholder="Senha" id="senha"/>
                        <Link to="senha.html">Esqueceu sua senha?</Link>
                        <button>Entrar</button>
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
            <a href="https://www.mudameumundo.com.br/" target="_blank"> mais</a>
        </p>
    </footer>
            </div>
    )
}

export default LogIn;