const knex = require('./db')

getAllSnacks = () => {
  return knex('newsnacks').orderBy('created_at', 'desc')
}

getSnackById = (id) => {
  return knex('newsnacks').where('id', id)
}

createSnack = (body) => {
  return knex('newsnacks')
  .insert(body).returning('*')
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

updateSnackById = (id, body) => {
  return knex('newsnacks')
  .where('id', id)
  // .update(body)
  .update({
    name: body.name,
    price: body.price,
    description: body.description,
  })
  .returning('*')
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

deleteSnackById = (id) => {
  return knex('newsnacks')
    .where('id', id)
    .del()
    .returning('*')
    .catch((err) => {
      console.error(err)
      knex.destroy()
      process.exit(1)
    })
}

module.exports = {
  getAllSnacks,
  getSnackById,
  createSnack,
  updateSnackById,
  deleteSnackById
}
