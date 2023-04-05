let express = require("express");
let router = express();
//let DataSu = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/Images/UsingMulter");
//let DataSu = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/JsonFileAsFolder/ItemNameAsFolder/ImagesFolder/InsertToFolder/UsingMulter");
let DataSu = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/JsonFileAsFolder/ItemNameAsFolder/ImagesFolder/RowPkAsFolder/InsertToRowPkAsFolder/UsingMulter");
let DataSupplyCheckImage = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/JsonFileAsFolder/ItemNameAsFolder/ImagesFolder/RowPkAsFolder/CheckImage/InJsonDataFolder");

router.post('/', DataSu.upload.single("uploaded_file"), (req, res) => {
    let LocalFromDataSupply = DataSupplyCheckImage.StartFunc({ req });

    res.json(LocalFromDataSupply);
    // console.log("1111111111111 : ", LocalFromDataSupply);
    // res.end("success");
});


module.exports = router;
