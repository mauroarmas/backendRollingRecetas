import { Router } from "express";
import { agregarReceta, listarRecetas, listarRecetaPorId, editarReceta } from "../controllers/recetas.controllers.js";

const router = Router();
router.route("/recetas").post(agregarReceta).get(listarRecetas)
router.route("/recetas/:id").get(listarRecetaPorId).put(editarReceta)

export default router;