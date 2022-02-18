import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    calle_uno: {
        type: String,
    },
    calle_dos: {
        type: String,
    },
    codigo_postal: {
        type: Number,
    },
    telefono: {
        type: String,
    },
    horario: {
        type: String,
    },
    servicio: {
        type: Array,
    },
    role: [{
        role: 'role',
        type: Schema.Types.ObjectId
    }],
    Comment: [{
        type: Array,
    }]


},
    { timestamps: true, versionKey: false }
)
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}
userSchema.statics.comparePassword = async (password, comparPassword) => {
    return await bcrypt.compare(password, comparPassword)
}
export default model('User', userSchema)