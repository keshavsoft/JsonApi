let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Insert/Bulk/WithCors");

router.post('/ToFolderAndFile', function (req, res, next) {
    console.log("-ToFolderAndFile----- : ", req.body);
    //let LocalUserName = req.KeshavSoft.kUserName;
    // let LocalDataPk = req.KeshavSoft.DataPk;
    // let LocalFolderName = req.KeshavSoft.JsonConfig.inFolderName;
 

    // console.log("-----ppppp : ", req.KeshavSoft);
    Repos.ToFolderAndFile({ inDataPk: LocalDataPk, inFolderName: LocalFolderName }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });

});

module.exports = router;