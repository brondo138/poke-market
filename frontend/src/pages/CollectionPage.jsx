import React, { useEffect, useState } from "react";
import "./CollectionPage.css";

const PURCHASED_CARDS_KEY = "purchasedPokemonCards";

const CollectionPage = () => {
    const [purchasedCards, setPurchasedCards] = useState([]);

    useEffect(() => {
        loadPurchasedCards();
    }, []);

    const loadPurchasedCards = () => {
        const storedCards = sessionStorage.getItem(PURCHASED_CARDS_KEY);

        if (!storedCards) {
        setPurchasedCards([]);
        return;
        }

        setPurchasedCards(JSON.parse(storedCards));
    };

    return (
        <section id="coleccion" className="collection-page">
        <div className="collection-page__header">
            <span>Mi colección</span>
            <h2>Cartas adquiridas</h2>
        </div>

        {purchasedCards.length === 0 ? (
            <div className="collection-page__empty">
            <h3>Aún no tienes cartas adquiridas</h3>
            <p>
                Compra una carta desde el catálogo para que aparezca en tu colección.
            </p>
            </div>
        ) : (
            <div className="collection-page__grid">
            {purchasedCards.map((card) => (
                <article key={card.id} className="collection-card">
                <span className="collection-card__badge">Desbloqueada</span>

                <div className="collection-card__image-container">
                    <img
                    src={card.image}
                    alt={card.name}
                    className="collection-card__image"
                    />
                </div>

                <div className="collection-card__content">
                    <h3>{card.name}</h3>

                    <div className="collection-card__types">
                    {card.types.map((type) => (
                        <span key={type}>{type}</span>
                    ))}
                    </div>

                    <p className="collection-card__price">${card.price}</p>
                </div>
                </article>
            ))}
            </div>
        )}
        </section>
    );
};

export default CollectionPage;