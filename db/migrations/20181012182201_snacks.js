exports.up = function(knex, Promise) {
  return knex.schema.createTable('newsnacks', function(table) {
    table.increments()
    table.text('name').notNullable()
    table.integer('price').notNullable()
    table.text('description').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('newsnacks')
}
