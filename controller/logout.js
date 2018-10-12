
let logout = function (req,res,next) {
    req.logout();
    res.redirect('/');
};

// please add function here in case of exporting them to other module
module.exports = {
    logout:logout
};