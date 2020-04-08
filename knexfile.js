require('dotenv').config();
const path = require('path');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USERNAME,
      password: ''
    },
    debug: true,
    seeds: {
      directory: path.join(__dirname , '/db/seed-data/development')
    },
    migrations: {
      directory:  path.join(__dirname , '/db/migrations')
    }
  },

  test: {
    client: 'postgresql',
      connection: {
        database: process.env.DATABASE_TEST_NAME,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USERNAME,
        password: ''
      },
      debug: true,
      seeds: {
        directory: __dirname + '/db/seed-data/development'
      },
      migrations: {
        directory:  __dirname + '/db/migrations'
      }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'XXXX',
      user:     'XXXX',
      password: 'XXXX'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }


};
