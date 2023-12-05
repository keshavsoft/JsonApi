let express = require("express");
let router = express.Router();

let DataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/WithPkTSImage/UsingMulter");
// let DataSupplyCheckImage = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/WithPkTSImage/CheckImage/InJsonDataFolder");

router.post('/', DataSupply.upload.single("image"), (req, res) => {
    // let LocalFromDataSupply = DataSupplyCheckImage.StartFunc({ req });

    res.json(req.FromDataSupply);
});

module.exports = router;