exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('snacks')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('snacks').insert([
        {
          name: 'Popcorn',
          price: 3500,
          description: 'Light buttery snack'
        },
        {
          name: 'Mini Hershey',
          price: 100,
          description: 'Sweet small size treat'
        },
        {
          name: 'Potato Chips',
          price: 3000,
          description: 'Crunchy crispy snack'
        },
        {
          name: 'Apple',
          price: 4500,
          description: 'A healthy crunchy snack'
        }
      ])
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"snacks_id_seq"', (SELECT MAX("id") FROM "snacks"))`
      )
    )
}
