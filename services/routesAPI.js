const express = require('express');
const request = require('request')
const routes = app => {
  app.post('/', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
      console.log("NAH");
      return;
    }

    //req data
    const data = {
      members: [
        {
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            NAME: name
          }
        }
      ]
    }

    const postData = JSON.stringify(data);

    const options = {
      url: 'https://us19.api.mailchimp.com/3.0/lists/c218fccf61',
      method: 'POST',
      headers: {
        Authorization: 'auth 9b9c428523aaa7c2191788b49243fe41-us19'
      },
      body: postData
    }

    request(options, (err, response, body) => {
      if(err) {
        res.redirect('/404');
      } else {
        if (response.statusCode === 200) {
          res.redirect('/contact-success');
        } else {
          res.redirect('/404');
        }
      }
    });
  });
}
module.exports = routes;





/*         "use strict";
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
    }); */