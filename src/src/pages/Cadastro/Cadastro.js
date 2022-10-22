
import axios from "axios";
import {Link} from 'react-router-dom';
import { useState } from "react";
import LogIn from '../LogIn/LogIn';
import * as yup from "yup";
import './Cadastro.css';

function Cadastro() {

    const [user, setUser] = useState({});

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const valueInput = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const addUser = async e => {
        e.preventDefault();

        // if(!(await validate())) return;

        const saveDataForm = true;

        if (saveDataForm) {
            sendForm(user);

            setUser({
                name: '',
                email: '',
                password: ''
            });
        } else{
            setStatus({
                type: 'error',
                mensagem: 'Erro: Usuário não cadastrado!'
            })
        }
    }

    async function sendForm(data){
        await axios.get('http://localhost:3210/requests', data)
            .then(res => console.log(res));

    }
    
    
    
    async function validate(){
        let schema = yup.object().shape({
            firstname: yup.string("Erro: Preencha o formulário")
                .required("Erro: Preencha o formulário")
        });

        try{
            await schema.validate(user);
            return true;
        }catch(err){
        setStatus({
            type: 'error',
            mensagem: err.errors
        });
        return false;
        }
    }

    return(
        
        <div className ='body container'>
            {status.type === 'success' ? <p style={{ color: "green"}}>{status.mensagem}</p> : ""}
            {status.type === 'error' ? <p style={{color: "red"}}>{status.mensagem}</p> : ""}
                <div className ="container">
                    <div className ="form-cadastro">
                        <form onSubmit={addUser}>
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
                                    <input type="text" id="text" name="firstname" placeholder="Digite o primeiro nome" onChange={valueInput} value={user.nome}></input>
                                </div>

                                <div className ="input-box">
                                    <label for="lastname">Sobrenome</label>
                                    <input type="text" id="text" name="lastname" placeholder="Digite o sobrenome" onChange={valueInput} value={user.sobrenome}></input>
                                </div>

                                <div className ="input-box">
                                    <label for="email">Email</label>
                                    <input type="email" id="text" name="email" placeholder="Digite o email" onChange={valueInput} value={user.email}></input>
                                </div>

                                <div className ="input-box">
                                    <label for="number">Celular</label>
                                    <input type="tel" id="number" name="number" placeholder="(xx) xxxx-xxxx" onChange={valueInput} value={user.celular}></input>
                                </div>

                                <div className ="input-box">
                                    <label for="cpf">CPF</label>
                                    <input type="text" id="text" name="cpf" placeholder="Digite o cpf" onChange={valueInput} value={user.cpf}></input>
                                </div>

                                <div className ="input-box">
                                    <label for="password">Senha</label>
                                    <input type="password" id="password" name="password" placeholder="Crie a senha" onChange={valueInput} value={user.senha}></input>
                                </div>

                                <div className ="input-box">
                                    <label for="address">Endereço</label>
                                    <input type="text" id="text" name="address" placeholder="Digite o endereço" onChange={valueInput} value={user.endereço}></input>
                                </div>

                                <div className ="input-box">
                                    <label for="number">Número</label>
                                    <input type="number" id="number" name="number" placeholder="Digite o número" onChange={valueInput} value={user.numero}></input>
                                </div>

                                <div className ="input-box">
                                    <label for="cep">CEP</label>
                                    <input type="text" id="text" name="cep" placeholder="Digite o cep" onChange={valueInput} value={user.cep}></input>
                                </div>
                                
                            </div>

                            <div className ="continue-button">
                                <button type='submit' onSubmit={addUser}><Link to="#">Continuar</Link></button>
                            </div>
                        </form>

                        </div>
                    </div>
                </div>
    );
};

export default Cadastro;
