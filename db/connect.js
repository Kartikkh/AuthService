const cassandra = require('cassandra-driver');
const dbconfig = require("./etc/" + (process.env.NODE_ENV || "development") + "/db.js");

const client = new cassandra.Client({
        contactPoints: [dbconfig.HOST_URL],
        keyspace: dbconfig.DB.KEYSPACE
    });

module.exports = {
    client:client
};