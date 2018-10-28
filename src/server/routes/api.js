const express = require('express');
const router = express.Router();
const moment = require('moment');
const braintree = require('braintree');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID);

// router.get('/paypal/generateToken', (req, res) => {
//   const gateway = braintree.connect({
//     accessToken: process.env.PAYPAL_ACCESS_TOKEN
//   });
//
//   gateway.clientToken.generate({}, (err, response) => {
//     if (!err) {
//       res.json(response);
//     } else {
//       console.log(err);
//       res.status(500).send('PayPal token generation error.');
//     }
//   });
// });
//
// router.post('/paypal/pay', (req, res) => {
//   const gateway = braintree.connect({
//     accessToken: process.env.PAYPAL_ACCESS_TOKEN
//   });
//
//   gateway.transaction.sale({
//     amount: req.body.amount,
//     paymentMethodNonce: req.body.paymentMethodNonce,
//     orderId: req.body.orderId,
//     descriptor: {
//       name: req.body.descriptor.name
//     },
//     options: {
//       paypal: {
//         customField: 'Thank you for your order.',
//         description: 'Your PayPal receipt from AZ Cakes by Elizabeth.'
//       },
//       submitForSettlement: true
//     }
//   }, (err, result) => {
//     if (!err) {
//       res.json(result);
//     } else {
//       console.log(err);
//       res.status(500).send('PayPal payment submission error.');
//     }
//   });
// });

router.post('/contact', (req, res) => {
  const contact = req.body.contact;
  const msg = {
    to: 'azcakes@mac.com',
    from: contact.email,
    subject: contact.subject,
    html: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" /><!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" /><!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
      body {width: 600px;margin: 0 auto;}
      table {border-collapse: collapse;}
      table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
      img {-ms-interpolation-mode: bicubic;}
    </style>
    <![endif]-->

    <style type="text/css">
      body, p, div {
        font-family: verdana,geneva,sans-serif;
        font-size: 16px;
      }
      body {
        color: #000000;
      }
      body a {
        color: #1188E6;
        text-decoration: none;
      }
      p { margin: 0; padding: 0; }
      table.wrapper {
        width:100% !important;
        table-layout: fixed;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      img.max-width {
        max-width: 100% !important;
      }
      .column.of-2 {
        width: 50%;
      }
      .column.of-3 {
        width: 33.333%;
      }
      .column.of-4 {
        width: 25%;
      }
      @media screen and (max-width:480px) {
        .preheader .rightColumnContent,
        .footer .rightColumnContent {
            text-align: left !important;
        }
        .preheader .rightColumnContent div,
        .preheader .rightColumnContent span,
        .footer .rightColumnContent div,
        .footer .rightColumnContent span {
          text-align: left !important;
        }
        .preheader .rightColumnContent,
        .preheader .leftColumnContent {
          font-size: 80% !important;
          padding: 5px 0;
        }
        table.wrapper-mobile {
          width: 100% !important;
          table-layout: fixed;
        }
        img.max-width {
          height: auto !important;
          max-width: 480px !important;
        }
        a.bulletproof-button {
          display: block !important;
          width: auto !important;
          font-size: 80%;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .columns {
          width: 100% !important;
        }
        .column {
          display: block !important;
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      }
    </style>
    <!--user entered Head Start-->
    
     <!--End Head user entered-->
  </head>
  <body>
    <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size: 16px; font-family: verdana,geneva,sans-serif; color: #000000; background-color: #ffffff;">
      <div class="webkit">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#ffffff">
          <tr>
            <td valign="top" bgcolor="#ffffff" width="100%">
              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <!--[if mso]>
                          <center>
                          <table><tr><td width="600">
                          <![endif]-->
                          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width:600px;" align="center">
                            <tr>
                              <td role="modules-container" style="padding: 0px 0px 0px 0px; color: #000000; text-align: left;" bgcolor="#ffffff" width="100%" align="left">
                                
    <table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%"
           style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
      <tr>
        <td role="module-content">
          <p></p>
        </td>
      </tr>
    </table>
  
    <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td style="padding:25px 25px 0px 25px;line-height:22px;text-align:inherit;"
            height="100%"
            valign="top"
            bgcolor="">
            <div><span style="color:#333333;">Elizabeth,</span></div>

<div>&nbsp;</div>

<div>You received a new request from ` + contact.firstName + `!</div>

<div>&nbsp;</div>

<div><em><span style="color:#333333;"><span style="font-size:12px;">` + contact.message + `</span></span></em></div>
        </td>
      </tr>
    </table>
  
    <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td style="padding:0px 0px 25px 20px;line-height:22px;text-align:inherit;"
            height="100%"
            valign="top"
            bgcolor="">
            <ul style="list-style-type:none">
	<li><span style="color:#333333;"><span style="font-size:12px;"><strong>Theme:</strong> ` + contact.theme + `</span></span></li>
	<li><span style="color:#333333;"><span style="font-size:12px;"><strong>Date:</strong> ` + moment(contact.date).format('MMM DD YYYY') + `</span></span></li>
	<li><span style="color:#333333;"><span style="font-size: 12px;"><strong>Contact:</strong> ` + contact.firstName + ' ' + contact.lastName + `</span></span></li>
	<li><span style="color:#333333;"><span style="font-size: 12px;"><strong>Email:</strong> ` + contact.email + `</span></span></li>
</ul>
        </td>
      </tr>
    </table>
  
    <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px;" valign="top" align="center">
          <img class="max-width" border="0" style="display:block;color:#000000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;max-width:20% !important;width:20%;height:auto !important;" src="https://marketing-image-production.s3.amazonaws.com/uploads/753856ecd9cb238422aaac36451cec883045aa38991703bbc93dbc4176d9d91b4d6f6076d513035521d87753ccccfcd2b7cdf671d608569b2cf8aa6440c5af2d.png" alt="" width="120">
        </td>
      </tr>
    </table>
  
    <table class="module"
           role="module"
           data-type="divider"
           border="0"
           cellpadding="0"
           cellspacing="0"
           width="100%"
           style="table-layout: fixed;">
      <tr>
        <td style="padding:0px 25px 0px 25px;"
            role="module-content"
            height="100%"
            valign="top"
            bgcolor="">
          <table border="0"
                 cellpadding="0"
                 cellspacing="0"
                 align="center"
                 width="100%"
                 height="1px"
                 style="line-height:1px; font-size:1px;">
            <tr>
              <td
                style="padding: 0px 0px 1px 0px;"
                bgcolor="#b3b3b3"></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  
    <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
      <tr>
        <td style="background-color:#ffffff;padding:18px 25px 18px 25px;line-height:4px;text-align:inherit;"
            height="100%"
            valign="top"
            bgcolor="#ffffff">
            <div style="text-align: center;"><span style="color:#B3B3B3;"><span style="font-size:10px;">This email was generated and sent by&nbsp;<a href="http://azcakes.com">www.azcakes.com</a>.</span></span></div>
        </td>
      </tr>
    </table>
  
                              </td>
                            </tr>
                          </table>
                          <!--[if mso]>
                          </td></tr></table>
                          </center>
                          <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </center>
  </body>
</html>
`
  };

  sgMail.send(msg, (error) => {
    if (!error) {
      res.status(200).send('Success!');
    }
  });
});

module.exports = router;
