import mongoose, { Schema } from "mongoose";

// * ESQUEMA: Estructura que yo pretendo almacenar en la DB (Molde, algo así como una tabla)
const recetaEsquema = new Schema({
  nombre: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    unique: true,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return /(http)=?s?:?(\/\/[^"'"]*\.(?:png|jpg|jpeg|gif|svg))/i.test(
          value
        );
      },
      message: (props) => `${props.value} no es una url de imagen válida`,
    },
  },
  categoria: {
    type: String,
    required: true,
    enum: [
      "Parrilla",
      "Vegano",
      "Gourmet",
      "Pescados",
      "Aves",
      "Entradas y Aperitivos",
      "Guarniciones",
      "Desayunos y Brunch",
      "Saludable",
      "Ensaladas",
      "Recetas Express",
      "Postres",
    ],
  },
  descripcionBreve: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 200,
  },
  descripcionAmplia: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
  pasos: {
    type: Array,
    required: true,
  },
  ingredientes: {
    type: Array,
    required: true,
  },
});

// generar modelo en base al schema, se la enuncia cómo una clase (Singular y con mayus), esto es cómo una tabla SQL
// lo exportamos para usar en el controlador

// * MODELO: Con el esquema de datos se crea el modelo, que es la representación de todos los documentos en la DB (Colección)
// * DOCUMENTO: Dato en sí, que posee un id y todas las propiedades del esquema (Ej: Un producto)
const Receta = mongoose.model("receta", recetaEsquema);

export default Receta;
