exports.InsertFunc = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                FolderName: "",
                FileNameOnly: "",
                ItemName: "",
                ScreenName: "",
                insertkey: "",
            },
            originalUrl: req.originalUrl
        });
    } else {
        if (("KeshavSoft" in req) === false) {
            res.json({ KTF: false, KReason: "KeshavSoft not found in Request" })
        } else {
            if (("DataPk" in req.KeshavSoft) === false) {
                res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" })
            } else {
                if (("FolderName" in req.body) === false) {
                    res.json({ KTF: false, KReason: "FolderName not found in req.body" })
                } else {
                    if (("FileNameOnly" in req.body) === false) {
                        res.json({ KTF: false, KReason: "FileNameOnly not found in req.body" });
                    } else {
                        if (("ItemName" in req.body) === false) {
                            res.json({ KTF: false, KReason: "ItemName not found in body" })
                        } else {
                            if (("ScreenName" in req.body) === false) {
                                res.json({ KTF: false, KReason: "ScreenName not found in body" })
                            } else {
                                next();
                            };
                        };
                    };
                };
            };
        };
    };
}; 