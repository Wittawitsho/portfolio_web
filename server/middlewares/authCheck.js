const jwt = require('jsonwebtoken')
const prisma = require('../config/prisma')

exports.authCheck = async (req, res, next) => {
    try {
        //code
        const headerToken = req.headers.authorization
        if (!headerToken) {
            return res.status(401).json({ message: "No Token, Authorization" })
        }
        const token = headerToken.split(" ")[1]
        const decode = jwt.verify(token, process.env.SECRET)
        req.admin = decode

        const admin = await prisma.admin.findFirst({
            where: {
                email: req.admin.email
            }
        })
        
        next()
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Token Invalid' })
    }
}


exports.adminCheck = async (req, res, next) => {
    try {
        const { email } = req.admin
        const adminUser = await prisma.admin.findFirst({
            where: { email: email }
        })
        if (!adminUser || adminUser.role !== 'admin') {
            return res.status(403).json({ message: 'Acess Denied: Admin Only' })
        }
        console.log('admin check', adminUser)
        next()
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error Admin access denied' })
    }
}