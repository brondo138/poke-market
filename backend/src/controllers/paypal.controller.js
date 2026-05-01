import { paypalRequest } from "../config/paypal.js";

export const createOrder = async (req, res) => {
    try {
        const { cardName, price } = req.body;

        if (!cardName || !price) {
        return res.status(400).json({
            message: "El nombre de la carta y el precio son obligatorios.",
        });
        }

        const order = await paypalRequest("/v2/checkout/orders", {
        method: "POST",
        body: JSON.stringify({
            intent: "CAPTURE",
            purchase_units: [
            {
                description: `Compra de carta ${cardName}`,
                amount: {
                currency_code: "USD",
                value: Number(price).toFixed(2),
                },
            },
            ],
        }),
        });

        return res.status(201).json({
        id: order.id,
        status: order.status,
        });
    } catch (error) {
        return res.status(500).json({
        message: "Error al crear la orden de PayPal.",
        });
    }
    };

    export const captureOrder = async (req, res) => {
    try {
        const { orderId } = req.params;

        if (!orderId) {
        return res.status(400).json({
            message: "El ID de la orden es obligatorio.",
        });
        }

        const capture = await paypalRequest(
        `/v2/checkout/orders/${orderId}/capture`,
        {
            method: "POST",
        }
        );

        if (capture.status !== "COMPLETED") {
        return res.status(400).json({
            success: false,
            status: capture.status,
            message: "El pago no fue completado.",
        });
        }

        return res.status(200).json({
        success: true,
        status: capture.status,
        orderId: capture.id,
        message: "Pago completado correctamente.",
        });
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: "Error al capturar la orden de PayPal.",
        });
    }
};