let express = require("express");
let router = express();
let fs = require("fs");
let path = require("path");

let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/JsonFileAsFolder/ItemNameAsFolder/ImagesFolder/RowPkAsFolder/CheckRowPkAsFolder");
let CommonMiddlewares = require("../../../../../../../../Middlewares/ForRoutes/Api/Data/FromFolder/FromFile/Items/FromDataFolder/RowDatas/WithImage");

router.post('/', CommonMiddlewares.PostFunc, (req, res) => {
    let LocalinFolderName = req.body.inFolderName;
    let LocalinFileNameOnly = req.body.inFileNameOnly;
    let LocalinItemName = req.body.inItemName;
    let LocalinRowPk = req.body.inRowPk;
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromDataSupply = CommonDataSupply.ForExistence({
        inFolderName: LocalinFolderName,
        inFileNameOnly: LocalinFileNameOnly,
        inItemName: LocalinItemName,
        inRowPk: LocalinRowPk,
        inDataPK: LocalDataPk
    });

    if (LocalFromDataSupply.KTF) {
        fs.readdir(
            path.resolve(__dirname, LocalFromDataSupply.RowPkAsFolderPath),
            (err, files) => {
                if (err) throw err;
                console.log(files[0]);

                res.sendFile(`${LocalFromDataSupply.RowPkAsFolderPath}/${files[0]}`);
            }
        );
    };
});

module.exports = router;
