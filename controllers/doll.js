const router = require('express').Router()
const db = require('../models')
const { Op } = require("sequelize");
const { max } = require('../models/book');


const Book = db.Book
const Doll = db.Doll
const Outfit = db.Outfit
const Pattern = db.Pattern

const getAllDolls = async (req, res, next) => {
  let dolls = await Doll.findAll({})
  res.status(200).send(dolls)
}

const dollFinder = async (req, res, next) => {
    let doll = await Doll.findByPk(req.params.id)
    res.status(200).send(doll)
  }

  const findByHeight = async (req, res, next) => {
    if (req.params.height < 35) {
      maxHeight = parseFloat(req.params.height) * 1.2;
      minHeight = parseFloat(req.params.height) * 0.8;
    } else if (req.params.height < 55) {
      maxHeight = parseFloat(req.params.height) * 1.14;
      minHeight = parseFloat(req.params.height) * 0.86;
    } else {
      maxHeight = parseFloat(req.params.height) * 1.07;
      minHeight = parseFloat(req.params.height) * 0.93;
    }
    let dolls = await Doll.findAll({ where: {height: {[Op.between]: [minHeight, maxHeight]} } })
    res.status(200).send(dolls)
  }

const addDoll = async (req, res) => {
    let info ={
      dollid: req.body.dollid,
      brand: req.body.brand,
      line: req.body.line,
      type: req.body.type,
      height: req.body.height,
      head: req.body.head,
      neck: req.body.neck,
      bust: req.body.bust,
      waist: req.body.waist,
      hips: req.body.hips,
      thigh: req.body.thigh,
      calf: req.body.calf,
      shoulders: req.body.shoulders,
      armlen: req.body.armlen,
      upperarmcirc: req.body.upperarmcirc,
      lowerarmcirc: req.body.lowerarmcirc,
      wrist: req.body.wrist,
      inseam: req.body.inseam,
      footlen: req.body.footlen,
      footwid: req.body.footwid
    }
    const doll = await Doll.create(info)
    res.status(200).send(doll)
  }
  

//module.exports = router

module.exports = {
  getAllDolls,
  dollFinder,
  findByHeight,
  addDoll
}