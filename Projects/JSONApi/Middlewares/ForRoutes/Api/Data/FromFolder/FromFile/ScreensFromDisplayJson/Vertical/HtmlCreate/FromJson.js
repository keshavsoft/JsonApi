exports.FromJson = (req, res, next) => {
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };

    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post request body should contain : ",
            body: {
                inFolderName: "", 
                inFileName: "",
                inItemName: "", 
                inScreenName: ""
            },
        });
        return;
    };

    if (("inFolderName" in req.body) === false) {
        res.json({ KTF: false, KReason: "inFolderName not found in body" })
        return;
    };

    if (("inFileName" in req.body) === false) {
        res.json({ KTF: false, KReason: "inFileName not found in body" })
        return;
    };

    if (("inItemName" in req.body) === false) {
        res.json({ KTF: false, KReason: "inItemName not found in body" })
        return;
    };

    if (("inScreenName" in req.body) === false) {
        res.json({ KTF: false, KReason: "inScreenName not found in body" })
        return;
    };
    next();
};