import { Router } from "express";
import { listarProductos, agregarProducto, listarProductoPorId, editarProductoPorId, borrarProductoPorId } from "../controllers/productos.controllers.js";

const router = Router();
router.route("/recetas").get(listarProductos).post(agregarProducto)
router.route("/recetas/:id").get(listarProductoPorId).delete(borrarProductoPorId).put(editarProductoPorId)

export default router;