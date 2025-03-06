const prisma = require('../config/prisma')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) {
            return res.status(400).json({ message: 'Email is required!!!' })
        }
        if (!password) {
            return res.status(400).json({ message: 'Password is required!!! '})
        }
        const admin = await prisma.admin.findFirst({
            where: {
                email: email
            }
        })
        
        if (admin) {
            return res.status(400).json({ message: 'Email already exits!!!' })
        }
        
        const hashPassword = await bcrypt.hash(password, 10)
        
        await prisma.admin.create({
            data: {
                email: email,
                password: hashPassword
            }
        })

        res.send('Register Success')
         
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error"})
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        
        const admin = await prisma.admin.findFirst({
            where: {
                email: email
            }
        })
        if (!admin) {
            return res.status(400).json({ message: 'User Not found' })
        }

        const isMathch = await bcrypt.compare(password, admin.password)
        if (!isMathch) {
            return res.status(400).json({ message: 'Password Invalid!!' })
        }

        const payload = {
            id: admin.id,
            email: admin.email,
            role: admin.role
        }

        jwt.sign(payload, process.env.SECRET, { expiresIn: '1d' }, (err, token)=>{
            if (err) {
                return res.status(500).json({ message: "Server Error" })
            }
            res.json({ payload, token })
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error"})
    }
}

exports.currentAdmin = async (req, res) => {
    try {
        //code
        const admin = await prisma.admin.findFirst({
            where: { email: req.admin.email },
            select: {
                id: true,
                email: true,
                role: true
            }
        })
        res.json({ admin })
    } catch (err) {
        //err
        console.log(err)
        res.status(500).json({ message: 'Server Error' })
    }
}