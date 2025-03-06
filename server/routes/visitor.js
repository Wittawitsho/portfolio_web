// import ....
const express = require('express')
const router = express.Router()
// import controller
const { listVisitors,createMessage } = require('../controllers/visitor')
const { authCheck, adminCheck } = require('../middlewares/authCheck')

router.get('/visitors', authCheck, adminCheck, listVisitors)
router.post('/createMessage', createMessage)

module.exports = router