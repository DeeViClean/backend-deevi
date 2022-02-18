import { Schema, model } from 'mongoose';
const cometarioSchema = new Schema({
  titulo: String,
  url_image: String,
  fecha: String,
  descripcion: Array,
}, { timestamps: false, versionKey: false });
export default model('Comentario', cometarioSchema);
