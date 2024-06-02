const db = require('../models')

const Book = db.Book
const Doll = db.Doll
const Outfit = db.Outfit
const Pattern = db.Pattern

const bookFinder = async (req, res, next) => {
    let book = await Book.findByPk(req.params.id)
    res.status(200).send(book)
  }

const getAllBooks = async (req, res, next) => {
    let books = await Book.findAll({})
    res.status(200).send(books)
  }

const addBook = async (req, res) => {
  let info ={
  issueid: req.body.issueid,
  series: req.body.series,
  seriesjp: req.body.seriesjp,
  issue: req.body.issue,
  issuejp: req.body.issuejp,
  publisher: req.body.publisher,
  isbn: req.body.isbn,
}
  const book = await Book.create(info)
  res.status(200).send(book)
}


module.exports = {
  bookFinder,
  getAllBooks,
  addBook
}