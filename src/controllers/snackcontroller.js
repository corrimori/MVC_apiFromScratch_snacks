// CONTROLLER - filters requests

const model = require('../models/snackmodel')

getAllSnacks = ( req, res, next ) => {
  let promise = model.getAllSnacks()

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

getSnackById = ( req, res, next ) => {
  const id = req.params.id
  const promise = model.getSnackById(id)
  // const snack = snacks.find( snack => snack.id === req.params.id )
  // if (!snack) return next({ status: 404, message: `Could not find the id of ${id}` })
  // res.status(200).json( { snack })
  promise.then(result => {
  return result.error ? next(result) : res.status(200).json(result)
})

promise.catch(error => {
  next(error)
})
}


module.exports = {
  getAllSnacks,
  getSnackById
}
