let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/AsTree");

router.post('/', function (req, res, next) {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.inFolderName;
    let LocalFileName = req.body.inJsonFileName;

    Repos.WithRowCount({ inDataPk: LocalDataPk, inFolderName: LocalFolderName, inFileNameWithExtension: LocalFileName }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});

module.exports = router;