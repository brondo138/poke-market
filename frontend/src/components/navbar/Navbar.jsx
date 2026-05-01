import React from "react";
import "./Navbar.css";
import { Store } from "lucide-react";

const Navbar = () => {
    return (
        <header className="navbar">
        <div className="navbar__logo">
            <span className="navbar__icon">
            <Store size={24} strokeWidth={2.4} />
            </span>

            <h1>PokéCards Market</h1>
        </div>

        <nav className="navbar__links">
            <a href="#inicio">Inicio</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#coleccion">Mis Cartas</a>
        </nav>

        <button className="navbar__button">Ver colección</button>
        </header>
    );
};

export default Navbar;