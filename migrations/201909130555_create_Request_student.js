exports.up = knex =>
  knex.schema.createTable('request_student', (table) => {
    table.integer('id').primary();
    table.string('date');
    table.string('society');
    table.string('requester_name');
    table.string('agreement');
    table.string('person_in_charge');
    table.string('how_meet_company');
    table.integer('city_id');
    table.integer('state_id');
    table.integer('practice_type_id');
    table.integer('student_id');
    table.integer('company_id');
  });

exports.down = knex => knex.schema.dropTable('request_student');
