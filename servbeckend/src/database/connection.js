const knex = require('knex');
// importa as confg do db
const configuration = require('../../knexfile');

// conexão
const connection = knex(configuration.development);

module.exports = connection;