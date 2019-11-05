const Helpers = module.exports;
const db = require('../app/utils/DB');

Helpers.db = db;

Helpers.migrate = () => db.migrate.latest();

Helpers.clear = async () => {
  await db('persons').del();

  await db('request_student').del();

  await db('request_company').del();

  await db('request').del();

  await db('homologation').del();
};
