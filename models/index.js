const Book = require('./book')
const Doll = require('./doll')
const Outfit = require('./outfit')
const Pattern = require('./pattern')

Book.sync()
Doll.sync()
Outfit.sync()
Pattern.sync()

module.exports = {
  Book, Doll, Outfit, Pattern
}