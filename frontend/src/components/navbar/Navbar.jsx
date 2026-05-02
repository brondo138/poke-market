import React, { useState } from "react";
import "./Navbar.css";
import { Store, Menu, X } from "lucide-react";

const Navbar = ({ setActivePage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const goToPage = (page, sectionId = null) => {
        setActivePage(page);
        setIsOpen(false);

        setTimeout(() => {
            if (sectionId) {
            const section = document.getElementById(sectionId);
            section?.scrollIntoView({ behavior: "smooth" });
            } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }, 100);
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
            <button onClick={() => goToPage("home")}>Inicio</button>
            <button onClick={() => goToPage("home", "catalogo")}>Catálogo</button>
            <button onClick={() => goToPage("collection")}>Mis Cartas</button>
            </div>

        </nav>
        </header>
    );
};

export default Navbar;