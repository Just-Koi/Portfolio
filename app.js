
const bodyParser = require('body-parser');
const path = require("path");
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("assets"));

// contact 
app.post('/contact', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        user: 'mailtransporter61@gmail.com',
        port: 3000,
        secure: true,
        auth: {
            type: 'login',
            user: 'mailtransporter61@gmail.com',
            pass: 'ogkayjwciwtcrpwc'
        }
    });
    const mailOptions = {
        from: 'mailtransporter61@gmail.com',
        to: 'kacper5marciniak@gmail.com, kacper.d3veloper@gmail.com, ' + req.body.email, 
        subject: 'Waiting for response',
        text: 'Thanks for sending my your message! I will read it ASAP ;) ' + '\n' + 'Your mail: ' + req.body.email + '\n' + ' Your message content: ' + req.body.message
    }
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.redirect('/');
});

app.get("/", (req, res) => {
    res.render("index", { title: "Portfolio" });
});

// server
const hostname = '127.0.0.1';
const port =  4000;
app.listen(process.env.PORT || port, () => {
    console.log('Aapplication is running on port https://' + hostname + ':' + port);
});