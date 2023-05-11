const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const funcionarioController = require("./src/controllers/FuncionarioController");
const pontoController = require("./src/controllers/PontoController");
const app = express();

app.use(
  session({
    secret: "tsv-png-cat",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 8 * 60 * 60 * 1000 },
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

app.get("/", (req, res) => {
  res.render("funcionario/login");
});

app.post("/login", async (req, res) => {
  await funcionarioController.login(req, res);
});

app.get("/registro", (req, res) => {
  res.render("funcionario/registro");
});

app.post("/registrar-funcionario", async (req, res) => {
  await funcionarioController.registrar(req, res);
});

app.get("/ponto", (req, res) => {
  pontoController.getPontos(req, res);
});

app.get("/ponto/:id", (req, res) => {
  pontoController.registrarPonto(req, res);
});
app.get("/pontos/:id", (req, res) => {
  pontoController.excluirPonto(req, res);
});

app.listen(8081, () => {
  console.log("Server started on port 8081");
});
