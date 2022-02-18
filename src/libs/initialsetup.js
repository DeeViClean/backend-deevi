import role from './../models/role';
import precios from "./../models/precios";
export const createRoles = async (req, res) => {
    try {
        const count = await role.estimatedDocumentCount();
        if (count > 0) return;
        console.log(count);
        const values = await Promise.all([
            new role({ name: 'admin' }).save(),
            new role({ name: 'user' }).save(),

        ])

        console.log(values);
    } catch (error) {
        console.error(error);
    }
}