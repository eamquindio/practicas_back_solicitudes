exports.up = knex =>
  knex.schema.createTable('request_student', (table) => {
    table.integer('id').primary();
    table.string('date');
    table.string('pship_comp');
    table.string('n_w_app');
    table.string('u_agreement');
    table.string('person_in_ch');
    table.string('as_met_com');
    table.integer('city_id');
    table.integer('state_id');
    table.integer('practice_type_id');
    table.integer('student_id');
    table.integer('company_id');
  });

exports.down = knex => knex.schema.dropTable('request_student');
