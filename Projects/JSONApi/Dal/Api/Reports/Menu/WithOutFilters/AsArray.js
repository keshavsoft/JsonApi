let DataSupply = require("../../../../../../../DataSupply/Fs/Reports/Menu/AsArray/WithOutFilters");

let WithOutFilters = async ({ inDataPk }) => {
    if (inDataPk > 0) {
        return await DataSupply.startfunc({ inDataPk })
    };
};

module.exports = { WithOutFilters };

