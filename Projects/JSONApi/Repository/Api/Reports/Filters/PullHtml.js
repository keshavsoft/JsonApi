let Dal = require("../../../../Dal/Api/Reports/Filters/PullHtml");

exports.InHtmlName = async ({ inDataPK, inReportName }) => {
  return await Dal.InHtmlName({ inDataPK, inReportName });
};
