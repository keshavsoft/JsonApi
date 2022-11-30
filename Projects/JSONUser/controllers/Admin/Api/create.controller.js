let Repo = require("../../../Repository/Users/Api/Create");

let postFunc = async (req, res) => {
    let LocalUserName = req.body.UserName;
    let LocalPassWord = req.body.PassWord;
    let LocalEmail = req.body.inEmail;
    
    Repo.Insert({
        inUserName: LocalUserName,
        inPassword: LocalPassWord,
        inEmail: LocalEmail
    }).then(PromieData => {
        res.end(JSON.stringify(PromieData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
};

let postWithOutPasswordFunc = async (req, res) => {
    let LocalUserName = req.body.UserName;
    let LocalPassWord = req.body.PassWord;
    let LocalEmail = req.body.inEmail;
    console.log("postWithOutPasswordFunc -------------", LocalUserName);
    Repo.postWithOutPasswordFunc({
        inUserName: LocalUserName,
        inEmail: LocalEmail
    }).then(PromieData => {
        res.end(JSON.stringify(PromieData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
};

module.exports = { postFunc, postWithOutPasswordFunc }