let Repos = require("../../../../Repository/Api/Data/FromFolder/TreeWitData");

let GetFunc = async (req, res) => {
  let LocalDataPk = req.KeshavSoft.DataPk;

  let result = await Repos.GetFunc({ inDataPK: LocalDataPk });
  res.sendStatus(200).json(result);
};

module.exports = { GetFunc }