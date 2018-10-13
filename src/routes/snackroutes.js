const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/snackcontroller')

router.get('/', ctrl.getAllSnacks)
router.get('/:id', ctrl.getSnackById)
// router.post('/', ctrl.createSnack)
// router.put('/:id', ctrl.updateSnackById)
// router.delete('/:id', ctrl.deleteSnackById)

module.exports = router
