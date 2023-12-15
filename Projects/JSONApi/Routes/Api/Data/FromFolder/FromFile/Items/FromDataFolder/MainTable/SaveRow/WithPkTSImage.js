let express = require("express");
let router = express.Router();

let DataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/WithPkTSImage/UsingMulter");

router.post('/', DataSupply.upload.single("image"), (req, res) => {
    res.json(req.FromDataSupply);
});

module.exports = router;