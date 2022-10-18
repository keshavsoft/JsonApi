exports.SaveFunc = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                JsonConfig: {},
                ItemConfig: {},
                inDataToSave: {},
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
                if (("JsonConfig" in req.body) === false) {
                    res.json({ KTF: false, KReason: "JsonConfig not found in body" })
                } else {
                    if (("ItemConfig" in req.body) === false) {
                        console.log("eeeeeeeeee : ", "ItemConfig" in req.body);
                        res.json({ KTF: false, KReason: "ItemConfig not found in body" });
                        res.end();
                    } else {
                        if (("inDataToSave" in req.body) === false) {
                            res.json({ KTF: false, KReason: "inDataToSave not found in body" })

                        } else {
                            if (("insertkey" in req.body) === false) {
                                res.json({ KTF: false, KReason: "insertkey not found in body" })

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