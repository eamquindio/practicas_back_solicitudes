exports.up = knex =>
  knex.schema.createTable('request_company', (table) => {
    table.integer('id').primary();
    table.string('r_legal');
    table.string('charge_request');
    table.string('head_area');
    table.string('chief_charge');
    table.string('date');
    table.string('city');
    table.string('c_address');
    table.string('c_phone');
    table.string('c_mail');
    table.string('Nit');
    table.string('sector');
    table.string('c_name');
    table.string('partnership');
    table.string('name_who_req');
    table.string('agreement_u');
    table.integer('prac_ty_id');
    table.integer('society_ty_id');
    table.integer('city_id');
    table.integer('req_sta_id');
    table.integer('programer_id');
  });
exports.down = knex => knex.schema.dropTable('request_company');
