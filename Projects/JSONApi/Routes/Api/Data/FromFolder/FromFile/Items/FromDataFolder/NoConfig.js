let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/NoConfig");

router.get('/:FolderName/:FileName/:ItemName', function (req, res, next) {
  //  console.log("------ : ", req.KeshavSoft);
  //let LocalUserName = req.KeshavSoft.kUserName;
  let LocalDataPk = req.KeshavSoft.DataPk;
  let LocalFolderName = req.params.FolderName;
  let LocalFileName = req.params.FileName;
  let LocalItemName = req.params.ItemName;

//  console.log("-----ppppp : ", LocalFileName);
  Repos.GetFunc({
    inDataPk: LocalDataPk,
    inFolderName: LocalFolderName,
    inFileNameWithExtension: LocalFileName,
    inItemName: LocalItemName
  }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  });
});

module.exports = router;