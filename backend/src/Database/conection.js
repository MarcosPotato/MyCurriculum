const Knex = require('knex')
const Configuration = require('../../knexfile.js')

const connect = Knex(Configuration.development)

module.exports = connect
