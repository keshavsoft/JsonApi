let express = require("express");
let router = express();
const multer = require('multer');
var path = require('path');
//let DataSu = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/Images/UsingMulter");
//let DataSu = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/JsonFileAsFolder/ItemNameAsFolder/ImagesFolder/InsertToFolder/UsingMulter");
let DataSu = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/JsonFileAsFolder/ItemNameAsFolder/ImagesFolder/RowPkAsFolder/InsertToRowPkAsFolder/UsingMulter");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "Images");
    },
    filename: function (req, file, cb) {
        console.log("req : ", req.KeshavSoft, file);
        //  let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        //cb(null, Date.now() + ext);
        //  cb(null, Date.now() + path.extname(file.originalname));
        //cb(null, req.body.nspeakers + path.extname(file.originalname));

        // cb(null, req.KeshavSoft + path.extname(file.originalname));
        cb(null, file.originalname);

    }
});

var upload = multer({ storage: storage });

router.post('/', DataSu.upload.single("uploaded_file"), (req, res) => {
    console.log("1111111111111 : ", req.KeshavSoft, req.body);
    res.end("success");
});

module.exports = router;
