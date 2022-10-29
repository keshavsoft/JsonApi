let express = require("express");
let router = express.Router();

let CommonOriginal = require("./PullDataFuncs/Original")

router.use("Original", CommonOriginal)

module.exports = router;