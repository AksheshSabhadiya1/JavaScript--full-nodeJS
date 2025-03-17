const nodemailer = require('nodemailer')

const sendMail = async (req, res) => {
  res.send("I am sending Mail");

  //# connect with smtp
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
       user: 'woodrow.koch9@ethereal.email',
        pass: 'DbZfry2eEhbz8rNTHG'
    },
  });

  //# sending mail
  const info = await transporter.sendMail({
    from: '"Akshu Patel 👻" woodrow.koch9@ethereal.email', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s",info.messageId);
  res.end()

}


module.exports = sendMail