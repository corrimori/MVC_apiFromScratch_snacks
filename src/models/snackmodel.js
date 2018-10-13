const snacksQuery = require('../../queries/snacksqueries')

const getAllSnacks = () => {
  snacks = snacksQuery.getAllSnacks()

  return snacks.then(result => {
    console.log('result in models---->', result);
    return result.length < 1
      ? { error: 'error retreiving snacks', status: 404 }
      : result
  })
}

const getSnackById = (id) => {
  snack = snacksQuery.getSnackById(id)

  return snack.then(result => {
    return !result
      ? { error: 'error retreiving snack', status: 404 }
      : result
  })
}

const createSnack = (body) => {
  snack = snacksQuery.createSnack(body)
  return snack.then(result => {
    return !result
      ? { error: 'error creating snack', status: 500 }
      : result
  })
}

const undateSnackById = (id, body) => {
  snack = snacksQuery.undateSnackById(id, body)

  return snack.then(result => {
    return !result
      ? { error: 'error updating snack', status: 500 }
      : result
  })
}

const deleteSnackById = (id) => {
  snack = snacksQuery.deleteSnackById(id)

  return snack.then(result => {
    return !result
      ? { error: 'error deleting snack', status: 500 }
      : result
  })
}

module.exports = {
  getAllSnacks,
  getSnackById,
  createSnack,
  updateSnackById,
  deleteSnackById
}
