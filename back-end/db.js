const promise = require('bluebird');
const options = {
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgresql://username:password@localhost:5432/yourdatabase';
const db = pgp(connectionString);

module.exports = db;
