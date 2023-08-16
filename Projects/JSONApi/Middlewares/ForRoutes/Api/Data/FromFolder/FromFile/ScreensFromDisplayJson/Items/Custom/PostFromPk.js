exports.PostFromPk = (req, res, next) => {
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };

    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            params: {
                inRowPk: "",
            },
        });
        return;
    };

    if (("inRowPk" in req.params) === false) {
        res.json({ KTF: false, KReason: "inRowPk not found in params" })
        return;
    };
    next();
};
