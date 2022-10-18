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
                RowPK: 0
            },
            originalUrl: req.originalUrl
        });
    } else {
        if (("KeshavSoft" in req) === false) {
            res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });

        } else {
            if (("DataPk" in req.KeshavSoft) === false) {
                res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" });

            } else {
                if (("FolderName" in req.body) === false) {
                    res.json({ KTF: false, KReason: "FolderName not found in body" })

                } else {
                    if (("FileName" in req.body) === false) {
                        res.json({ KTF: false, KReason: "FileName not found in body" })

                    } else {
                        if (("ItemName" in req.body) === false) {
                            res.json({ KTF: false, KReason: "ItemName not found in body" })

                        } else {
                            if (("ScreenName" in req.body) === false) {
                                res.json({ KTF: false, KReason: "ScreenName not found in body" })

                            } else {
                                if (("RowPK" in req.body) === false) {
                                    res.json({ KTF: false, KReason: "RowPK not found in body" })

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
}; 