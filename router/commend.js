const express = require('express')
const router = express.Router()
const {
    commend_delete,
    commend_get,
    commend_register,
    commend_update
} = require('../controller/commend')

// detail get commend
router.get('/:commendId', commend_get)

// register commend
router.post('/', commend_register)

// update commend 
router.put('/:commendId', commend_update)

// detail delete commend
router.delete('/:commendId', commend_delete)

module.exports = router