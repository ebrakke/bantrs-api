var env = 'dev';

var dbConfig = function() {};

if (env === 'dev') {
    dbConfig.username = 'dev';
    dbConfig.password = 'winteriscoming';
    dbConfig.host = 'cs411-server.cqoxejj92lef.us-west-2.rds.amazonaws.com';
    dbConfig.type = 'postgres';
    dbConfig.db = 'cs411db';
}

module.exports = dbConfig;
