import express from "express";
import { registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil } from "../controllers/userController.js";
import checkAuth from "../middleware/checkAuth.js";
// import { searchJobs } from "../controllers/searchJobsController.js";

const router = express.Router();

// Autenticacion Registro y confirmacion de usuario
router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);
router.get("/pagina-principal", checkAuth, perfil); //TODO: post sample complete query
//searchJobs
export default router;