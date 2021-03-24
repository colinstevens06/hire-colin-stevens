const nodemailer = require("nodemailer")
require('dotenv').config()

// form submissions
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILPW
  }
})

module.exports = {
  sendOne: function (req, res) {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let phone = req.body.phone
    let message = req.body.message
    let subject = "New Contact: " + firstName + " " + lastName

    var mail = {
      from: "colinstevens06@gmail.com",
      to: "colinstevens06@gmail.com",
      subject: subject,
      text: message
      // text: {
      //   name: firstName + lastName,
      //   email: email,
      //   phone: phone,
      //   message: message
      // }
    }

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
        console.log(err)
      } else {
        res.json({
          status: 'success'
        })
      }
    })


  }
}