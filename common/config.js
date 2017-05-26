const env = process.env;

module.exports = {
  appName: env.APP_NAME,
  server: {
    host: env.HOST,
    port: env.PORT,
    url: env.URL
  },
  secret: {
    crypto: env.CRYPTO_SECRET,
    jwt: env.JWT_SECRET
  },
  cookie: {
    auth: env.AUTH_COOKIE
  },
  db: {
    host: env.POSTGRES_HOST,
    port: env.POSTGRES_PORT,
    databaseName: env.POSTGRES_DB,
    username: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD
  },
  selenium: {
    host: env.SELENIUM_HOST,
    port: env.SELENIUM_PORT
  },
  redis: {
    host: env.REDIS_HOST,
    port: env.REDIS_PORT
  }
};
