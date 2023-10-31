import express from "express";
import { registrar, autenticar, confirmar, olvidePassword } from "../controllers/userController.js";

const router = express.Router();

// Autenticacion Registro y confirmacion de usuario
router.post("/", registrar)
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);


export default router;