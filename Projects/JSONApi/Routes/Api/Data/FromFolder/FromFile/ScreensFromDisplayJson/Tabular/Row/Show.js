let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Row/Show");

let CommonMiddlewares = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Row/Show");

router.get('/FromParams/:inFolderName/:inFileName/:inScreenName/:inItemName/:inJsonPk', (req, res) => {
  let LocalDataPK;
  let LocalReportName;
  let LocalFolderName;
  let LocalFileName;
  let LocalItemName;
  let LocalScreenName;
  let LocalJsonPk;

  if ("KeshavSoft" in req) {

    if ("DataPk" in req.KeshavSoft) {
      LocalDataPK = req.KeshavSoft.DataPk;

      if ("inFolderName" in req.params) {
        LocalFolderName = req.params.inFolderName;

        if ("inFileName") {
          LocalFileName = req.params.inFileName;

          if ("inItemName") {
            LocalItemName = req.params.inItemName;

            if ("inScreenName") {
              LocalScreenName = req.params.inScreenName;

              if ("inJsonPk") {
                LocalJsonPk = req.params.inJsonPk;

                let LocalJsonConfig = {
                  inFolderName: LocalFolderName,
                  inJsonFileName: LocalFileName
                };

                let LocalItemConfig = {
                  inItemName: LocalItemName,
                  inScreenName: LocalScreenName
                };


                Repos.FromParams({
                  inDataPK: LocalDataPK,
                  inJsonConfig: LocalJsonConfig,
                  inItemConfig: LocalItemConfig,
                  inJsonPk: LocalJsonPk

                }).then(PromiseData => {
                  res.end(JSON.stringify(PromiseData));
                }).catch();

              } else {
                res.json({ KTF: false, KReason: "inJsonPk not found in Request.inScreenName" });
              };
            } else {
              res.json({ KTF: false, KReason: "inScreenName not found in Request.inItemName" });
            };
          } else {
            res.json({ KTF: false, KReason: "inItemName not found in Request.inFileName" });
          };
        } else {
          res.json({ KTF: false, KReason: "inFileName not found in Request.inFolderName" });
        };
      } else {
        res.json({ KTF: false, KReason: "inFolderName not found in Request.Params" });
      };
    } else {
      res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" });
    };
  } else {
    res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
  };
});

router.post("/FromParams", CommonMiddlewares.FromParams, (req, res) => {
  let LocalDataPK = req.KeshavSoft.DataPk;
  let LocalFolderName = req.body.FolderName;
  let LocalFileName = req.body.FileNameWithExtension;
  let LocalItemName = req.body.ItemName;
  let LocalScreenName = req.body.Screenname;
  let LocalJsonPk = req.body.JsonPk;
  console.log("sssssss : ", req.body);
  let LocalJsonConfig = {
    inFolderName: LocalFolderName,
    inJsonFileName: LocalFileName
  };

  let LocalItemConfig = {
    inItemName: LocalItemName,
    inScreenName: LocalScreenName
  };

  Repos.FromParams({
    inDataPK: LocalDataPK,
    inJsonConfig: LocalJsonConfig,
    inItemConfig: LocalItemConfig,
    inJsonPk: LocalJsonPk

  }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  }).catch();
});

router.post("/ForInsert", CommonMiddlewares.FromParams, (req, res) => {
  let LocalDataPK = req.KeshavSoft.DataPk;
  let LocalFolderName = req.body.FolderName;
  let LocalFileName = req.body.FileNameWithExtension;
  let LocalItemName = req.body.ItemName;
  let LocalScreenName = req.body.Screenname;
  let LocalJsonPk = req.body.JsonPk;
  console.log("ForInsert ------------------: ", req.body);
  let LocalJsonConfig = {
    inFolderName: LocalFolderName,
    inJsonFileName: LocalFileName
  };

  let LocalItemConfig = {
    inItemName: LocalItemName,
    inScreenName: LocalScreenName
  };

  Repos.ForInsert({
    inDataPK: LocalDataPK,
    inJsonConfig: LocalJsonConfig,
    inItemConfig: LocalItemConfig,
    inJsonPk: LocalJsonPk

  }).then(PromiseData => {
    res.end(JSON.stringify(PromiseData));
  }).catch();
});


module.exports = router;