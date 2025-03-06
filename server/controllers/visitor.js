const prisma = require('../config/prisma')

exports.listVisitors = async (req, res) => {
    try {
        //code
        const visitor = await prisma.visitor.findMany({
            select: { 
                id: true,        
                name: true,
                email: true,
                message: true,
                createdAt: true
            }
        })
        res.send(visitor)
    } catch (err) {
        //err
        console.log(err)
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.createMessage = async (req, res) =>{
    try {
        const { name, email, message } = req.body
        if (!name) {
            return res.status(400).json({ message: 'Name is required!!!' })
        }
        if (!email) {
            return res.status(400).json({ message: 'Email is required!!!' })
        }
        if (!message) {
            return res.status(400).json({ message: 'Message is required!!! '})
        }
        
        await prisma.visitor.create({
            data: {
                name: name,
                email:email,
                message:message,
            }
        })

        res.send('Send Success')
         
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error"})
    }
}