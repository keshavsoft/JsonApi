exports.CheckAndSave = (req, res, next) => {
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };

    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                JsonConfig: { inFolderName: "", inJsonFileName: "" },
                ItemConfig: { inItemName: "", inScreenName: "" },
                inDataToSave: ""
                
            },
        });
        return;
    };

    if (("JsonConfig" in req.body) === false) {
        res.json({ KTF: false, KReason: "JsonConfig not found in body" })
        return;
    };

    if (("ItemConfig" in req.body) === false) {
        res.json({ KTF: false, KReason: "ItemConfig not found in body" })
        return;
    };

    if (("inDataToSave" in req.body) === false) {
        res.json({ KTF: false, KReason: "inDataToSave not found in body" })
        return;
    };

    next();
};