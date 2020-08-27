const path = require('path')

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: "./src/Database/profiles.sqlite"
    },
    migrations: {
      directory: "./src/Database/Migrations",
    },
    useNullAsDefault: true
  },
};
