const API_URL = import.meta.env.VITE_API_URL;

export const createPaypalOrder = async (pokemon) => {
    const response = await fetch(`${API_URL}/paypal/create-order`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        cardName: pokemon.name,
        price: pokemon.price,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Error al crear la orden de PayPal");
    }

    return data.id;
};

export const capturePaypalOrder = async (orderId) => {
    const response = await fetch(`${API_URL}/paypal/capture-order/${orderId}`, {
        method: "POST",
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Error al capturar la orden de PayPal");
    }

    return data;
};