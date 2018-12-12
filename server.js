const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const items = require("./routes/api/items");

const app = express();

//bodyparser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//OJO!: sacar CORS cuando pase a deployment
app.use(cors());

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//conecttion con mongoDB
mongoose
  .connect(
    "mongodb://seba:1q2w3e4r@ds037518.mlab.com:37518/samplist",
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongodb conectado"))
  .catch(err => console.log(err));

//rutas
app.use("/api/items", items);

app.post("/api/form", (req, res) => {
  console.log("hola", req.body);
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
  <h3>Conctact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Name: ${req.body.email}</li>
    </ul>
    <h3>msg</h3>
    <p>${req.body.msg}</p>
  `;

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "bvrsndysmeo6c7em@ethereal.email",
        pass: "3QBnyZU6DcWhjzh2Zn"
      }
    });

    let mailOptions = {
      from: "test@test.com",
      to: "bvrsndysmeo6c7em@ethereal.email",
      replyTo: "test@test.com",
      subject: "Nuevo Mensage",
      text: req.body.msg,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("message sent: %s ", info.msg);
    });
  });
});

//static asset para cuando esta en produccion
if (process.env.NODE_ENV === "production") {
  //folder estatico
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", index.html));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`servidor en puerto: ${port}`));
