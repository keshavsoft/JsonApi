let express = require("express");
let Router = express.Router();
let Repo = require("../../../../../Repository/Api/Reports/Menu/WithFilters/AsArray");

Router.get("/", (req, res) => {
  let LocalDataPk = req.KeshavSoft.DataPk;

  Repo.WithFilters({
    inDataPK: LocalDataPk,
  })
    .then((PromiseData) => {
      res.end(JSON.stringify(PromiseData));
    })
    .catch();
});

module.exports = Router;
