let CommonLodashItemScreenColumn = require("../../../../DependantModules/Lodash/Routes/ItemConfig");

let ItemScreenColumn = (req, res, next) => {
  let LocalJsonConfig = ["inFolderName", "inJsonFileName"];
  let LocalItemKeysArray = ["inItemName", "inScreenName", "inColumnName", "inSubTableColumnName"];
  let LocalReportConfig = ["inReportName", "inColumnName", "inPkName", "inColumnsPk", "inJoinTablesSelected", "inJoinTablesColumnsSelected"]
  let LocalUtilityConfig = ["FromName", "ToName"];

  if ("KeshavSoft" in req) {
    req.KeshavSoft.ItemConfig = CommonLodashItemScreenColumn.ItemScreenColumnNoLodash({ inItemKeysArray: LocalItemKeysArray, inRequestQuery: req.query });
    req.KeshavSoft.JsonConfig = CommonLodashItemScreenColumn.ItemScreenColumnNoLodash({ inItemKeysArray: LocalJsonConfig, inRequestQuery: req.query });
    req.KeshavSoft.ReportConfig = CommonLodashItemScreenColumn.ItemScreenColumnNoLodash({ inItemKeysArray: LocalReportConfig, inRequestQuery: req.query });
    req.KeshavSoft.UtilityConfig = CommonLodashItemScreenColumn.ItemScreenColumnNoLodash({ inItemKeysArray: LocalUtilityConfig, inRequestQuery: req.query });

    req.KeshavSoft.ReportConfig.inPkName = parseInt(req.KeshavSoft.ReportConfig.inPkName);
    req.KeshavSoft.ReportConfig.inColumnsPk = parseInt(req.KeshavSoft.ReportConfig.inColumnsPk);
    req.KeshavSoft.ReportConfig.inColumnName = parseInt(req.KeshavSoft.ReportConfig.inColumnName);
    req.KeshavSoft.ReportConfig.inJoinTablesColumnsSelected = parseInt(req.KeshavSoft.ReportConfig.inJoinTablesColumnsSelected);

    req.KeshavSoft.KQueryObject = req.query.inKQueryObject;
  };

  Object.freeze(req.KeshavSoft);
  next();
};

let JsonItemConfig = (req, res, next) => {
 // console.log("llllllll : ", req.query);
  if ("JsonConfig" in req.query) req.KeshavSoft.JsonConfig = JSON.parse(req.query.JsonConfig);
  if ("ItemConfig" in req.query) req.KeshavSoft.ItemConfig = JSON.parse(req.query.ItemConfig);
  req.KeshavSoft.InsertKey = req.query.InsertKey;
  req.KeshavSoft.PK = req.query.inPK;
  req.KeshavSoft.inRowPK = req.query.inRowPK;

  Object.freeze(req.KeshavSoft);
  next();
};

module.exports = { ItemScreenColumn, JsonItemConfig };