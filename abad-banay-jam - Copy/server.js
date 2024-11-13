const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit-form', (req, res) => {
    const { name, phone, address, service, date } = req.body;

    // Email settings
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'abadbanayjam@gmail.com',
            pass: 'mahdiar8989'
        }
    });

    const mailOptions = {
        from: 'abadbanayjam@gmail.com',
        to: 'richyrachfansgmial@gmail.com',
        subject: 'New Service Request',
        text: `Name: ${name}\nPhone: ${phone}\nAddress: ${address}\nService: ${service}\nDate: ${date}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Form submitted successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
