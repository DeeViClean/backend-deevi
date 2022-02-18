import jwt from 'jsonwebtoken';
import Role from "../models/role";
import User from './../models/user';
export const verifytoken = async (req, res, next) => {

    try {
        const token = req.headers['authorization']
        if (!token) return res.status(401).json({ message: 'No token provided', status: 'error' })
        const decoded = jwt.verify(token, process.env.secret_key)

        req.userID = decoded.id;
        const user = await User.findById(req.userID, { password: 0 })
        if (!user) return res.status(400).json({ message: 'User not found', status: 'error' })
        console.log(user);
        next()
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }
}
export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userID)
    const roles = await Role.find({ _id: { $in: user.role } })
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'admin') {
            next()
            return
        }
    }
    return res.status(400).json({ message: 'User not authorized', status: 'error' })
}