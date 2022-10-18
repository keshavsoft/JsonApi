var path = require('path');
let DataPath = require("../Kprivate/DataPath.json");
let GlobalDataPath = `../../../${DataPath.Path}`;

const fs = require("fs");

exports.FirmDetailsFromPK = ({ inPK }) => {
    if (inPK > 0) {
        let LocalPath = fs.readFileSync(path.resolve(__dirname, `${GlobalDataPath}/${inPK}/FirmDetails.json`));
        let LocalJsonData = JSON.parse(LocalPath);

        let LocalFirmData = LocalJsonData.Firm;

        return LocalFirmData;
    };
};
