let express = require("express");
let Router = express();
let repo = require("../../../../Repository/Api/Reports/Filters/PullHtml");

Router.get("/:inHtmlName", (req, res) => {
  let LocalUserPK = req.KeshavSoft.DataPk;
  let LocalParams = req.params.inHtmlName;
  console.log("LocalParams:", LocalParams, LocalUserPK);

  repo.InHtmlName({
    inDataPK: LocalUserPK,
    inReportName: LocalParams,
  }).then(PromiseData => {
    res.setHeader("Content-Type", "text/html");
    res.end(PromiseData);
  });
});

module.exports = Router;
