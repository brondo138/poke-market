import React from "react";
import "./PokemonCard.css";
import "./typeOfCard/Common.css";
import "./typeOfCard/UnCommon.css";
import "./typeOfCard/Rare.css";
import "./typeOfCard/Epic.css";
import "./typeOfCard/Legendary.css";

const getRarityClass = (price) => {
    const pokemonPrice = Number(price);

    if (pokemonPrice >= 0.1 && pokemonPrice <= 49.99) {
        return "pokemon-card--common";
    }

    if (pokemonPrice >= 50 && pokemonPrice <= 99.99) {
        return "pokemon-card--uncommon";
    }

    if (pokemonPrice >= 100 && pokemonPrice <= 149.99) {
        return "pokemon-card--rare";
    }

    if (pokemonPrice >= 150 && pokemonPrice <= 174.99) {
        return "pokemon-card--epic";
    }

    if (pokemonPrice >= 175 && pokemonPrice <= 200) {
        return "pokemon-card--legendary";
    }

    return "pokemon-card--common";
};

const PokemonCard = ({ pokemon, onBuy }) => {
    const rarityClass = getRarityClass(pokemon.price);

    return (
        <article
            className={`pokemon-card ${rarityClass} ${
                pokemon.purchased ? "pokemon-card--purchased" : ""
            }`}
        >
            {pokemon.purchased && (
                <span className="pokemon-card__badge">Adquirida</span>
            )}

            <div className="pokemon-card__image-container">
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="pokemon-card__image"
                />
            </div>

            <div className="pokemon-card__content">
                <h3 className="pokemon-card__name">{pokemon.name}</h3>

                <div className="pokemon-card__types">
                    {pokemon.types.map((type) => (
                        <span key={type} className="pokemon-card__type">
                            {type}
                        </span>
                    ))}
                </div>

                <p className="pokemon-card__price">${pokemon.price}</p>

                <button
                    className={`pokemon-card__button ${
                        pokemon.purchased ? "pokemon-card__button--purchased" : ""
                    }`}
                    onClick={() => onBuy(pokemon)}
                    disabled={pokemon.purchased}
                >
                    {pokemon.purchased ? "Carta adquirida" : "Comprar carta"}
                </button>
            </div>
        </article>
    );
};

export default PokemonCard;