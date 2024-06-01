const router = require('express').Router()

const outfitFinder = async (req, res, next) => {
    req.outfit = await Outfit.findByPk(req.params.id)
    next()
  }
  
  router.get('/:id', outfitFinder, async (req, res) => {
    if (req.outfit) {
      res.json(req.outfit)
    } else {
      res.status(404).end()
    }
  })
  

module.exports = router