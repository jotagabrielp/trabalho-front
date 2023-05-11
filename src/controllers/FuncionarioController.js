const Funcionario = require("../models/Funcionario");
const axios = require("axios");
async function registrar(req, res) {
  const { nome, cpf, email, password } = req.body;
  const funcionario = new Funcionario(nome, cpf, email, password);
  axios
    .post("http://localhost:3000/funcionario", {
      data: JSON.stringify(funcionario),
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      console.error("Error:", error);
      res.send("Erro ao registrar funcionário");
    });
}

async function login(req, res) {
  const { nome, password } = req.body;
  axios
    .post("http://localhost:3000/login", {
      nome,
      password,
    })
    .then((response) => {
      req.session.userId = response.data._id;
      res.redirect("/ponto");
    });
}

module.exports = {
  registrar,
  login,
};
