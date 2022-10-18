let Dal = require("../../../../../Dal/Api/Reports/Menu/WithOutFilters/AsArray");

exports.WithOutFilters = async ({ inDataPk }) => {
  return await Dal.WithOutFilters({ inDataPk });
};