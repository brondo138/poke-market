import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemons } from "../../services/pokemonService";
import PurchaseModal from "../paypal/PurchaseModal";
import "./PokemonList.css";

const PURCHASED_CARDS_KEY = "purchasedPokemonCards";

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [purchaseMessage, setPurchaseMessage] = useState("");

    useEffect(() => {
        loadPokemons();
    }, []);

    const getPurchasedCards = () => {
        const storedCards = sessionStorage.getItem(PURCHASED_CARDS_KEY);

        if (!storedCards) {
        return [];
        }

        return JSON.parse(storedCards);
    };

    const savePurchasedCard = (pokemon) => {
        const purchasedCards = getPurchasedCards();

        const alreadyExists = purchasedCards.some((card) => card.id === pokemon.id);

        if (alreadyExists) {
        return;
        }

        const updatedCards = [...purchasedCards, pokemon];

        sessionStorage.setItem(PURCHASED_CARDS_KEY, JSON.stringify(updatedCards));
    };

    const loadPokemons = async () => {
        try {
        setLoading(true);
        setErrorMessage("");

        const data = await getPokemons(12);
        const purchasedCards = getPurchasedCards();

        const pokemonsWithPurchaseState = data.map((pokemon) => {
            const isPurchased = purchasedCards.some(
            (card) => card.id === pokemon.id
            );

            return {
            ...pokemon,
            purchased: isPurchased,
            };
        });

        setPokemons(pokemonsWithPurchaseState);
        } catch (error) {
        setErrorMessage("No se pudieron cargar las cartas Pokémon.");
        } finally {
        setLoading(false);
        }
    };

    const handlePurchaseSuccess = (pokemon) => {
        const purchasedPokemon = {
        ...pokemon,
        purchased: true,
        };

        savePurchasedCard(purchasedPokemon);

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
            <p>Explora cartas coleccionables.</p>
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