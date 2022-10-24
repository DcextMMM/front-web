import React, {useState, useEffect} from "react";
import './Listagem.css'; 
import MeusPedidos from '../MeusPedidos/MeusPedidos'
import {Link} from 'react-router-dom';
import { api } from '../../services/apiClient';
import moment from 'moment';
import { toast } from "react-toastify";


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

        toast.success('Reserva feita com sucesso');
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
                </li>

                <li>
                   <Link to="/MeusPedidos" element={MeusPedidos}><button>Meus Pedidos</button></Link>
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
                            <div className="list-products">
                                {product.map(product => {
                                    return(
                                        <article className="product" key={product.id}>
                                            <strong>{product.nome}<br/></strong>
                                            <span>{`Preço: R$${product.preco},00`}<br/></span>
                                            <span>{`Quantidade: ${product.quantidade}`}<br/></span>
                                            <span>{'Data de colheita: '}<br/> {`${moment(product.data_colheita).format('DD/MM/YYYY')}`}<br/></span>
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