let Dal = require("../../../../../Dal/Api/Reports/PullData/WithFilters/AsTable");

exports.DataWithConfig = async ({ inReportName, inDataPK, inFilterObject }) => {
  return await Dal.DataWithConfig({ inReportName, inDataPK, inFilterObject });
};
