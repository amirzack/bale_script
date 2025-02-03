import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import webhookRoutes from "../routes/webhookRoute.js";
import { globalErrHandler, notFound } from "../middlewares/globalErrHandler.js";

dotenv.config();
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// app.use("/uploads",express.static("uploads"));

//Routes

app.use("/api/v1/webhook", webhookRoutes);

//Error Middlewares
app.use(notFound);
app.use(globalErrHandler);

export default app;
