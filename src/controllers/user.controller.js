import User from './../models/user';
import precios from "../models/precios";
import comentario from "../models/comentario";
import Role from './../models/role';
import jwt from 'jsonwebtoken';



export const getUserById = async (req, res) => {
    try {

        const user = await User.findById(req.params.id);
        console.log(user);
        if (!user) return res.status(400).json({ message: 'User not found', status: 'errora' });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }
};
export const updateUser = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }
}
export const getComments = async (req, res) => {
    try {
        const user = await User.find();
        const comment = [];
        if (!user) return res.status(400).json({ message: 'User not found', status: 'errora' });
        for (let index = 0; index < user.length; index++) {
            if (user[index].Comment[0] != undefined) {
                const dataPush = {
                    name: user[index].name,
                    comment: user[index].Comment
                }
                comment.push(dataPush);
            }

        }

        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }
}
//rutas amdin
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }

}
export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User deleted', status: 'success' });
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }
}
export const get_precios = async (req, res) => {
    try {
        const prcios = await precios.find();
        res.status(200).json(prcios);
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }
}
export const update_precios = async (req, res) => {
    try {
        const prcios = await precios.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(prcios);
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }
}
export const delete_comentario = async (req, res) => {
    try {
        await comentario.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User deleted', status: 'success' });
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }
}
export const get_comentarios = async (req, res) => {
    try {
        const comentario_ = await comentario.find();
        res.status(200).json(comentario_);
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }
}
export const update_comentario = async (req, res) => {
    try {
        const comentario_ = await comentario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(comentario_);
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }
}
export const create_comentario = async (req, res) => {
    try {
        const comentario_ = await comentario.create(req.body);
        res.status(200).json(comentario_);
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }
}

