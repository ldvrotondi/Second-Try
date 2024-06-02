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

  
/*app.get('/api/books', async (req, res) => {
    const books = await Book.findAll()
    res.json(books)
  })

app.get('/api/books/:id', async (request, response) => {
    const book = await Book.findByPk(request.params.id)
    if (book) {
        response.json(book)
      } else {
        response.status(404).end()
      }
  })

  app.get('/api/dolls', async (req, res) => {
    const dolls = await Doll.findAll()
    res.json(dolls)
  })

app.get('/api/dolls/:id', async (request, response) => {
    const doll = await Doll.findByPk(request.params.id)
    if (doll) {
        response.json(doll)
      } else {
        response.status(404).end()
      }
  })

  app.get('/api/outfits', async (req, res) => {
    const outfits = await Outfit.findAll()
    res.json(outfits)
  })

app.get('/api/outfits/:id', async (request, response) => {
    const outfit = await Outfit.findByPk(request.params.id)
    if (outfit) {
        response.json(outfit)
      } else {
        response.status(404).end()
      }
  })

  app.get('/api/patterns', async (req, res) => {
    const patterns = await Pattern.findAll()
    res.json(patterns)
  })

app.get('/api/patterns/:id', async (request, response) => {
    const pattern = await Pattern.findByPk(request.params.id)
    if (pattern) {
        response.json(pattern)
      } else {
        response.status(404).end()
      }
  })*/

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)
  
  
  const PORT = process.env.PORT

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })