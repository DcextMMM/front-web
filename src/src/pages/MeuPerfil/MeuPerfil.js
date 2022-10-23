import React from "react";
import {Link} from 'react-router-dom';
import Dashboard from "../Dashboard/Dashboard";
import Listagem from "../Listagem/Listagem";
import './MeuPerfil.css';

function MeuPerfil() {
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
                Meu Perfil
            </h3>
            <div className="user-wrapper">
                <div>
                    <h4>Nome</h4>
                    <small>Agrônomo</small>
                </div>
            </div>
        </header>
    </div>
        </div>
    )
};

export default MeuPerfil;