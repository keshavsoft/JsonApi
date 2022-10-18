exports.FromParams = (req, res, next) => {
    console.log("sssssssssss------ : ", req.body);

    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                JsonConfig: "",
                ItemConfig: "",
                ItemName: "",
                inDataToUpdate: "",
                pk: 0
            }
        });
    } else {
        if (("KeshavSoft" in req) === false) {
            res.json({ KTF: false, KReason: "KeshavSoft not found in Request" })

        } if (("DataPk" in req.KeshavSoft) === false) {
            res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" })

        } if (("JsonConfig" in req.body) === false) {
            res.json({ KTF: false, KReason: "JsonConfig not found in body" })

        } if (("ItemConfig" in req.body) === false) {
            res.json({ KTF: false, KReason: "ItemConfig not found in body" })

        } if (("inDataToUpdate" in req.body) === false) {
            res.json({ KTF: false, KReason: "inDataToUpdate not found in body" })
        } if (("pk" in req.body) === false) {
            res.json({ KTF: false, KReason: "pk not found in body" })

        } else {
            next();
        }


    };
}; 