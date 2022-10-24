import React, { useState, useEffect } from "react";
import './MeusPedidos.css';
import Listagem from "../Listagem/Listagem";
import {Link} from 'react-router-dom';
import { api } from '../../services/apiClient';
import moment from "moment";
import { toast } from 'react-toastify';

function MeusPedidos() {
    const [order, setOrder] = useState([]);
    
    useEffect(() => {
        const getData = () => {
            const request = api();

            request.get('/requests')
                .then(res => setOrder(res.data))
                .catch(err => console.log(err));
        }

        getData();
    }, []);

    useEffect(() => {
        const getData = () => {
            const request = api();

            request.get('/requests')
                .then(res => setOrder(res.data))
                .catch(err => console.log(err));
        }

        getData();
    }, [order]);
    

    const removeRequest = (id) => {
        const request = api();

        request.delete(`/requests/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        toast.success('Pedido cancelado com sucesso');
    }
    
    
    return(
    <div className="body meuspedidos">

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
                Meus pedidos
            </h3>
            <div className="user-wrapper">
                <div>
                    <h4>Agrônomo</h4>
                </div>
            </div>
        </header>
        <div className="card-header">
            <div className="list-requests">
                {order.map(order => {
                    return(
                        <article className="order" key={order.id}>
                                            <strong>{order.nome}<br/></strong>
                                            <span>{`Preço: R$${order.preco},00`}<br/></span>
                                            <span>{`Quantidade: ${order.quantidade}`}<br/></span>
                                            <span>{'Data de colheita: '}<br/> {`${moment(order.data_colheita).format('DD/MM/YYYY')}`}<br/></span>
                                            <span>{`Id do produtor: ${order.produtor_id}`}<br/></span>
                                            <button onClick={() => removeRequest(order.id)}>Deletar<br/></button>
                                        </article>
                    )
                })}
            </div>
        </div>
    </div>
</div>

    );
};

export default MeusPedidos;