import { createRoles } from "./libs/initialsetup";
import app from './app';
import comment from "./models/comentario";
require('./database')
/*const create_precios_default = async () => {
    try {
        const count_precios = await comment.estimatedDocumentCount();
        const precios_values = await Promise.all([
            new comment({
                titulo: 'Blog Uno',
                url_image: 'https://images.unsplash.com/photo-1641834828839-075d91255467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
                fecha: '2020-05-05',
                descripcion: [
                    ["A", "B", "C"],
                ]

            }).save()
        ])
        console.log(precios_values);

    } catch (error) {

    }
}
create_precios_default();*/
//captura de errores
app.use((req, res, next) => {
    const error = new Error('Ocurrio un error');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

createRoles();
//iniciandoservidor
app.listen(app.get('port'), () => {
    console.log(`Server en escucha desde: ${app.get("port")}`)
});