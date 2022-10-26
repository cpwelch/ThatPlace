const express = require("express");
const path = require("path");

const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.resolve(__dirname, "../brandedwebsite/build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../brandedwebsite/build", "index.html")
  );
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
    <h1>New Booking Request</h1>
    <p> 
    You have a new booking request for:
  ${fullname}. </p>
  <p>Contact details are: ${email} & ${phone}.</p>
  <p>Booking details requested are: ${noOfPeople} people, ${date}. </p>
  <br/>
  <p>Additional requirements: ${message}.</p>
  <br />
  <p>Please email or call them to confirm their booking within 24 hrs. </p>
  `,
  });
});

const PORT = process.env.port || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
