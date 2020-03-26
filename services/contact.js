const express = require('express');
const nodemailer = require('nodemailer');
const routes = app => {
        app.post('/', (req, res) => {
        "use strict";
        async function main() {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: process.env.GMAIL_USER,
                  pass: process.env.GMAIL_PASS
                }
              });
              
              var mailOptions = {
                from: 'req.body.contactName',
                to: process.env.GMAIL_USER,
                subject: 'New Connection',
                html: `
                <div style="border: 1px solid #000; padding: 20px 25px;">
                    <h2>You've recieved a contact</h2>
                    <p>Contact Name: ${req.body.contactName}</p>
                    <p>Contact Email: ${req.body.contactEmail}</p>
                </div>
                `
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        }
          
         main().catch(console.error);
    
        res.redirect('/contact-success');
    });
}

module.exports = routes;

