import dotenv from "dotenv";

dotenv.config();

const PAYPAL_BASE_URL = process.env.PAYPAL_BASE_URL;

export const generateAccessToken = async () => {
    try {
        const auth = Buffer.from(
        `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
        ).toString("base64");

        const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
        method: "POST",
        headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
        });

        const data = await response.json();

        if (!response.ok) {
        console.error("Error generando access token:", data);
        throw new Error("No se pudo generar el access token de PayPal");
        }

        return data.access_token;
    } catch (error) {
        console.error(error);
        throw error;
    }
    };

    export const paypalRequest = async (endpoint, options = {}) => {
    const accessToken = await generateAccessToken();

    const response = await fetch(`${PAYPAL_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        ...options.headers,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        console.error("Error en PayPal:", data);
        throw new Error(data.message || "Error en la petición a PayPal");
    }

    return data;
};