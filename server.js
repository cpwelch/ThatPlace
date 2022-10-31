const express = require("express");
const path = require("path");

const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["https://spectacular-sorbet-3c7823.netlify.app"],
    methods: ["POST"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("Running Server.");
});

app.post("/send_mail", cors(), async (req, res) => {
  let { fullname, email, phone, noOfPeople, date, message } = req.body;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jbbmailer@gmail.com",
      pass: "ujwnkqejtkspomws",
    },
  });

  await transport.sendMail({
    from: req.body.email,
    to: "codingtestercpw@gmail.com",
    subject: `URGENT: New booking for ${date}`,
    html: `
<div style="background-color: black; color: white; padding: 2rem;">
    <h1>New Booking Request</h1>
</div>
<div style="background-color: white; padding: 2rem 2rem;">
    <p> You have a new booking request for: ${fullname}. </p>
    <p>Contact details are: ${email} & ${phone}.</p>
    <p>Booking details are: ${noOfPeople} people for ${date}. </p>
    <br/>
    <p>Additional requirements: ${message}.</p>
    <br />
    <p style="font-weight: bold">Please email or call them to confirm their booking within 24 hrs. </p>
</div>    
  `,
  });
  res.send(200, "success");
});

app.listen(process.env.PORT) || 5001,
  function () {
    console.log("Server running.");
  };
