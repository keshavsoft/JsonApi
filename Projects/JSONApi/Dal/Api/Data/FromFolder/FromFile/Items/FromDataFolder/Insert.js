let CommonDataSupply = require("../../../../../../../../../DataSupply/CommonTableFuncs/MainTable/PushFuncs/Save");

exports.PostFunc = async ({ inJsonConfig, inItemConfig, inUserPK, inPostData }) => {
    let LocalReturnObject = {
        KTF: true,
        DataFromServer: ""
    };

    LocalReturnObject.DataFromServer = await CommonDataSupply.SaveWithOutScreenName({ inJsonConfig, inItemConfig, inUserPK, inPostData });
    return await LocalReturnObject;
};
