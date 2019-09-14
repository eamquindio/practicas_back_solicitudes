const { DB_CONNECTION = 'postgres://postgres:123532810@localhost:5432/w' } = process.env;
const MAX_CONNECTION_POOLSIZE = 5;

module.exports = {
  client: 'pg',
  connection: DB_CONNECTION,
  pool: { min: 1, max: MAX_CONNECTION_POOLSIZE },
  acquireConnectionTimeout: 5000,
};
