let express = require("express");
let Router = express.Router();
let Repo = require("../../../../../Repository/Api/Reports/PullData/WithOutFilters/AsTable")

Router.get('/:inReportName', (req, res) => {
    let LocalDataPK;
    let LocalReportName;

    if ("KeshavSoft" in req) {
        if ("DataPk" in req.KeshavSoft) {
            LocalDataPK = req.KeshavSoft.DataPk;

            if ("inReportName" in req.params) {
                LocalReportName = req.params.inReportName;

                Repo.WithOutFilters({
                    inReportName: LocalReportName,
                    inDataPK: LocalDataPK,
                }).then(PromiseData => {
                    res.end(JSON.stringify(PromiseData));
                }).catch();

            } else {
                res.json({ KTF: false, KReason: "Need to send inReportName" });
            };
        } else {
            res.json({ KTF: false, KReason: "DataPk not found in Request.Keshavsoft" });
        };
    } else {
        res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
    };
});

Router.get('/DataOnly/:inReportName', (req, res) => {
    let LocalDataPK;
    let LocalReportName;

    if ("KeshavSoft" in req) {
        if ("DataPk" in req.KeshavSoft) {
            LocalDataPK = req.KeshavSoft.DataPk;

            if ("inReportName" in req.params) {
                LocalReportName = req.params.inReportName;

                Repo.DataOnly({
                    inReportName: LocalReportName,
                    inDataPK: LocalDataPK,
                }).then(PromiseData => {
                    res.end(JSON.stringify(PromiseData));
                }).catch();

            } else {
                res.json({ KTF: false, KReason: "Need to send inReportName" });
            };
        } else {
            res.json({ KTF: false, KReason: "DataPk not found in Request.Keshavsoft" });
        };
    } else {
        res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
    };
});

Router.get('/DataWithConfigColumnsOnly/:inReportName', (req, res) => {
    let LocalDataPK;
    let LocalReportName;

    if ("KeshavSoft" in req) {
        if ("DataPk" in req.KeshavSoft) {
            LocalDataPK = req.KeshavSoft.DataPk;

            if ("inReportName" in req.params) {
                LocalReportName = req.params.inReportName;

                Repo.DataWithConfigColumnsOnly({
                    inReportName: LocalReportName,
                    inDataPK: LocalDataPK,
                }).then(PromiseData => {
                    res.end(JSON.stringify(PromiseData));
                }).catch();

            } else {
                res.json({ KTF: false, KReason: "Need to send inReportName" });
            };
        } else {
            res.json({ KTF: false, KReason: "DataPk not found in Request.Keshavsoft" });
        };
    } else {
        res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
    };
});

Router.get('/DataWithConfig/:inReportName', (req, res) => {
    let LocalDataPK;
    let LocalReportName;
    
    if ("KeshavSoft" in req) {
        if ("DataPk" in req.KeshavSoft) {
            LocalDataPK = req.KeshavSoft.DataPk;

            if ("inReportName" in req.params) {
                LocalReportName = req.params.inReportName;

                Repo.DataWithConfig({
                    inReportName: LocalReportName,
                    inDataPK: LocalDataPK,
                }).then(PromiseData => {
                    res.end(JSON.stringify(PromiseData));
                }).catch();

            } else {
                res.json({ KTF: false, KReason: "Need to send inReportName" });
            };
        } else {
            res.json({ KTF: false, KReason: "DataPk not found in Request.Keshavsoft" });
        };
    } else {
        res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
    };
});

module.exports = Router;