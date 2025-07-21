const passport = require('passport');

function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user && req.user.isAdmin) {
        return next();
    } else {
        res.status(403).send("Access Denied!");
    }
}

module.exports = isAdmin;