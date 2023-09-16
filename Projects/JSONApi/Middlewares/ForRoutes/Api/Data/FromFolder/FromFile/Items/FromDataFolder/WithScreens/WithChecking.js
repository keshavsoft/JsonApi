exports.CreateNewFunc = (req, res, next) => {
    console.log("req.body", req.body);
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                FolderName: {},
                FileNameOnly: {},
                ItemName: {},
                insertkey: "",
            },
            originalUrl: req.originalUrl
        });
    } else {
        if (("KeshavSoft" in req) === false) {
            ''
            res.json({ KTF: false, KReason: "KeshavSoft not found in Request" })
        } else {
            if (("DataPk" in req.KeshavSoft) === false) {
                res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" })

            } else {
                if (("FolderName" in req.body) === false) {
                    res.json({ KTF: false, KReason: "FolderName not found in body" })
                } else {
                    if (("FileNameOnly" in req.body) === false) {

                        res.json({ KTF: false, KReason: "FileNameOnly not found in body" });
                        res.end();
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
exports.InsertWithTimeStamp = (req, res, next) => {
    console.log("req.body", req.body);
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                FolderName: {},
                FileNameOnly: {},
                ItemName: {},
                ScreenName: {},
                inPostData: {},

            },
            originalUrl: req.originalUrl
        });
    } else {
        if (("KeshavSoft" in req) === false) {
            ''
            res.json({ KTF: false, KReason: "KeshavSoft not found in Request" })
        } else {
            if (("DataPk" in req.KeshavSoft) === false) {
                res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" })

            } else {
                if (("FolderName" in req.body) === false) {
                    res.json({ KTF: false, KReason: "FolderName not found in body" })
                } else {
                    if (("FileNameOnly" in req.body) === false) {

                        res.json({ KTF: false, KReason: "FileNameOnly not found in body" });
                        res.end();
                    } else {
                        if (("ItemName" in req.body) === false) {
                            res.json({ KTF: false, KReason: "ItemName not found in body" })

                        } else {
                            if (("ScreenName" in req.body) === false) {
                                res.json({ KTF: false, KReason: "ScreenName not found in body" })

                            } else {
                                if (("inPostData" in req.body) === false) {
                                    res.json({ KTF: false, KReason: "inPostData not found in body" })
                                }
                                next();
                            };
                        };
                    };
                };
            };
        };
    };
};

exports.InsertWithPk = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                FolderName: "",
                FileNameOnly: "",
                ItemName: "",
                ScreenName: "",
                JsonPk: "",
                inPostData: ""
            },
            originalUrl: req.originalUrl
        });
    };

    if (("KeshavSoft" in req) === false) return res.json({ KTF: false, KReason: "KeshavSoft not found in Request" })

    if (("DataPk" in req.KeshavSoft) === false) res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" })

    if (("FolderName" in req.body) === false) res.json({ KTF: false, KReason: "FolderName not found in body" })

    if (("FileNameOnly" in req.body) === false) res.json({ KTF: false, KReason: "FileNameOnly not found in body" });

    if (("ItemName" in req.body) === false) res.json({ KTF: false, KReason: "ItemName not found in body" })

    if (("ScreenName" in req.body) === false) res.json({ KTF: false, KReason: "ScreenName not found in body" })

    if (("inPostData" in req.body) === false) res.json({ KTF: false, KReason: "inPostData not found in body" })
    next();
};

