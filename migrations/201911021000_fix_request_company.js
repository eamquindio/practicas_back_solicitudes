exports.up = knex =>
  knex.schema.table('request_company', (table) => {
    table.string('person_type').alter();
    table.string('movil').alter();
    table.string('description').alter();
    table.string('requirements').alter();
    table.string('observations').alter();
    table.string('level').alter();
  });

exports.down = knex =>
  knex.schema.table('request_company', (table) => {
    table.drop('chief_charge');
    table.drop('society_ty_id');
    table.drop('city_id');
    table.drop('req_sta_id');
    table.drop('head_area');
  });

