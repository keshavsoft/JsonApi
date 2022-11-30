// let CommonUserFuncs = require("../../../../../DataSupply/Fs/Users/PushData");
// let CommonUserAdminFuncs = require("../../../../../DataSupply/Fs/Users/Admin/PushData");

//let CommonToJsonFile = require("../../../../../DataSupply/Fs/LoginFolder/UserDataJson/PushData/ToJsonFile");
let CommonNewUser = require("../../../../../DataSupply/Fs/LoginFolder/UserDataJson/InsertData/NewUser");

let Create = async ({ inUserPK, inUserName, inPassword, inEmail }) => {
    let LocalReturnData;

    if (inUserPK > 0) {
        // LocalReturnData = await CommonUserFuncs.PushDataAysnc({ inUserPK, inUserName, inPassword, inEmail });

        return await LocalReturnData;
    };
};

let Admin = async ({ inUserName, inPassword }) => {
    let LocalReturnData;

    //LocalReturnData = await CommonUserAdminFuncs.PushDataAysnc({ inUserName, inPassword });

    return await LocalReturnData;
};

let Insert = async ({ inUserName, inPassword, inEmail }) => {
    let LocalFromInsert = await CommonNewUser.WithEmail({ inUserName, inPassword, inEmail });
    console.log("LocalFromInsert : ", LocalFromInsert);
    return await LocalFromInsert;
};

let postWithOutPasswordFunc = async ({ inUserName, inEmail }) => {
    let LocalFromInsert = await CommonNewUser.WithUerNameAndEmailOnly({ inUserName, inEmail });
    console.log("LocalFromInsert : ", LocalFromInsert);
    return await LocalFromInsert;
};



module.exports = { Create, Admin, Insert,postWithOutPasswordFunc };