let CommonDataSupply = require("../../../../../DataSupply/Reports/PrintOut/PullData/HtmlFiles");

exports.ShowData = async ({ inDataPK }) => {
    let LocalDataPK = inDataPK;
    let LocalReturnObject;
    console.log("ppppppppppp : ", inDataPK);
    if (LocalDataPK > 0) {
        LocalReturnObject = await CommonDataSupply.StartFunc({
            inDataPK: LocalDataPK
        });
    };

    return await LocalReturnObject;
};

exports.Bulk = (inJsonConfig, inItemConfig, inUserName, callback) => {
    let LocalDataToReturn;
    // = CommonData.BulkPullData({ inJsonConfig, inItemConfig, inDataToPreview, inUserName });

    callback(LocalDataToReturn, null);
};

