var express = require("express");
var router = express.Router();
let CommonPullHtml = require("./Filters/PullHtml");

router.use("/PullHtml", CommonPullHtml);

module.exports = router;
