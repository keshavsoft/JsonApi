let express = require("express");
let Router = express.Router();
let Repo = require("../../../../../Repository/Api/Reports/Menu/WithOutFilters/AsArray")

Router.get('/', (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    Repo.WithOutFilters({
        inDataPk: LocalDataPk,
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = Router;