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
