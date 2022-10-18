// let CommonUserFuncs = require("../../../../../DataSupply/Fs/Users/PushData");
// let CommonUserAdminFuncs = require("../../../../../DataSupply/Fs/Users/Admin/PushData");

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
    let LocalReturnData 
    
    //= await CommonUserAdminFuncs.WithEmail({ inUserName, inPassword, inEmail });
    
    return await LocalReturnData;
};

module.exports = { Create, Admin, Insert };