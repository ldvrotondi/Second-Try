const router = require('express').Router()

const bookFinder = async (req, res, next) => {
    req.book = await Book.findByPk(req.params.id)
    next()
  }
  
  router.get('/:id', bookFinder, async (req, res) => {
    if (req.book) {
      res.json(req.book)
    } else {
      res.status(404).end()
    }
  })
  

module.exports = router