const knex = require('./db')

getAllSnacks = () => {
  return knex('newsnacks').orderBy('created_at', 'desc')
}

getSnackById = (id) => {
  return knex('newsnacks').where('id', id)
}

module.exports = {
  getAllSnacks,
  getSnackById
  // createCostume,
  // updateCostume,
  // deleteCostumeById
}
