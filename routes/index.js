require('dotenv').config()
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// setup nodemailer
const smtpTransport = nodemailer.createTransport("SMTP", {
  service: 'gmail',
  host: "smtp.gmail.com",
  auth: {
    // enter your gmail account
    user: process.env.AUTH_USER,
    // enter your gmail password
    pass: process.env.AUTH_PASSWORD
  }
});

router
  .get('/', function (req, res) {
    res.sendfile('http://www.davidjoshua.id/about.html');
  })
  .get('/send', function (req, res) {
    var mailOptions = {
      to: req.query.to,
      from: `Contact Form Request: < ${req.query.user} >`,
      subject: `Contact Form Message From: < ${req.query.name} >`,
      html: `<b>Name:</b> ${req.query.name} <br>
             <b>Email:</b> ${req.query.user} <br>
             <b>Message:</b> ${req.query.text}`
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (err, response) {
      if (err) {
        console.log(err);
        res.end('error');
      } else {
        console.log(`Message sent: ${response.message}`);
        res.end('sent');
      }
    });
  });

module.exports = router;