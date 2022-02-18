import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.router';
import userRoutes from './routes/user.routes';
import { createRoles } from "./libs/initialsetup";
import * as email from "./controllers/newsletter.controller";
const app = express();
createRoles();
//config
app.use(cors())
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//rutas
email.add_email_to_newsletter();

//app.use('/api', require('./routes/index'))
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API of Deevy',
        status: 'success',
        author: 'Bryan Herrera',
        github: 'https://github.com/Bryan-Herrera-DEV/'
    });
});

export default app;