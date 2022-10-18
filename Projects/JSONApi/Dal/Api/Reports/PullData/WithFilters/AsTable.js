let DataSupplySendDataWithConfig = require("../../../../../../../DataSupply/Reports/Ledger/WithFilters");

let DataWithConfig = async ({ inReportName, inDataPK, inFilterObject }) => {
    if (inDataPK > 0) {
        return await DataSupplySendDataWithConfig.StartFunc({
            inLedgerName: inReportName,
            inDataPK, inFilterObject
        })
    };
};

module.exports = { DataWithConfig };