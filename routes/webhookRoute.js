import express from "express";
import {
  getDataBaleMessenger,
  webhookHandlerBaleMessenger,
  webhookHandlerTelegramMessenger,
} from "../controllers/orderController.js";

const webhookRoutes = express.Router();

webhookRoutes.get("/bale", getDataBaleMessenger);
webhookRoutes.post("/bale", webhookHandlerBaleMessenger);
webhookRoutes.post("/telegram", webhookHandlerTelegramMessenger);

export default webhookRoutes;
