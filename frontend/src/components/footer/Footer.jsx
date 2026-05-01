import React from "react";
import "./Footer.css";
import { Store, Mail, ShieldCheck } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__content">
            <div className="footer__brand">
            <div className="footer__logo">
                <span className="footer__icon">
                <Store size={22} strokeWidth={2.4} />
                </span>
                <h2>PokéCards Market</h2>
            </div>

            <p>
                Plataforma web interactiva para explorar, visualizar y comprar cartas
                coleccionables digitales.
            </p>
            </div>

            <div className="footer__section">
            <h3>Navegación</h3>
            <a href="#inicio">Inicio</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#coleccion">Mis Cartas</a>
            </div>

            <div className="footer__section">
            <h3>Proyecto</h3>
            <p>React + Vite</p>
            <p>PokéAPI</p>
            <p>PayPal Sandbox</p>
            </div>

            <div className="footer__section">
            <h3>Estado</h3>

            <div className="footer__status">
                <ShieldCheck size={18} />
                <span>Compras validadas</span>
            </div>
            
            </div>
        </div>

        <div className="footer__bottom">
            <p>© 2026 PokéCards Market. Proyecto académico de Alex Francisco Lovos Argueta.</p>
        </div>
        </footer>
    );
};

export default Footer;