let DataSupply = require("../../../../../../DataSupply/Reports/CheckHtml/ReturnHtml");

let InHtmlName = async ({ inDataPK, inReportName }) => {
  let localReturnData;
  if (inDataPK > 0) {
    localReturnData = DataSupply.InHtmlName({
      inDataPK,
      inReportName,
    });
  };
  console.log("localReturnData : ", localReturnData);
  return localReturnData;
};

module.exports = { InHtmlName };
