exports.up = knex =>
  knex.schema.createTable('request', (table) => {
    table.integer('id').primary();
    table.string('name_request');
    table.string('charge_request');
    table.string('date');
    table.integer('practical_type');
    table.integer('state');
    table.integer('programer_id');
    table.string('company_id');
    table.string('cycle');
    table.string('vacant');
    table.integer('n_vacant');
    table.string('observations');
  });

exports.down = knex => knex.schema.dropTable('request');
