exports.up = knex =>
  knex.schema.table('request_student', (table) => {
    table.string('NIT');
  });

exports.down = knex =>
  knex.schema.table('request_student', (table) => {
    table.dropColumn('date');
    table.dropColumn('society');
    table.dropColumn('requester_name');
    table.dropColumn('agreement');
    table.dropColumn('person_in_charge');
    table.dropColumn('city_id');
    table.dropColumn('company_id');
  });
