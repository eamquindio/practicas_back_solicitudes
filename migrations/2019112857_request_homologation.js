exports.up = knex =>
  knex.schema.createTable('homologation', (table) => {
    table.integer('id').primary();
    table.string('date');
    table.integer('cycle');
    table.integer('programer_id');
    table.string('student_name');
    table.integer('type_id');
    table.string('number_id');
    table.string('code');
    table.string('email');
    table.string('phone');
    table.string('function_company');
    table.string('company');
    table.string('address');
    table.integer('department');
    table.integer('city');
    table.string('company_phone');
    table.string('boss_company');
    table.string('position');
    table.string('email_company');
    table.string('phone_contact');
  });

exports.down = knex => knex.schema.dropTable('homologation');
