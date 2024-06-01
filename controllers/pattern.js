const router = require('express').Router()

const patternFinder = async (req, res, next) => {
    req.pattern = await Pattern.findByPk(req.params.id)
    next()
  }
  
  router.get('/:id', patternFinder, async (req, res) => {
    if (req.pattern) {
      res.json(req.pattern)
    } else {
      res.status(404).end()
    }
  })

const findByOutfit = await Pattern.findOne({ where: { outfitid: req.params.id } });
    if (findByOutfit === null) {
    console.log('Not found!');
    } else {
    console.log(findByOutfit instanceof Pattern); 
    console.log(pattern.name); 
    }

module.exports = router