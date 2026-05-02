import React, { useEffect, useState } from "react";
import "./CollectionPage.css";
import PokemonCard from "../components/pokemon/PokemonCard";

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
                        <PokemonCard
                            key={card.id}
                            pokemon={{
                                ...card,
                                purchased: true,
                            }}
                            showButton={false}
                            badgeText="Desbloqueada"
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default CollectionPage;