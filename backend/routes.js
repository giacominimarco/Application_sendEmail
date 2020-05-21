const nodemailer = require('nodemailer');
const express = require('express');
const routes = express.Router();
require('dotenv').config();

routes.post('/email', (Request, Response) => {
    const {text, content} = Request.body;

    let transport = nodemailer.createTransport({
        host: process.env.SMTPHOST,
        port: process.env.SMTPPORT,
        auth: {
            user: process.env.SMTPUSER,
            pass: process.env.SMTPPASS
        }
    });
    // Exemplo de mensagem com HTML
    const message = {
        from: 'suporte@nubank.com',
        to: '7858ae809b-7a52d8@inbox.mailtrap.io',
        subject: text,
        html: content
    };

    transport.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
})

module.exports = routes;