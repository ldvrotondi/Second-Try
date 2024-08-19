const router = require('express').Router()
const db = require('../models')
const { outfitFinder } = require('./outfit')

const Book = db.Book
const Doll = db.Doll
const Outfit = db.Outfit
const Pattern = db.Pattern

const getAllPatterns = async (req, res, next) => {
  let patterns = await Pattern.findAll({})
  res.status(200).send(patterns)
}

const patternFinder = async (req, res, next) => {
    let pattern = await Pattern.findByPk(req.params.id)
    res.status(200).send(pattern)
  }

const findByOutfit = async (req, res, next) => {
    let patterns = await Pattern.findAll({ where: { outfitid: req.params.id } })
    res.status(200).send(patterns)
  }

const findByDoll = async (req, res, next) => {
    let patterns = await Pattern.findAll({ where: { dollid: req.params.id },
      include: [{
        model: Outfit,
        as: 'outfit',
        attributes: [ 'name', 'designer'],
        include: [{
          model: Book,
          as: 'book',
          attributes: [ 'issue', 'series']
          }]
        }, {
          model: Doll,
          as: 'doll',
          attributes: [ 'brand', 'line', 'type']
      }],
    })
    res.status(200).send(patterns)
  }

  const findByType = async (req, res, next) => {
    let patterns = await Pattern.findAll({ where: { type: req.params.id } })
    res.status(200).send(patterns)
  }

  const findAllData = async (req, res, next) => {
    let patterns = await Pattern.findAll({
      include: [{
        model: Outfit,
        as: 'outfit',
        attributes: [ 'name', 'designer'],
        include: [{
          model: Book,
          as: 'book',
          attributes: [ 'issue', 'series']
          }]
        }, {
          model: Doll,
          as: 'doll',
          attributes: [ 'brand', 'line', 'type']
      }],
   })
    res.status(200).send(patterns)
  }

/*
const findByOutfit = async (req, res) => {
   await Pattern.findOne({ where: { outfitid: req.params.id } });
    if (findByOutfit === null) {
    console.log('Not found!');
    } else {
    console.log(findByOutfit instanceof Pattern); 
    console.log(pattern.name); 
    }}*/

const addPattern = async (req, res) => {
      let info ={
        patternid: req.body.patternid,
        outfitid: req.body.outfitid,
        dollid: req.body.dollid,
        type: req.body.type,
        }
        const pattern = await Pattern.create(info)
        res.status(200).send(pattern)
      }

//module.exports = router

module.exports = {
getAllPatterns,
patternFinder,
findByOutfit,
findByType,
findByDoll,
addPattern,
findAllData
}