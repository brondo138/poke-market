import React from "react";
import PokemonList from "../components/pokemon/PokemonList";

const HomePage = () => {
    return (
        <>
        <section id="inicio" className="home-hero">
            <span>PokéCards Market</span>
            <h2>Compra cartas coleccionables digitales</h2>
            <p>
            Explora los Pokémon obtenidos y selecciona tus cartas
            favoritas y desbloquéalas mediante su compra.
            </p>
        </section>

        <PokemonList />
        </>
    );
};

export default HomePage;