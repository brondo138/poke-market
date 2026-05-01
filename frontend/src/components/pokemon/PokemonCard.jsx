import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon, onBuy }) => {
    return (
        <article
        className={`pokemon-card ${
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