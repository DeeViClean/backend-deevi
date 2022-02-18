import { Schema, model } from 'mongoose';
const roleSchema = new Schema({
  titulo: String,
  url_image: String,
  fecha: String,
  descripcion: Array,
}, { timestamps: false, versionKey: false });
export default model('Post', roleSchema);
