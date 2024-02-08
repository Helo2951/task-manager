
exports.up = (knex) => {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable()
    table.string('content');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.timestamp('created_at').default(knex.fn.now());
    table.datetime('deadline').notNullable();
    table.boolean("status");
  })

}

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('tasks')
};
