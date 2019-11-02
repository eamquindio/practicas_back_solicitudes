exports.up = knex =>
  knex.schema.table('request_company', (table) => {
    table.string('person_type');
    table.string('movil');
    table.string('description');
    table.string('requirements');
    table.string('observations');
    table.string('level');
  });

exports.down = knex =>
  knex.schema.table('request_company', (table) => {
    table.dropColumn('chief_charge');
    table.dropColumn('society_ty_id');
    table.dropColumn('city_id');
    table.dropColumn('req_sta_id');
    table.dropColumn('head_area');
  });
