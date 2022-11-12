let Repos = require("../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/Insert");

let PostFunc = async (req, res) => {
    console.log("ssssssssss:", req.body);
    let LocalDataPK = req.KeshavSoft.DataPk;
    let LocalInPostData = req.body.inPostData;
    ``
    Repos.PostFunc({
        inJsonConfig: req.body.inJsonConfig,
        inItemConfig: req.body.inItemConfig,
        inUserPK: LocalDataPK,
        inPostData: LocalInPostData
    }).then(PromiseData => {
        res.json(PromiseData);
    });
};

module.exports = {
    PostFunc
};

