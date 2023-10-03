let Repos = require("../../../../Repository/Api/Data/FromFolder/DataAsArray");

let getFunc = (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    ResponseData = Repos.getFunc({ inDataPk: LocalDataPk });

    res.status(200).json(ResponseData);

};
module.exports = { getFunc };