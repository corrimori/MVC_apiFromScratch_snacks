const knex = require('./db')

getAllSnacks = () => {
  return knex('snacks').orderBy('created_at', 'desc')
}

getSnackById = (id) => {
  return knex('snacks').where('id', id)
}

module.exports = {
  getAllSnacks,
  getSnackById
  // createCostume,
  // updateCostume,
  // deleteCostumeById
}
