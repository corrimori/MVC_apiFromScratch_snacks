module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'newsnacks'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection:
      'tba',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'newsnacks_test'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
}
