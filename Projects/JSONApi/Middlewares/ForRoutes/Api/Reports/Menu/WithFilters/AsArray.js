let Dal = require("../../../../../Dal/Api/Reports/Menu/WithFilters/AsArray");

exports.WithFilters = async ({ inDataPK }) => {
  return await Dal.WithFilters({ inDataPK });
};
