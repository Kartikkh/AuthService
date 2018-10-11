const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

const dbclient = require("../db/connect.js");
const queries = require('../db/queries');

let login = function (req,res,next) {

    passport.use(new LocalStrategy(
        function(username, password, done) {
            dbclient.client.execute(queries.login)
                .then(user,err =>{
                    if (err) { return done(err); }
                    if (!user) {
                        return done(null, false);
                    }
                    if (!user.validPassword(password)) {
                        return done(null, false, { message: 'Incorrect password.' });
                    }
                    return done(null, user);
                })
        }
    ));

};


// please add function here in case of exporting them to other module
module.exports = {
    login:login
};