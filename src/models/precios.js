import { Schema, model } from 'mongoose';
const roleSchema = new Schema({
  name: {
    type: String,
  },
  valores: {
    type: Array,
  }
}, { timestamps: false, versionKey: false });
export default model('Precios', roleSchema);
