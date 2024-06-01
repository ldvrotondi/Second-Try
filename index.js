require('dotenv').config()


const express = require('express')
const app = express()
const PORT = process.env.PORT

const { Book, Doll, Outfit, Pattern } = require('./models')

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
app.get('/books', async (req, res) => {
    const books = await Book.findAll()
    res.json(books)
  })

app.get('/books/:id', async (request, response) => {
    const book = await Book.findByPk(request.params.id)
    if (book) {
        response.json(book)
      } else {
        response.status(404).end()
      }
  })

  app.get('/dolls', async (req, res) => {
    const dolls = await Doll.findAll()
    res.json(dolls)
  })

app.get('/dolls/:id', async (request, response) => {
    const doll = await Doll.findByPk(request.params.id)
    if (doll) {
        response.json(doll)
      } else {
        response.status(404).end()
      }
  })

  app.get('/outfits', async (req, res) => {
    const outfits = await Outfit.findAll()
    res.json(outfits)
  })

app.get('/outfits/:id', async (request, response) => {
    const outfit = await Outfit.findByPk(request.params.id)
    if (outfit) {
        response.json(outfit)
      } else {
        response.status(404).end()
      }
  })

  app.get('/patterns', async (req, res) => {
    const patterns = await Pattern.findAll()
    res.json(patterns)
  })

app.get('/patterns/:id', async (request, response) => {
    const pattern = await Pattern.findByPk(request.params.id)
    if (pattern) {
        response.json(pattern)
      } else {
        response.status(404).end()
      }
  })

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)
  

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })