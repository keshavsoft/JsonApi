let DataSupply = require("../../../../../../../DataSupply/Reports/Ledger/Show");
let DataSupplySendDataOnly = require("../../../../../../../DataSupply/Reports/Ledger/SendDataOnly");
let DataSupplySendDataWithConfig = require("../../../../../../../DataSupply/Reports/Ledger/SendDataWithConfig");

let WithOutFilters = async ({ inReportName, inDataPK }) => {
    if (inDataPK > 0) {
        return await DataSupply.ShowDataWithOutFilters({ inLedgerName: inReportName, inUserPK: inDataPK })
    };
};

let DataOnly = async ({ inReportName, inDataPK }) => {
    if (inDataPK > 0) {
        return await DataSupplySendDataOnly.ShowDataWithOutFilters({ inLedgerName: inReportName, inUserPK: inDataPK })
    };
};

let DataWithConfig = async ({ inReportName, inDataPK }) => {
    if (inDataPK > 0) {
        return await DataSupplySendDataWithConfig.ShowDataWithOutFilters({ inLedgerName: inReportName, inUserPK: inDataPK })
    };
};

let DataWithConfigColumnsOnly = async ({ inReportName, inDataPK }) => {
    if (inDataPK > 0) {
        return await DataSupplySendDataWithConfig.DataWithConfigColumnsOnly({ inLedgerName: inReportName, inUserPK: inDataPK })
    };
};

module.exports = { WithOutFilters, DataOnly, DataWithConfig, DataWithConfigColumnsOnly };