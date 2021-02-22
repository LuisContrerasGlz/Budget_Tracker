const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
//Se modifica para subirlo a GitHub
//const PORT = 3000;
const PORT = process.env.PORT || 80; 
const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//se modifica para la base de datos en linea
mongoose.connect("mongodb+srv://root:abcde1234@cluster0.ml5kg.mongodb.net/workout?retryWrites=true&w=majority", {
//mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});