let express = require("express");
let router = express.Router();
let Middlewares = require("../../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnKeys/Max")
let CommonControllers = require("../../../../../../../../../controllers/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnKeys/Max.controller");
let Repos = require("../../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnKeys/Max");

router.post('/', Middlewares.PostFunc, CommonControllers.PostFunc);

router.post('/Count/:inCount', async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    let LocalFolderName = req.body.FolderName;
    let LocalFileName = req.body.FileNameOnly;
    let LocalItemName = req.body.ItemName;
    let LocalinCount = req.params.inCount;

    let PromiseData = await Repos.paramsFunc({
        inDataPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileNameOnly: LocalFileName,
        inItemName: LocalItemName,
        inCount: LocalinCount
    });

    res.end(JSON.stringify(PromiseData));
});

module.exports = router;