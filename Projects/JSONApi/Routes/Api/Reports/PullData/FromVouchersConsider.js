let express = require("express");
let Router = express.Router();
let Repo = require("../../../../Repository/Api/Reports/PullData/FromVouchersConsider")

Router.get('/:inReportName', (req, res) => {
    let LocalDataPK = req.KeshavSoft.DataPk;
    let LocalReportName = req.params.inReportName;
    
    Repo.AsTable({
        inReportName: LocalReportName,
        inDataPK: LocalDataPK,
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = Router;