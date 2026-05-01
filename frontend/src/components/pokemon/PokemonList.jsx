import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemons } from "../../services/pokemonService";
import "./PokemonList.css";

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        loadPokemons();
    }, []);

    const loadPokemons = async () => {
        try {
        setLoading(true);
        setErrorMessage("");

        const data = await getPokemons(12);
        setPokemons(data);
        } catch (error) {
        setErrorMessage("No se pudieron cargar las cartas Pokémon.");
        } finally {
        setLoading(false);
        }
    };

    if (loading) {
        return <p className="pokemon-list__message">Cargando cartas...</p>;
    }

    if (errorMessage) {
        return <p className="pokemon-list__error">{errorMessage}</p>;
    }

    return (
        <section id="catalogo" className="pokemon-list">
        <div className="pokemon-list__header">
            <span>Catálogo</span>
            <h2>Cartas disponibles</h2>
            <p>Explora cartas coleccionables</p>
        </div>

        <div className="pokemon-list__grid">
            {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
        </section>
    );
};

export default PokemonList;