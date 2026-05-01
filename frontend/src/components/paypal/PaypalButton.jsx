import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { createPaypalOrder, capturePaypalOrder, } from "../../services/paymentService";

const PaypalButton = ({ pokemon, onSuccess, onError }) => {
    return (
        <div className="paypal-button-container">
        <PayPalButtons
            style={{
            layout: "vertical",
            color: "gold",
            shape: "pill",
            label: "pay",
            }}
            createOrder={async () => {
            try {
                const orderId = await createPaypalOrder(pokemon);
                return orderId;
            } catch (error) {
                console.error(error);
                onError("No se pudo crear la orden de PayPal.");
            }
            }}
            onApprove={async (data) => {
            try {
                const result = await capturePaypalOrder(data.orderID);

                if (result.success && result.status === "COMPLETED") {
                onSuccess(pokemon, result);
                } else {
                onError("El pago no fue completado.");
                }
            } catch (error) {
                console.error(error);
                onError("Ocurrió un error al validar el pago.");
            }
            }}
            onCancel={() => {
            onError("El pago fue cancelado.");
            }}
            onError={(error) => {
            console.error(error);
            onError("Ocurrió un error con PayPal.");
            }}
        />
        </div>
    );
};

export default PaypalButton;