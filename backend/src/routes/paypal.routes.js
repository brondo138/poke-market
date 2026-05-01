import express from "express";
import { createOrder, captureOrder } from "../controllers/paypal.controller.js";

const router = express.Router();

router.post("/create-order", createOrder);
router.post("/capture-order/:orderId", captureOrder);

export default router;