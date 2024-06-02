const db = require('../models')

const Book = db.Book
const Doll = db.Doll
const Outfit = db.Outfit
const Pattern = db.Pattern

const getAllOutfits = async (req, res, next) => {
  let outfits = await Outfit.findAll({})
  res.status(200).send(outfits)
}

const outfitFinder = async (req, res, next) => {
    let outfit = await Outfit.findByPk(req.params.id)
    res.status(200).send(outfit)
  }

const findByBook = async (req, res, next) => {
    let outfit = await Outfit.findOne({ where: { issueid: req.params.id } })
    res.status(200).send(outfit)
  }
  

  const addOutfit = async (req, res) => {
    let info ={
      outfitid: req.body.outfitid,
      issueid:req.body.issueid,
      name: req.body.name,
      designer: req.body.designer
  }
  const outfit = await Outfit.create(info)
  res.status(200).send(outfit)
}  

const getPatterns = async (req, res) => {
  const data = await Outfit.findAll({
    include: [{
      model: Pattern,
      as: "pattern"
    }],
    where: {outfitid: req.params.id}
  })
  res.status(200).send(data)
}


const getAllPatterns = async (req, res) => {
  const data = await Outfit.findAll({
    include: [{
      model: Pattern,
      as: 'pattern'
    }],
  })
  res.status(200).send(data)

}

//module.exports = router

module.exports = {
getAllOutfits,
outfitFinder,
findByBook,
addOutfit,
getPatterns,
getAllPatterns
}