let express = require("express");
let router = express();
// let DataSupplyCheckImage = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/JsonFileAsFolder/ItemNameAsFolder/ImagesFolder/RowPkAsFolder/CheckImage/InJsonDataFolder");
let CommonDataSupply = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Images/Delete/DeleteFunc");
let fs = require("fs");
let path = require("path");

router.delete('/', (req, res) => {
    let LocalinFolderName = req.body.inFolderName;
    let LocalinFileNameOnly = req.body.inFileNameOnly;
    let LocalinItemName = req.body.inItemName;
    let LocalinRowPk = req.body.inRowPk;
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromDataSupply = CommonDataSupply.DeleteFunc({
        inFolderName: LocalinFolderName,
        inFileNameOnly: LocalinFileNameOnly,
        inItemName: LocalinItemName,
        inRowPk: LocalinRowPk,
        inDataPK: LocalDataPk
    });

    console.log("dddddddddddd", LocalFromDataSupply);
    if (LocalFromDataSupply.KTF) {
        res.json({ KTF: true, ImageDeleted: true });
    };

    // if (LocalFromDataSupply.KTF) {
    //     fs.readdir(
    //         path.resolve(__dirname, LocalFromDataSupply.RowPkAsFolderPath),
    //         (err, files) => {
    //             if (err) throw err;
    //             console.log(files[0]);

    //             res.sendFile(`${LocalFromDataSupply.RowPkAsFolderPath}/${files[0]}`);
    //         }
    //     );
    // };

});

module.exports = router;
