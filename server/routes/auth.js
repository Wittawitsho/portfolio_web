// import ....
const express = require('express')
const router = express.Router()
// import controller
const { register, login, currentAdmin } = require('../controllers/auth')
const { authCheck, adminCheck } = require('../middlewares/authCheck')
router.post('/register', register)
router.post('/login', login)
router.post('/current-admin',authCheck, adminCheck, currentAdmin)

module.exports = router