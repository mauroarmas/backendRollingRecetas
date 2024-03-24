import { Router } from "express";
// import { listarProductos, agregarProducto, listarProductoPorId, editarProductoPorId, borrarProductoPorId } from "../controllers/productos.controllers.js";
import { agregarReceta, listarRecetas } from "../controllers/recetas.controllers.js";

const router = Router();
router.route("/recetas").post(agregarReceta).get(listarRecetas)
router.route("/recetas/:id")

export default router;