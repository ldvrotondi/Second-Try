require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const router = require('./routes/routes.js')
app.use('/api', router)

//api test
app.get('/', (req, res) => {
    response.json({message: 'API connection successful'})
  })

  const unknownEndpoint = (req, res) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)
  
  const PORT = process.env.PORT

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

  function authenticateToken(req, res, nex){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null){
      return res.status(401).send({error: 'You are not logged in.'})
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return res.status(403)
      req.user = user
    next()
    })
  }