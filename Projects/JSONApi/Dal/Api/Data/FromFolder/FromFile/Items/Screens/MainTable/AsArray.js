let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/FromFolderFileItemName");

exports.PostFunc = ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName }) => {
    let LocalReturnObject = CommonDataSupply.ReturnAsArrayWithPK({
        inDataPK,
        inFolderName, inFileNameOnly, inItemName, inScreenName
    });

    return LocalReturnObject;
};
