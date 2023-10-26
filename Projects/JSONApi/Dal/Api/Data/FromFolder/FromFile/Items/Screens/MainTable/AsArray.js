let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/ConsiderDisplayJson/PullData/AsArray");

exports.PostFunc = ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName }) => {
    let LocalReturnObject = CommonDataSupply.StartFunc({
        inDataPK,
        inFolderName, inFileNameOnly, inItemName, inScreenName
    });

    return LocalReturnObject;
};
