import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
    return (
        <article className="pokemon-card">
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

            <button className="pokemon-card__button">Comprar carta</button>
        </div>
        </article>
    );
};

export default PokemonCard;