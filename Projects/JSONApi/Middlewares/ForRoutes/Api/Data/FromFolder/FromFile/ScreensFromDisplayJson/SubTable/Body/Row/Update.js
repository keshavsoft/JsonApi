exports.WithPK = (req, res, next) => {
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };

    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                JsonConfig:"",
                ItemConfig:"", 
                inDataToUpdate: "",
                MainRowPK:"",
                InsertKey:"",
                SubTableRowPK:"",
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

    if (("inDataToUpdate" in req.body) === false) {
        res.json({ KTF: false, KReason: "inDataToUpdate not found in body" })
        return;
    };
    if (("MainRowPK" in req.body) === false) {
        res.json({ KTF: false, KReason: "MainRowPK not found in body" })
        return;
    };
    if (("InsertKey" in req.body) === false) {
        res.json({ KTF: false, KReason: "InsertKey not found in body" })
        return;
    };
    if (("SubTableRowPK" in req.body) === false) {
        res.json({ KTF: false, KReason: "SubTableRowPK not found in body" })
        return;
    };

    next();
};
