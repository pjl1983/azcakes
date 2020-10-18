const express = require('express');
const router = express.Router();
const moment = require('moment');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID);

router.post('/contact', (req, res) => {
  const AZCakesEmail = 'azcakes@mac.com';
  const contact = req.body.contact;
  const firstName = contact.firstName;
  const lastName = contact.lastName;
  const email = contact.email;
  const telephone = contact.telephone;
  const date = moment(contact.date).format('MMM DD YYYY');
  const theme = contact.theme;
  const message = contact.message;

  const msg = {
    "from": {
    "email": email
  },
    "personalizations": [
    {
      "to": [
        {
          "email": AZCakesEmail
        }
      ],
      "dynamic_template_data": {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "telephone": telephone,
        "date": date,
        "theme": theme,
        "message": message
      }
    }
  ],
    "template_id": "d-405bd02550334f1c840e75c3ddd6feee"
  };

  sgMail.send(msg, (error) => {
    if (!error) {
      res.status(200).send(msg);
    } else {
      console.log(error);
      res.status(500).send(error);
    }
  });
});

module.exports = router;
