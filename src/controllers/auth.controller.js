import User from './../models/user';
import Role from './../models/role';
import jwt from 'jsonwebtoken';
import { transporter } from "./email.controller";
export const signUp = async (req, res) => {
    try {
        const { name, email, password, calle_uno, calle_dos, telefono, horario, codigo_postal, servicio, role } = req.body;
        const newUser = new User({
            name,
            email,
            password: await User.encryptPassword(password),
            calle_uno,
            calle_dos,
            telefono,
            horario,
            codigo_postal,
            servicio,
        })
        if (role) {
            const found = await Role.find({ name: { $in: role } })
            newUser.role = found.map(r => r._id)
        } else {
            const founda = await Role.findOne({ name: "user" })
            newUser.role = [founda._id]
        }
        const savedUser = await newUser.save();
        console.log(savedUser.email);
        const token = jwt.sign({ id: savedUser._id }, process.env.secret_key)
        try {
            var template = {
                from: "DeeViClean <asepsis.deep@gmail.com>",
                to: savedUser.email,
                subject: "Bienvenido a DeeviClean, Gracias por elegirnos",
                html: `
                
 <!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="x-apple-disable-message-reformatting">
	<title>Bitexblock</title>
	<!--[if mso]>
	<noscript>
		<xml>
			<o:OfficeDocumentSettings>
				<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
	</noscript>
	<![endif]-->
	<style>
		table, td, div, h1, p {font-family: Arial, sans-serif;}
	</style>
</head>
<body style="margin:0;padding:0;">
	<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
		<tr>
			<td align="center" style="padding:0;">
				<table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
					<tr>
						<td align="center" style="padding:40px 0 30px 0;background:#0d0d0d;">
							<img src="https://raw.githubusercontent.com/Bryan-Herrera-DEV/example_middlewares_y_rutas/main/images_para_proyectos/LogoSinFondo.png?token=GHSAT0AAAAAABQ4SO7XYHVX3ZF7PY3JOR5CYPSZJUQ" alt="" width="300" style="height:auto;display:block;" />
						</td>
					</tr>
					<tr>
						<td style="padding:36px 30px 42px 30px;">
							<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
								<tr>
									<td style="padding:0 0 36px 0;color:#153643;">
										<h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Bienvenido a DeeViClean, Gracias por elegirnos</h1>
										<p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Hola ${savedUser.name},</p>
                    <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Gracias por registrarte en DeeViClean, ahora puedes disfrutar de todos nuestros servicios.</p>
                    <h4>¡Valoramos tu tiempo libre!</h4>
                    
									</td>
								</tr>
								
							</table>
						</td>
					</tr>
					<tr>
						<td style="padding:30px;background: #16272b; color: #fff;">
							<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
								<tr>
									<td style="padding:0;width:50%;" align="left">
										<p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#fff;">Copyright © 2022 All Rights Reserved by DeeViClean.</a>
										</p>
									</td>
									
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
            
                `
            }
            await transporter.sendMail(template, function (err, info) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(info);
                }
            })
            res.status(200).json({
                message: 'User created',
                status: 'success',
                token: savedUser
            })
        } catch (error) {

            return res.status(400).json({
                message: error.message,
                status: 'erro aquir'
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }
}

export const signIn = async (req, res) => {
    try {
        const userFound = await User.findOne({ email: req.body.email }).populate('role')
        if (!userFound) return res.status(400).json({ message: 'Email not found', status: 'error' });
        const matchPassword = await User.comparePassword(req.body.password, userFound.password)

        if (!matchPassword) return res.status(400).json({ message: 'Password incorrect', status: 'error' });

        const token = jwt.sign({ id: userFound._id }, process.env.secret_key)
        const val = jwt.verify(token, process.env.secret_key)

        res.status(200).json({
            message: 'User found',
            status: 'success',
            id_find: val.id,

            user: userFound,
            token: token
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: 'error'
        })
    }


}

// ADMINISTRADOR_DEEVICLEAN_-- ADMIN_DEEVI@deevi