const bookController = require('../controllers/book.js')
const dollController = require('../controllers/doll.js')
const outfitController = require('../controllers/outfit.js')
const patternController = require('../controllers/pattern.js')
const router = require('express').Router()


//for books
router.post('/addBook', bookController.addBook)

router.get('/books/:id', bookController.bookFinder)

router.get('/books', bookController.getAllBooks)

//for dolls
router.post('/adddoll', dollController.addDoll)

router.get('/dolls', dollController.getAllDolls)

router.get('/dolls/bysize/:height', dollController.findByHeight)

router.get('/dolls/:id', dollController.dollFinder)

//for outfits
router.post('/addoutfit', outfitController.addOutfit)

router.get('/outfits/:id', outfitController.outfitFinder)

router.get('/outfits/bybook/:id', outfitController.findByBook)

router.get('/outfits', outfitController.getAllOutfits)

//for patterns
router.post('/addpattern', patternController.addPattern)

router.get('/patterns/:id', patternController.patternFinder)

router.get('/patterns', patternController.getAllPatterns)

router.get('/patterns/byoutfit/:id', patternController.findByOutfit)

router.get('/patterns/bytype/:id', patternController.findByType)

router.get('/patterns/bydoll/:id', patternController.findByDoll)

module.exports = router