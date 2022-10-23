import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import { useState } from "react";
import LogIn from '../LogIn/LogIn';
import * as yup from "yup";
import './Cadastro.css'; 
import { api } from '../../services/apiClient';

function Cadastro() {

    const [post, setPost] = useState({});
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

       /*  if(!(await validate())) return; */

        // const saveDataForm = true;

        // if (saveDataForm) {
        //     setUser({
        //         name: '',
        //         email: '',
        //         password: ''
        //     });
        // } else{
        //     setStatus({
        //         type: 'error',
        //         mensagem: 'Erro: Usuário não cadastrado!'
        //     })
        // }
    } 

    // React.useEffect(() => {
    //     axios.get("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHlwZSI6ImFncm9ub21vIiwiaWF0IjoxNjY2NDY2NzMwLCJleHAiOjE2NjcwNzE1MzB9.7bnK0NcVf0j8mTAJDBmZmDj45alM97ahOMqIvGLP07M").then((response) => {
    //       setPost(response.data);
    //     });
    //   }, []);
    
     async function createPost() {
        console.log(' aisfhai');
        const request = api();

        request.post('/cadastro', { ...user, type: 'agronomo' }).then((resp) => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
        });

      }  
      if (!post) return null;    
    
    async function validate(){
        let schema = yup.object().shape({
            firstname: yup.string("Erro: Preencha o formulário"),
            password: yup.string("Erro: Necessário preencher o campo senha!"),
            email: yup.string("Erro: Necessário preencher o campo e-mail!"),
                // .required("Erro: Necessário preencher o campo e-mail!"),
            lastname: yup.string("Erro: Necessário preencher o campo nome!"),
            address: yup.string("Erro: Necessário preencher o campo endereço!"),
            cep: yup.number("Erro: Necessário preencher o campo cep!"),
            cpf: yup.number("Erro: Ncessário preencher o campo cpf!")

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
                                    <label htmlFor="firstname">Primeiro nome</label>
                                    <input type="text" name="nome" placeholder="Digite o primeiro nome" onChange={valueInput} value={user.nome}></input>
                                </div>

                                <div className ="input-box">
                                    <label htmlFor="lastname">Sobrenome</label>
                                    <input type="text" name="sobrenome" placeholder="Digite o sobrenome" onChange={valueInput} value={user.sobrenome}></input>
                                </div>

                                <div className ="input-box">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" placeholder="Digite o email" onChange={valueInput} value={user.email}></input>
                                </div>

                                <div className ="input-box">
                                    <label htmlFor="number">Celular</label>
                                    <input type="tel" name="telefone" placeholder="(xx) xxxx-xxxx" onChange={valueInput} value={user.celular}></input>
                                </div>

                                <div className ="input-box">
                                    <label htmlFor="cpf">CPF</label>
                                    <input type="text" name="cpf" placeholder="Digite o cpf" onChange={valueInput} value={user.cpf}></input>
                                </div>

                                <div className ="input-box">
                                    <label htmlFor="password">Senha</label>
                                    <input type="password" name="senha" placeholder="Crie a senha" onChange={valueInput} value={user.senha}></input>
                                </div>

                                <div className ="input-box">
                                    <label htmlFor="address">Endereço</label>
                                    <input type="text" name="rua" placeholder="Digite o endereço" onChange={valueInput} value={user.rua}></input>
                                </div>

                                <div className ="input-box">
                                    <label htmlFor="number">Número</label>
                                    <input type="number" name="numero" placeholder="Digite o número" onChange={valueInput} value={user.numero}></input>
                                </div>

                                <div className ="input-box">
                                    <label htmlFor="cep">CEP</label>
                                    <input type="text" name="cep" placeholder="Digite o cep" onChange={valueInput} value={user.cep}></input>
                                </div>
                                
                            </div>

                            <div className ="continue-button">
                                <button type='button' onClick={createPost}>Continuar</button>
                            </div>
                        </form>

                        </div>
                    </div>
                </div>
    );
};


export default Cadastro;