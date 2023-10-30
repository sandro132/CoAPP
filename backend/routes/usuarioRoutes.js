import express from "express";
import { registrar } from "../controllers/userController.js";

const router = express.Router();

// Autenticacion Registro y confirmacion de usuario
router.post("/", registrar)

export default router;