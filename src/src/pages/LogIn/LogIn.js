import React from 'react';
import './LogIn.css';

function LogIn() {

    return(
      
    <div className="body login">
        <div className="inner login">
            <div className="container login" id="container">
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Login</h1>
                        <input type="email" placeholder="Email" id="email"/>
                        <input type="password" placeholder="Senha" id="senha"/>
                        <a href="senha.html">Esqueceu sua senha?</a>
                        <button>Entrar</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Olá, Agrônomo MMM!</h1>
                            <p>Faça aqui o seu cadastro no nosso sistema!</p>
                            <a id="register-button" href="#"><button className="ghost">Cadastro</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <footer>
        <p>
            Acesse o site da Muda Meu Mundo (MMM) para conhecer 
            <a target="_blank" href="https://www.mudameumundo.com.br/"> mais</a>
        </p>
    </footer>
            </div>
    )
}

export default LogIn;