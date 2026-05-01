import React from "react";
import "./PurchaseModal.css";
import PaypalButton from "./PaypalButton";
import { X } from "lucide-react";

const PurchaseModal = ({ pokemon, onClose, onPurchaseSuccess, onPurchaseError }) => {
    if (!pokemon) return null;

    return (
        <div className="purchase-modal">
        <div className="purchase-modal__content">
            <button className="purchase-modal__close" onClick={onClose}>
            <X size={22} />
            </button>

            <div className="purchase-modal__card">
            <img src={pokemon.image} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <p>Precio: ${pokemon.price}</p>
            </div>

            <div className="purchase-modal__payment">
            <h3>Finalizar compra</h3>
            <p>Comprar desbloquear esta carta.</p>

            <PaypalButton
                pokemon={pokemon}
                onSuccess={onPurchaseSuccess}
                onError={onPurchaseError}
            />
            </div>
        </div>
        </div>
    );
};

export default PurchaseModal;