exports.up = knex =>
  knex.schema.table('request_student', (table) => {
    table.string('NIT');
  });

exports.down = knex =>
  knex.schema.table('request_student', (table) => {
    table.dropColumn('NIT');
  });
