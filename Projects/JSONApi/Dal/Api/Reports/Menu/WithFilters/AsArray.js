let DataSupply = require("../../../../../../../DataSupply/Fs/Reports/Menu/AsArray/WithFilter");

let WithFilters = async ({ inDataPK }) => {
  if (inDataPK > 0) {
    return await DataSupply.startfunc({ inDataPK });
  }
};

module.exports = { WithFilters };
