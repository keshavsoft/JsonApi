let DataSupply = require("../../../../../../DataSupply/Reports/FromVouchersConsider/PrepareFromVouchersConsider");

let AsTable = async ({ inReportName, inDataPK }) => {
    if (inDataPK > 0) {
        return await DataSupply.ReturnAsTable({ inLedgerName: inReportName, inUserPK: inDataPK })
    };
};

module.exports = { AsTable };