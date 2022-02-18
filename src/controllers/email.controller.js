import nodemailer from 'nodemailer';
const email = {
  user: 'asepsis.deep@gmail.com',
  pass: '=DeeViClean=175598',
}
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'asepsis.deep@gmail.com', // generated ethereal user
    pass: 'wwquuszvbdtawbgn', // generated ethereal password
  },
});
transporter.verify().then(() => {
  console.log('Server is ready to take our messages');
});