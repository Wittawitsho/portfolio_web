// Step 1 import
const express = require('express')
const app = express()
const morgan = require('morgan')
const { readdirSync } = require('fs') // อ่าน directory
const cors = require('cors')
// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// loop import
readdirSync('./routes')
.map((c) => app.use('/api', require('./routes/' + c)))
// Step 3 Router

// Step 2 Start Server
app.listen(5000,
    () => console.log('server running'))