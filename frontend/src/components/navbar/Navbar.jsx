import React, { useState } from "react";
import "./Navbar.css";
import { Store, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="navbar">
        <div className="navbar__logo">
            <span className="navbar__icon">
            <Store size={24} strokeWidth={2.4} />
            </span>
            <h1>PokéCards Market</h1>
        </div>

        <button
            className="navbar__toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
        >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}>
            <div className="navbar__links">
            <a href="#inicio" onClick={closeMenu}>Inicio</a>
            <a href="#catalogo" onClick={closeMenu}>Catálogo</a>
            <a href="#coleccion" onClick={closeMenu}>Mis Cartas</a>
            </div>

            <button className="navbar__button" onClick={closeMenu}>
            Ver colección
            </button>
        </nav>
        </header>
    );
};

export default Navbar;