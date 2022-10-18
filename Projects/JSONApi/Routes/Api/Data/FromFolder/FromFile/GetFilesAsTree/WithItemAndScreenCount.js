let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../Repository/Api/Data/FromFolder/FromFile/GetFilesAsTree/WithItemAndScreenCount");

router.post('/', function (req, res, next) {
  let LocalDataPK;
  let LocalFolderName;
  
  if ("KeshavSoft" in req) {
    if ("DataPk" in req.KeshavSoft) {
      LocalDataPK = req.KeshavSoft.DataPk;

      if ("inFolderName" in req.body) {
        LocalFolderName = req.body.inFolderName;

        Repos.AsArrayOfObjects({ inDataPK: LocalDataPK, inFolderName: LocalFolderName }).then(PromiseData => {
          res.end(JSON.stringify(PromiseData));
        });

      } else {
        res.json({ KTF: false, KReason: "Need to send inFolderName" });
      };
    } else {
      res.json({ KTF: false, KReason: "DataPk not found in Request.KeshavSoft" });
    };
  } else {
    res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
  };

});

module.exports = router;