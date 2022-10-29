exports.FromParams = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                inFolderName: "",
                inFileName: "",
                inItemName: "",
                inScreenName: "",
            }
        });
    } else {
        if (("KeshavSoft" in req) === false) {
            res.json({ KTF: false, KReason: "KeshavSoft not found in Request" })

        } else {
            if (("DataPk" in req.KeshavSoft) === false) {
                res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" })

            } else {
                if (("inFolderName" in req.body) === false) {
                    res.json({ KTF: false, KReason: "inFolderName not found in body" })

                } else {
                    if (("inFileName" in req.body) === false) {
                        res.json({ KTF: false, KReason: "inFileName not found in body" })

                    } else {
                        if (("inItemName" in req.body) === false) {
                            res.json({ KTF: false, KReason: "inItemName not found in body" })

                        } else {
                            if (("inScreenName" in req.body) === false) {
                                res.json({ KTF: false, KReason: "inScreenName not found in body" })

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