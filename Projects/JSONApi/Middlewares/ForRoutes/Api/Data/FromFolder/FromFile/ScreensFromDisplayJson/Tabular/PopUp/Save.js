exports.FromParams = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                JsonConfig: "",
                ItemConfig: "",
                inDataToSave: ""
            }
        });
    } else {
        if (("KeshavSoft" in req) === false) {
            res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });

        } if (("DataPk" in req.KeshavSoft) === false) {
            res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" });

        } if (("JsonConfig" in req.body) === false) {
            res.json({ KTF: false, KReason: "JsonConfig not found in body" });

        } if (("ItemConfig" in req.body) === false) {
            res.json({ KTF: false, KReason: "ItemConfig not found in body" });

        } if (("inDataToSave" in req.body) === false) {
            res.json({ KTF: false, KReason: "inDataToSave not found in body" });

        } else {
            next();
        };
    };
}; 