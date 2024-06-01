const router = require('express').Router()

const dollFinder = async (req, res, next) => {
    req.doll = await Doll.findByPk(req.params.id)
    next()
  }
  
  router.get('/:id', dollFinder, async (req, res) => {
    if (req.doll) {
      res.json(req.doll)
    } else {
      res.status(404).end()
    }
  })
  

module.exports = router