import React, {useState, useEffect} from "react";
import './Listagem.css'; 
import MeuPerfil from '../MeuPerfil/MeuPerfil';
import Dashboard from '../Dashboard/Dashboard';
import {Link} from 'react-router-dom';
import { api } from '../../services/apiClient';
import moment from 'moment';

function Listagem(){
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getData = () => {
            const request = api();

            request.get('/products')
                .then(res => setProduct(res.data))
                .catch(error => console.log(error));
        }

        

        getData();
    }, []);

    useEffect(() => {
        const getData = () => {
            const request = api();

            request.get('/products')
                .then(res => setProduct(res.data))
                .catch(error => console.log(error));
        }

        

        getData();
    }, [product]);

    async function addRequest(id){
        const request = api();
        console.log(id);

        request.post(`/requests/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return(
        <div className="body dashboard">

     <input type="checkbox" id="nav-toggle" />
     
     <div className="sidebar">
        <div className="sidebar-brand">
            <h2>Guia:</h2>
        </div>

        <div className="sidebar-menu">
            <ul>
                <li>
                <li>
                   <Link to="/Dashboard" element={Dashboard}><button>Dashboard</button></Link>
                </li>
                </li>
                <li>
                   <Link to="/MeuPerfil" element={MeuPerfil}><button>Meu Perfil</button></Link>
                </li>
                <li>
                    <Link to="/Listagem" element={Listagem}><button>Listagem de produtos</button></Link>
                </li>
            </ul>
        </div>
    </div>

    <div className="main-content">
        <header>
            <h3>
                Listagem de produtos
            </h3>
            <div className="user-wrapper">
                <div>
                    <h4>Nome</h4>
                    <small>Agrônomo</small>
                </div>
            </div>
        </header>
        <div className="recent-grid">
            <div className="projects">
                    <div className="card">
                        <div className="card-header">
                            <h3>Listagem</h3>
                            <div className="list-products">
                                {product.map(product => {
                                    return(
                                        <article className="product" key={product.id}>
                                            <strong>{product.nome}<br/></strong>
                                            <span>{`Preço: R$${product.preco},00`}<br/></span>
                                            <span>{`Quantidade: ${product.quantidade}`}<br/></span>
                                            <span>{`Data de colheita: ${moment(product.data_colheita).format('DD/MM/YYYY')}`}<br/></span>
                                            <button onClick={() => addRequest(product.id)}>Reservar<br/></button>
                                        </article>
                                    )
                                })}
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Listagem;