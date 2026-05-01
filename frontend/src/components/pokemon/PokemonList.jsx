import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemons } from "../../services/pokemonService";
import PurchaseModal from "../paypal/PurchaseModal";
import "./PokemonList.css";

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [purchaseMessage, setPurchaseMessage] = useState("");

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

    const handlePurchaseSuccess = (pokemon) => {
        setPurchaseMessage(`Compra exitosa: ${pokemon.name} fue desbloqueado.`);

        setPokemons((currentPokemons) =>
        currentPokemons.map((item) =>
            item.id === pokemon.id ? { ...item, purchased: true } : item
        )
        );

        setSelectedPokemon(null);
    };

    const handlePurchaseError = (message) => {
        setPurchaseMessage(message);
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
            <p>Explora cartas coleccionables generadas desde la PokéAPI.</p>
        </div>

        {purchaseMessage && (
            <p className="pokemon-list__purchase-message">{purchaseMessage}</p>
        )}

        <div className="pokemon-list__grid">
            {pokemons.map((pokemon) => (
            <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onBuy={setSelectedPokemon}
            />
            ))}
        </div>

        <PurchaseModal
            pokemon={selectedPokemon}
            onClose={() => setSelectedPokemon(null)}
            onPurchaseSuccess={handlePurchaseSuccess}
            onPurchaseError={handlePurchaseError}
        />
        </section>
    );
};

export default PokemonList;