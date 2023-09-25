let express = require("express");
let router = express.Router();
let Middlewares = require("../../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnKeys/MaxWithFilter")
let CommonControllers = require("../../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnKeys/MaxWithFilter.controller");
let Repos = require("../../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnKeys/MaxWithFilter");

router.post('/', Middlewares.PostFunc, CommonControllers.PostFunc);

router.post('/Count/:inCount', async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.FileNameOnly;
    let LocalItemName = req.body.ItemName;
    let LocalFilterString = req.body.FilterString;
    let LocalinCount = req.params.inCount;

    let PromiseData = await Repos.paramsFunc({
        inDataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName,
        inFilterString: LocalFilterString,
        inCount: LocalinCount
    });

    res.end(JSON.stringify(PromiseData));
});

module.exports = router;