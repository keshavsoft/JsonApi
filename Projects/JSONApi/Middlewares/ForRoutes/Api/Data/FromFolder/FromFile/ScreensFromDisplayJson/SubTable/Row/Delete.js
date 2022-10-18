exports.FromParams = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                FolderName: "",
                FileName: "",
                ItemName: "",
                ScreenName: "",
                RowPK: 0,
                InsertKey: 0,
                MainRowPK: 0
            }
        });
    } else {
        if (("KeshavSoft" in req) === false) {
            res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });

        } if (("DataPk" in req.KeshavSoft) === false) {
            res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" });

        } if (("FolderName" in req.body) === false) {
            res.json({ KTF: false, KReason: "FolderName not found in body" })

        } if (("FileName" in req.body) === false) {
            res.json({ KTF: false, KReason: "FileName not found in body" })

        } if (("ItemName" in req.body) === false) {
            res.json({ KTF: false, KReason: "ItemName not found in body" })

        } if (("ScreenName" in req.body) === false) {
            res.json({ KTF: false, KReason: "ScreenName not found in body" })

        } if (("RowPK" in req.body) === false) {
            res.json({ KTF: false, KReason: "RowPK not found in body" })

        } else {
            next();
        };
    };
}; 