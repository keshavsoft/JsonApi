let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/Api/Data/FromFolder/FirmDetails/ForReport");

let GetFunc = async (req, res, next) => {
  let LocalDataPk = req.KeshavSoft.DataPk;

  let result = await Repos.GetFunc({ inDataPK: LocalDataPk });
  console.log("aaaaaaaaaaaa : ", result);
  res.json(result);
};

module.exports = { GetFunc }