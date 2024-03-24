import { Router } from "express";
import { agregarReceta, listarRecetas, listarRecetaPorId, editarReceta, eliminarReceta } from "../controllers/recetas.controllers.js";

const router = Router();
router.route("/recetas").post(agregarReceta).get(listarRecetas)
router.route("/recetas/:id").get(listarRecetaPorId).put(editarReceta).delete(eliminarReceta)

export default router;