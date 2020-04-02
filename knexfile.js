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
