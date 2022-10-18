let Dal = require("../../../../../Dal/Api/Reports/PullData/WithOutFilters/AsTable");

exports.WithOutFilters = async ({ inReportName, inDataPK }) => {
  return await Dal.WithOutFilters({ inReportName, inDataPK });
};

exports.DataOnly = async ({ inReportName, inDataPK }) => {
  return await Dal.DataOnly({ inReportName, inDataPK });
};

exports.DataWithConfig = async ({ inReportName, inDataPK }) => {
  return await Dal.DataWithConfig({ inReportName, inDataPK });
};
