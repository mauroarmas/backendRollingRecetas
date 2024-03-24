import Receta from "../database/models/receta.js";

export const listarRecetas = async (req, res) => {
  try {
    const resultado = await Receta.find();

    res.status(200).json(resultado);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "No se pudo obtener los datos (error 404)",
    });
  }

};

export const agregarReceta = async (req, res) => {
  try {
    
    console.log(req.body);

    const nuevaReceta = new Receta(req.body);

    const receta_a_guardar = await nuevaReceta.save();

    res.status(201).json({
      producto: receta_a_guardar,
      mensaje: "La receta fue guardada correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensage: "La receta no tiene el formato adecuado (error 400)",
    });
  }
};

export const listarRecetaPorId = async (req, res) => {
  try {
    
    console.log(req.params);

    const recetaEncontrada = await Receta.findById(req.params.id);

    res.status(200).json(recetaEncontrada);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensage: "No se encontro la receta (Error 404)",
    });
  }
};

// export const listarProductosPorInfusion = async (req, res) => {
//   try {
//     //extraer producto id
//     console.log(req.params);

//     //buscar el producto en la BD
//     const productosEncontrados = await Producto.find({ categoria: "Infusión" });
//     //const productoEncontrado = await Producto.findById(req.params)

//     //responder con el producto
//     res.status(200).json(productosEncontrados);
//   } catch (error) {
//     console.error(error);
//     res.status(404).json({
//       mensage: "El producto no se encontro",
//     });
//   }
// };

// export const editarProductoPorId = async (req, res) => {
//   try {
//     const productoEncontrado = await Producto.findById(req.params.id);
//     if (!productoEncontrado) {
//       return res.status(404).json({ message: "Producto no encontrado" });
//     }
//     await Producto.findByIdAndUpdate(req.params.id, req.body);
//     res.status(200).json({ message: "Producto Editado" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Ocurrio un error al editar el producto" });
//   }
// };

// export const borrarProductoPorId = async (req, res) => {
//   try {
//     const productoEncontrado = await Producto.findById(req.params.id);
//     if (!productoEncontrado) {
//       return res.status(404).json({ message: "Producto no encontrado" });
//     }
//     await Producto.findByIdAndDelete(req.params.id, req.body);
//     res.status(200).json({ message: "Producto Borrado" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Ocurrio un error al editar el producto" });
//   }
// };
