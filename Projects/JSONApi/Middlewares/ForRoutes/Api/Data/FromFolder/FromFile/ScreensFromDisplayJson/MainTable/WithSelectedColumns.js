exports.WithConfig = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                inFolderName: "",
                inFileName: "",
                inItemName: "",
                inScreenName: ""
            },
            originalUrl: req.originalUrl
        });
    } 
    next();
};