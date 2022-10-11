import React from 'react';
import {Link} from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import './Cadastro.css';

function Cadastro() {

    return(
        
        <div className ='body container'>
                <div className ="container">
                    <div className ="form">
                        <form action="#">
                            <div className ="form-header">
                                <div className ="title">
                                    <h1>Cadastro</h1>
                                </div>
                                <div className ="login-button">
                                    <button><Link to="/" element={LogIn}>Voltar para Login</Link></button>
                                </div>
                            </div>
                            

                            <div className ="input-group">
                                <div className ="input-box">
                                    <label for="firstname">Primeiro nome</label>
                                    <input type="text" id="text" name="firstname" placeholder="Digite o primeiro nome" required></input>
                                </div>

                                <div className ="input-box">
                                    <label for="lastname">Sobrenome</label>
                                    <input type="text" id="text" name="lastname" placeholder="Digite o sobrenome" required></input>
                                </div>

                                <div className ="input-box">
                                    <label for="email">Email</label>
                                    <input type="email" id="text" name="email" placeholder="Digite o email" required></input>
                                </div>

                                <div className ="input-box">
                                    <label for="number">Celular</label>
                                    <input type="tel" id="number" name="number" placeholder="(xx) xxxx-xxxx" required></input>
                                </div>

                                <div className ="input-box">
                                    <label for="password">Senha</label>
                                    <input type="password" id="password" name="password" placeholder="Crie a senha" required></input>
                                </div>

                                <div className ="input-box">
                                    <label for="Comfirmpassword">Confirme a senha</label>
                                    <input type="password" id="Comfirmpassword" name="Comfirmpassword"
                                        placeholder="Confirme a senha" required></input>
                                </div>
                            </div>

                            <div className ="continue-button">
                                <button><Link to="login.html">Continuar</Link></button>
                            </div>
                        </form>

                        </div>
                    </div>
                </div>
    );
};

export default Cadastro;
