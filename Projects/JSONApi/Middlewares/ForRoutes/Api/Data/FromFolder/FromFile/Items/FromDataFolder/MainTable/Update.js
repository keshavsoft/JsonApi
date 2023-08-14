exports.UpdateFunc = (req, res, next) => {
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };

    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                JsonConfig:{},
                ItemConfig:{}, 
                inDataToUpdate: {},
                pk: 0
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
    if (("pk" in req.body) === false) {
        res.json({ KTF: false, KReason: "pk not found in body" })
        return;
    };
    next();
};
