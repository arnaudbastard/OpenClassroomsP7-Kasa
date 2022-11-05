// import des modules necessaires
import React from 'react';
import { NavLink } from "react-router-dom";

import '@/Layouts/Header/Header.css';
import Logo from '@/Assets/Images/Logo.png';


// fonction d'affichage du header
const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo du site Kasa" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/a-propos" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>À propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

// export du header pour l'utiliser dans le layout
export default Header