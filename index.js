require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors');
//const { Book, Doll, Outfit, Pattern } = require('./models')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const router = require('./routes/routes.js')
app.use('/api', router)

//api test
app.get('/', (request, response) => {
    response.json({message: 'API connection successful'})
  })


  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)
  
  
  const PORT = process.env.PORT

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })