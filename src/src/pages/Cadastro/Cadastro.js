import React from 'react';

function Cadastro() {

    return(
        
        <div>
                <div class="container">
                    <div class="form">
                        <form action="#">
                            <div class="form-header">
                                <div class="title">
                                    <h1>Cadastro</h1>
                                </div>
                                <div class="login-button">
                                    <button><a href="login.html">Voltar para Login</a></button>
                                </div>
                            </div>
                            

                            <div class="input-group">
                                <div class="input-box">
                                    <label for="firstname">Primeiro nome</label>
                                    <input type="text" id="text" name="firstname" placeholder="Digite o primeiro nome" required></input>
                                </div>

                                <div class="input-box">
                                    <label for="lastname">Sobrenome</label>
                                    <input type="text" id="text" name="lastname" placeholder="Digite o sobrenome" required></input>
                                </div>

                                <div class="input-box">
                                    <label for="email">Email</label>
                                    <input type="email" id="text" name="email" placeholder="Digite o email" required></input>
                                </div>

                                <div class="input-box">
                                    <label for="number">Celular</label>
                                    <input type="tel" id="number" name="number" placeholder="(xx) xxxx-xxxx" required></input>
                                </div>

                                <div class="input-box">
                                    <label for="password">Senha</label>
                                    <input type="password" id="password" name="password" placeholder="Crie a senha" required></input>
                                </div>

                                <div class="input-box">
                                    <label for="Comfirmpassword">Confirme a senha</label>
                                    <input type="password" id="Comfirmpassword" name="Comfirmpassword"
                                        placeholder="Confirme a senha" required></input>
                                </div>
                            </div>

                            <div class="continue-button">
                                <button><a href="login.html">Continuar</a></button>
                            </div>
                        </form>

                        </div>
                    </div>
                </div>
    );
};

export default Cadastro;
