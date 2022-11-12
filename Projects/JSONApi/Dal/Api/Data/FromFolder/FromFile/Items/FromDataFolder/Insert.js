let CommonDataSupply = require("../../../../../../../../../DataSupply/CommonTableFuncs/MainTable/PushFuncs/Save");

exports.PostFunc = async ({ inJsonConfig, inItemConfig, inUserPK, inPostData }) => {

    return await CommonDataSupply.SaveWithOutScreenName({ inJsonConfig, inItemConfig, inUserPK, inPostData });
    //return await LocalReturnObject;
};
