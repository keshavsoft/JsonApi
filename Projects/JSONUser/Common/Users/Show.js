let _ = require("lodash");

const path = require('path');
let CommonDataPath = require("../../Kprivate/DataPath.json");
let GlobalCommonDataPath = `../../../../${CommonDataPath.Path}`;

let Commongethttp = require('../../HttpFuns/gethttp')

//let CommonForFirmDetails = require("../FirmDetails");
let CommonForFirmDetails = require("../../../../DataSupply/Fs/Admin/FirmDetails");

const fs = require("fs");

let LocalLoginCheckFunc = ({ inUserName, inPassWord }) => {
    let LocalRetPK = 0;
    let LocalReturnObject = { kPK: 0 };
    let LocalReturnFromFirmDetailsFromPK;

    let LocalPath = fs.readFileSync(path.resolve(__dirname, `${GlobalCommonDataPath}/Login/UserData.json`));

    let LocalUserData = JSON.parse(LocalPath);

    Object.entries(LocalUserData.data).forEach(
        ([key, value]) => {
            //            console.log("LocalLoginCheckFunc=-------------", value.UserName === inUserName && value.PassWord === inPassWord);

            if (value.UserName === inUserName && value.PassWord === inPassWord) {
                LocalRetPK = key;
            };
        }
    );
    //console.log("LocalLoginCheckFunc=-------------", LocalRetPK, inUserName, inPassWord, LocalUserData.data);

    if (LocalRetPK === undefined || LocalRetPK === 0) {
        LocalRetPK = LocalUserListCheckFunc({ inUserData: LocalUserData.data, inUserName, inPassWord });

        if (LocalRetPK !== undefined) {
            LocalReturnObject = CommonForFirmDetails.FirmDetailsFromPK({ inPK: LocalRetPK });
            LocalReturnObject.kPK = LocalRetPK;
        };
    } else {
        LocalReturnObject.kPK = LocalRetPK;
        LocalReturnFromFirmDetailsFromPK = CommonForFirmDetails.FirmDetailsFromPK({ inPK: LocalRetPK });
        if (LocalReturnFromFirmDetailsFromPK.KTF) {
            LocalReturnObject = LocalReturnFromFirmDetailsFromPK.Firm;
            LocalReturnObject.kPK = LocalRetPK;
        };
    };
    return LocalReturnObject;
};

let LocalLoginCheckWithEmail = ({ inUserName, inPassWord }) => {
    let LocalRetPK = 0;
    let LocalReturnObject = { kPK: 0, KTF: false, KReason: "" };
    let LocalReturnFromFirmDetailsFromPK;
    let LocalUserDataNeeded;

    let LocalPath = fs.readFileSync(path.resolve(__dirname, `${GlobalCommonDataPath}/Login/UserData.json`));

    let LocalUserData = JSON.parse(LocalPath);

    Object.entries(LocalUserData.data).forEach(
        ([key, value]) => {
            if (value.UserName === inUserName && value.PassWord === inPassWord) {
                LocalRetPK = key;
            };
        }
    );

    if (LocalRetPK > 0) {
        LocalUserDataNeeded = LocalUserData.data[LocalRetPK];
        //console.log("LocalUserDataNeeded : ", LocalUserDataNeeded);
        //LocalReturnObject.SentEmailForVerification = LocalUserDataNeeded.SentEmailForVerification;
        // LocalReturnObject.Email = LocalUserDataNeeded.Email;

        if ("SetupDone" in LocalUserDataNeeded) {
            if (LocalUserDataNeeded.SetupDone.KTF) {
                LocalReturnObject.kPK = LocalRetPK;
                LocalReturnFromFirmDetailsFromPK = CommonForFirmDetails.FirmDetailsFromPK({ inPK: LocalRetPK });

                if (LocalReturnFromFirmDetailsFromPK.KTF) {
                    LocalReturnObject = LocalReturnFromFirmDetailsFromPK.Firm;
                    LocalReturnObject.kPK = LocalRetPK;
                    LocalReturnObject.KTF = true;
                };
            } else {
                LocalReturnObject.KReason = "Setup not done";
            };
        } else {
            LocalReturnObject.KReason = "Setup not done";
            LocalReturnObject.SentEmailForVerification = { ...LocalUserDataNeeded.Sent };
        };
    };

    return LocalReturnObject;
};

let LocalUserListCheckFunc = ({ inUserData, inUserName, inPassWord }) => {
    let LocalRetPK = 0;
    let LocalUserList;
    let LocalUserFindKey;
    let LocalFindObject = { 'UserName': inUserName, 'PassWord': inPassWord };

    LocalRetPK = _.findKey(inUserData, (LoopItemAdminUser) => {
        LocalUserList = LoopItemAdminUser.UserList;
        LocalUserFindKey = _.findKey(LocalUserList, (LoopItemUser) => {
            return JSON.stringify(LoopItemUser) === JSON.stringify(LocalFindObject);
        });

        if (LocalUserFindKey === undefined) {
            return false;
        } else {
            return true;
        };
    });

    return LocalRetPK;
};

exports.LoginCheck = ({ inUserName, inPassWord, inoriginalUrl }) => {
    return new Promise((resolve, reject) => {

        let LocalReturnObject = {};

        switch (CommonDataPath.DalPath.Type) {
            case "Api":
                Commongethttp.WithOutCookie({ inoriginalUrl }).then(resolve).catch(reject);

                break;

            default:
                LocalReturnObject = LocalLoginCheckFunc({ inUserName, inPassWord });

                resolve(LocalReturnObject);
                break;
        };
    })
};

exports.LoginCheckWithEmail = ({ inUserName, inPassWord }) => {
    return new Promise((resolve, reject) => {
        let LocalReturnObject = {};

        LocalReturnObject = LocalLoginCheckWithEmail({ inUserName, inPassWord });

        resolve(LocalReturnObject);
    })
};