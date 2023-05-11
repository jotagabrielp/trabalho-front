const axios = require("axios");
const { session } = require("passport");
function getPontos(req, res) {
  axios
    .get(`http://localhost:3000/funcionario/${req.session.userId}/pontos`)
    .then((response) => {
      const { pontos, funcionario } = response.data;
      res.render("ponto", { pontos, funcionario });
    })
    .catch((error) => {
      console.error("Error:", error);
      res.send("Erro ao buscar pontos");
    });
}

function registrarPonto(req, res) {
  axios
    .post(`http://localhost:3000/ponto/${req.params.id}`, {
      entrada: new Date(1652281200000),
      saida: new Date(1652310000000),
    })
    .then((response) => {
      req.session.userId = response.data.funcionario._id;
      res.redirect("/ponto");
    })
    .catch((error) => {
      console.log(error.message);
      res.send("Erro ao registrar ponto");
    });
}

function excluirPonto(req, res) {
  axios
    .delete(`http://localhost:3000/ponto/${req.params.id}`)
    .then((response) => {
      res.redirect("/ponto");
    })
    .catch((e) => {
      console.log(e.message);
      res.send("Erro ao excluir ponto");
    });
}

module.exports = {
  getPontos,
  registrarPonto,
  excluirPonto,
};
