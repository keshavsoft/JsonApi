exports.FromParams = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                FolderName: "",
                FileNameWithExtension: "",
                ItemName: "",
                Screenname: "",
                JsonPk : 0
            }
        });
    } else {
        if (("KeshavSoft" in req) === false) {
            res.json({ KTF: false, KReason: "KeshavSoft not found in Request" })

        } if (("DataPk" in req.KeshavSoft) === false) {
            res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" })

        } if (("FolderName" in req.body) === false) {
            res.json({ KTF: false, KReason: "FolderName not found in body" })

        } if (("FileNameWithExtension" in req.body) === false) {
            res.json({ KTF: false, KReason: "FileNameWithExtension not found in body" })

        } if (("ItemName" in req.body) === false) {
            res.json({ KTF: false, KReason: "ItemName not found in body" })

        } if (("Screenname" in req.body) === false) {
            res.json({ KTF: false, KReason: "Screenname not found in body" })

        } if (("JsonPk" in req.body) === false) {
            res.json({ KTF: false, KReason: "JsonPk not found in body" })

        } else {
            next();
        }


    };
}; 