let Dal = require("../../../../Dal/Api/Reports/PullData/FromVouchersConsider");

exports.AsTable = async ({ inReportName, inDataPK }) => {
  return await Dal.AsTable({ inReportName, inDataPK });
};