let CommonDataSupplyKeyPress = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PullData/ForTable/Footer/KeyPress");

let EnterToServer = async ({ inJsonConfig, inItemConfig, inPK, inInsertKey, inDataPK, inPostData }) => {
    let LocalDataPK = inDataPK;
    
    if (LocalDataPK > 0) {
        let LocalFromEnterToServer = await CommonDataSupplyKeyPress.EnterToServer({
            inJsonConfig,
            inItemConfig, inPK, inInsertKey,
            inUserPK: LocalDataPK,
            inPostData
        });

        return await LocalFromEnterToServer;
    };
};

module.exports = { EnterToServer };
