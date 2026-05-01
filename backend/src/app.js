import express from "express";
import cors from "cors";
import paypalRoutes from "./routes/paypal.routes.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Backend de PokéCards Market funcionando correctamente.",
    });
});

app.use("/api/paypal", paypalRoutes);

export default app;