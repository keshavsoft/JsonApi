exports.FromParams = (req, res, next) => {
    console.log("sssssssssss------ : ", req.body);

    if (Object.keys(req.body).length === 0) {
        res.json({
            FolderName: "",
            FileNameWithExtension: "",
            ItemName: "",
            Screenname: ""
        });
    } else {
        if (("FolderName" in req.body) === false) {
            res.json({ KTF: false, KReason: "FolderName not found in body" })
        } else {
            next();
        };
    };
};