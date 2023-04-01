let express = require("express");
let router = express();

router.post('/', (req, res) => {
    console.log(req.file, req.body);
    res.end("success");
});

module.exports = router;
