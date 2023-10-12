let Dal = require("../../../Dal/Api/FromConfig/TreeWitData");

exports.getFunc = ({ inDataPk }) => {
    return Dal.getFunc({ inDataPk });
};