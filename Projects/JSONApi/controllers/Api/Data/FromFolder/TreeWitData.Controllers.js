let Repos = require("../../../../Repository/Api/Data/FromFolder/TreeWitData");

let GetFunc = (req, res) => {
  let LocalDataPk = req.KeshavSoft.DataPk;

  let result = Repos.GetFunc({ inDataPK: LocalDataPk });

  res.json(result);
};

module.exports = { GetFunc }