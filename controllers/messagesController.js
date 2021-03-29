const nodemailer = require("nodemailer")

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
    let message = "<p><strong>Name:</strong> " + firstName + " " + lastName + "</p><p><strong>Email:</strong> " + email + "</p><p><strong>Phone:</strong> " + phone + "</p><p><strong>Message:</strong> " + req.body.message + "</p>"
    let subject = "New Contact: " + firstName + " " + lastName

    var mail = {
      from: "colinstevens06@gmail.com",
      to: "colinstevens06@gmail.com",
      subject: subject,
      html: message

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