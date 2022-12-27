let Repos = require("../../../../../../../../Repository/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/Insert");

let PostFunc = async (req, res) => {
    let LocalDataPK = req.KeshavSoft.DataPk;
    let LocalScreenName = req.body.inScreenName;

    //inFolderName, inFileNameOnly, inItemName, inDataPK, inDataToInsert

    // Repos.PostFunc({
    //     inJsonConfig: req.body.inJsonConfig,
    //     inItemConfig: req.body.inItemConfig,
    //     inUserPK: LocalDataPK,
    //     inPostData: LocalInPostData
    // }).then(PromiseData => {
    //     res.json(PromiseData);
    // });
  //  console.log("inScreenName : ", req.body);
    let LocalPromiseData = await Repos.PostFunc({
        inFolderName: req.body.inFolderName,
        inFileNameOnly: req.body.inFileNameOnly,
        inItemName: req.body.inItemName,
        inScreenName: LocalScreenName,
        inDataPK: LocalDataPK,
        inDataToInsert: req.body.inPostData
    });

    //console.log("LocalPromiseData----------- : ", LocalPromiseData);

    res.json(LocalPromiseData);
    // .then(PromiseData => {

    // });

    //res.json({});
};

module.exports = {
    PostFunc
};

