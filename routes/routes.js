const bookController = require('../controllers/book.js')
const dollController = require('../controllers/doll.js')
const outfitController = require('../controllers/outfit.js')
const patternController = require('../controllers/pattern.js')
const router = require('express').Router()

//for books

//add new books
router.post('/books/addbook', bookController.addBook)

//find books by id
router.get('/books/book/:id', bookController.bookFinder)

//show all books
router.get('/books', bookController.getAllBooks)

//------------------------------------------------------------------------------------
//for dolls

//add new dolls
router.post('/dolls/adddoll', dollController.addDoll)

//show all dolls
router.get('/dolls', dollController.getAllDolls)

//show by height
router.get('/dolls/bysize/:height', dollController.findByHeight)

//find doll by id
router.get('/dolls/doll/:id', dollController.dollFinder)

//------------------------------------------------------------------------------------
//for outfits

//add outfits
router.post('/outfits/addoutfit', outfitController.addOutfit)

//find outfit by id
router.get('/outfits/outfit/:id', outfitController.outfitFinder)

//find outfits by book
router.get('/outfits/bybook/:id', outfitController.findByBook)

//find outfits by doll
router.get('/outfits/bydoll/:id', outfitController.findByDoll)

//get all outfits
router.get('/outfits', outfitController.getAllOutfits)

//get patterns by outfit id
router.get('/outfits/patterns/:id', outfitController.getPatterns)

//get all patterns
router.get('/outfits/patterns', outfitController.getAllPatterns)

//show all patterns from joined table with all data
router.get('/outfits/all', outfitController.getAllData)

//------------------------------------------------------------------------------------
//for patterns

//add patterns
router.post('/patterns/addpattern', patternController.addPattern)

//find patterns by id
router.get('/patterns/pattern/:id', patternController.patternFinder)

//show all patterns
router.get('/patterns', patternController.getAllPatterns)

//show all patterns from joined table with all data
router.get('/patterns/all', patternController.findAllData)

//get pattern by outfit id
router.get('/patterns/byoutfit/:id', patternController.findByOutfit)

//get pattern by garment type
router.get('/patterns/bytype/:id', patternController.findByType)

//get pattern by doll size
router.get('/patterns/bydoll/:id', patternController.findByDoll)

module.exports = router