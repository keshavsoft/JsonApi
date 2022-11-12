
let PostFunc = async (req, res) => {
    let LocalBody = req.body;
    console.log("--------------", LocalBody);


    res.json({});
};

module.exports = {
    PostFunc
};

