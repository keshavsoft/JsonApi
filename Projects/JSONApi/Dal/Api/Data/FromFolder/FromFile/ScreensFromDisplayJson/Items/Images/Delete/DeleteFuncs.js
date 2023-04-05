let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/JsonFileAsFolder/ItemNameAsFolder/ImagesFolder/RowPkAsFolder/DeleteImage/InJsonDataFolder");

exports.DeleteFunc = ({ inFolderName, inFileNameOnly, inItemName, inRowPk, inDataPK }) => {
   let LocalDataToReturn = CommonDataSupply.StartFunc({ inFolderName, inFileNameOnly, inItemName, inRowPk, inDataPK });
   return LocalDataToReturn;
};

