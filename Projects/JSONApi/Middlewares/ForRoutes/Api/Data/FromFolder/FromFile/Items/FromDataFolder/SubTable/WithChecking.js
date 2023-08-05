exports.InsertFunc = (req, res, next) => {
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };

    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                FolderName:"",
                FileNameOnly:"", 
                ItemName: "",
                ScreenName: "",
                JsonPk:"",
                SubTableKey: "",
                DataToInsert: ""
            },
        });
        return;
    };

    if (("FolderName" in req.body) === false) {
        res.json({ KTF: false, KReason: "FolderName not found in body" })
        return;
    };

    if (("FileNameOnly" in req.body) === false) {
        res.json({ KTF: false, KReason: "FileNameOnly not found in body" })
        return;
    };

    if (("ItemName" in req.body) === false) {
        res.json({ KTF: false, KReason: "ItemName not found in body" })
        return;
    };
    if (("ScreenName" in req.body) === false) {
        res.json({ KTF: false, KReason: "ScreenName not found in body" })
        return;
    };
    if (("JsonPk" in req.body) === false) {
        res.json({ KTF: false, KReason: "JsonPk not found in body" })
        return;
    };
    if (("SubTableKey" in req.body) === false) {
        res.json({ KTF: false, KReason: "SubTableKey not found in body" })
        return;
    };
    if (("DataToInsert" in req.body) === false) {
        res.json({ KTF: false, KReason: "DataToInsert not found in body" })
        return;
    };
    next();
};
