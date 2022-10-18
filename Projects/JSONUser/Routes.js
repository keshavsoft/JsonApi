var express = require('express');
var router = express.Router();
let SubRouteAdmin = require('./Routes/Admin');
let CommonValidate = require('./Routes/Validate');

//let UserCheck = require("./Common/Users/Show");
// let CommonjwtFunc = require("../../common/Jwt/Bs5");

//let CommonjwtAdminData = require("../../common/Jwt/AdminData");
let CommonMiddlewareJwtVerify = require("../../common/Jwt/ForAdminDataJson");

// router.get('/LoginCheck/:inUserName/:inPassWord', (req, res, next) => {
//     UserCheck.LoginCheck({
//         inUserName: req.params.inUserName,
//         inPassWord: req.params.inPassWord,
//         inoriginalUrl: req.originalUrl
//     }).then(PromiseData => {
//         //console.log("PromiseData : ", PromiseData);
//         if (PromiseData.kPK > 0) {
//             CommonjwtFunc.CreateToken({ inUserName: req.params.inUserName, inDataPk: PromiseData.kPK }).then((PromiseDataFromJwt) => {
//                 res.cookie('KToken', PromiseDataFromJwt, { maxAge: 900000, httpOnly: false });

//                 PromiseData.KTF = true;
//                 if ("Config" in PromiseData) {
//                     PromiseData.RedirectPage = PromiseData.Config.Ui.Login.RedirectPage;
//                 };

//                 res.json(PromiseData);
//             });
//         } else {
//             res.json({ 'KTF': false });
//         };
//     })
//     //  debug(LocalReturnObject);
// });

// router.get('/LoginCheckWithEmail/:inUserName/:inPassWord', (req, res, next) => {
//     UserCheck.LoginCheckWithEmail({
//         inUserName: req.params.inUserName,
//         inPassWord: req.params.inPassWord
//     }).then(PromiseData => {
// //        console.log("PromiseData : ", PromiseData);
//         if (PromiseData.KTF) {
//             CommonjwtFunc.CreateToken({ inUserName: req.params.inUserName, inDataPk: PromiseData.kPK }).then((PromiseDataFromJwt) => {
//                 res.cookie('KToken', PromiseDataFromJwt, { maxAge: 900000, httpOnly: false });

//                 res.json(PromiseData);
//             });
//         }else{
//             res.json(PromiseData);
//         };
//     })
// });

// router.get('/LoginCheckReturnToken/:inUserName/:inPassWord', (req, res, next) => {
//     UserCheck.LoginCheck({
//         inUserName: req.params.inUserName,
//         inPassWord: req.params.inPassWord,
//         inoriginalUrl: req.originalUrl
//     }).then(PromiseData => {
//         if (PromiseData.kPK > 0) {
//             CommonjwtFunc.CreateToken({ inUserName: req.params.inUserName, inDataPk: PromiseData.kPK }).then((PromiseDataFromJwt) => {
//                 PromiseData.KTF = true;
//                 PromiseData.KToken = PromiseDataFromJwt;

//                 res.json(PromiseData);
//             });
//         } else {
//             res.json({ 'KTF': false });
//         };
//     })
//     //  debug(LocalReturnObject);
// });

// router.get('/LoginCheckReturnTokenOnly/:inUserName/:inPassWord', (req, res, next) => {
//     let LocalUserName = req.params.inUserName;

//     console.log("LocalUserName : ", LocalUserName);

//     UserCheck.LoginCheck({
//         inUserName: req.params.inUserName,
//         inPassWord: req.params.inPassWord,
//         inoriginalUrl: req.originalUrl
//     }).then(PromiseData => {
//         if (PromiseData.kPK > 0) {
//             CommonjwtFunc.CreateToken({ inUserName: req.params.inUserName, inDataPk: PromiseData.kPK }).then((PromiseDataFromJwt) => {
//                 res.send(PromiseDataFromJwt);
//             });
//         } else {
//             res.send();
//         };
//     })
//     //  debug(LocalReturnObject);
// });

router.use('/Users', CommonMiddlewareJwtVerify.ForKeshavSoftRedirectToLogin, require('./Routes/Users'));
router.use('/Admin', SubRouteAdmin);
router.use('/Validate', CommonValidate);

module.exports = router;