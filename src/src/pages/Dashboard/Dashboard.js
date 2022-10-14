import React from "react";
import './Dashboard.css';
import MeuPerfil from '../MeuPerfil/MeuPerfil';
import Listagem from "../Listagem/Listagem";
import {Link} from 'react-router-dom';

function Dashboard() {
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
                <label for="nav-toggle">
                <span className="las la-bars"></span>
                </label>

                Dashboard
            </h3>
            <div className="user-wrapper">
                <div>
                    <h4>Nome</h4>
                    <small>Agronomo</small>
                </div>
            </div>
        </header>
        <div>
            <div className="cards">
                <div className="card-single">
                    <div>
                        <h1>Uva</h1>
                        <span>Produtos da estação</span>
                    </div>
                    <div>
                        <span className="las la-users"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>Alface</h1>
                        <span>Produto mais vendido</span>
                    </div>
                    <div>
                        <span className="las la-clipboard-list"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>24</h1>
                        <span>Media de vendas</span>
                    </div>
                    <div>
                        <span className="las la-shopping-bag"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>36</h1>
                        <span>Numero de pedidos</span>
                    </div>
                    <div>
                        <span className="lab la-google-wallet"></span>
                    </div>
                </div>
            </div>
            
            <div className="recent-grid">
            <div class="projects">
                    <div class="card">
                        <div class="card-header">
                            <h3>Listagem</h3>
                        </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td>Nome do produto</td>
                                            <td>Quantidade</td>
                                            <td>Tipo</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ALT</td>
                                            <td>ALT</td>
                                            <td>
                                                <span className="status green"></span>
                                                Levedura
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>ALT</td>
                                            <td>ALT</td>
                                            <td>
                                                <span className="status wood"></span>
                                                Leguminosa
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>ALT</td>
                                            <td>ALT</td>
                                            <td>
                                                <span className="status orange"></span>
                                                Fruta
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Dashboard;