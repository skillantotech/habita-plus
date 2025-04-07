// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
// //   host: "smtp.ethereal.email",
// //   port: 587,
// //   secure: false, // true for port 465, false for other ports
// service: "gmail",
//   auth: {
//     user: "pn8556128@gmail.com",
//     pass: "zywwksdzplbyrcan",
//   },
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: 'pn8556128@gmail.com', // sender address
//     to: "pnpriyankanayak578@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     // html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }

// main().catch(console.error);



// require("dotenv").config(); // Load environment variables from .env
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "pn8556128@gmail.com",
//     pass: "zywwksdzplbyrcan", 
//   },
// });

// // async function main() {
// //   try {
// //     const info = await transporter.sendMail({
// //       from: "pn8556128@gmail.com", // Sender address
// //       to: "pnpriyankanayak578@gmail.com", // Receiver
// //       subject: "Hello ✔", // Subject
// //       text: "Hello world?", // Plain text body
// //     });

// //     console.log("Message sent: %s", info.messageId);
// //   } catch (error) {
// //     console.error("Error sending email:", error);
// //   }
// // }

// // main();


// var maildetails = {
//     from: "pn8556128@gmail.com",
//     to: "pnpriyankanayak578@gmail.com",
//     subject: "Hello ✔",
//     text: "Hello world?",
//   };

//   transporter.sendMail(maildetails, function (error, info) {
//     if (error) {    
//       console.log(error);
//     } else {
//     //   console.log("Email sent: " + info.response);
//     console.log("email send successfully");

//     }
//   });



const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pn8556128@gmail.com",
    pass: "zywwksdzplbyrcan", 
  },
});

var maildetails = {
    from: "pn8556128@gmail.com",
    to: "pnpriyankanayak578@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
  };

  transporter.sendMail(maildetails, function (error, info) {
    if (error) {    
      console.log(error);
    } else {
    //   console.log("Email sent: " + info.response);
    console.log("email send successfully");

    }
  });
