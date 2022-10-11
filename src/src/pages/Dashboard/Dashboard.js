import React from "react";
import "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css";

function Dashboard() {
    return(
    <div className="body dashboard">

     <input type="checkbox" id="nav-toggle" />
     <div className="sidebar">
        <div className="sidebar-brand">
            <h2>Dashboard</h2>
        </div>

        <div className="sidebar-menu">
            <ul>
                <li>
                    <a Link to="" className = "active"><span className="las la-home"></span>
                    <span>Dashboard</span></a>
                </li>
                <li>
                    <a Link to=""><span className="las la-users"></span>
                    <span>Meu perfil</span></a>
                </li>
                <li>
                    <a Link to=""><span className="las la-clipboard-list"></span>
                    <span>Listagem de produtos </span></a>
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
                        <h1>54</h1>
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
                                                <span className="status purple"></span>
                                                Levedura
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>ALT</td>
                                            <td>ALT</td>
                                            <td>
                                                <span className="status pink"></span>
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

    );
};

export default Dashboard;