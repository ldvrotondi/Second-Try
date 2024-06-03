const Book = require('./book')
const Doll = require('./doll')
const Outfit = require('./outfit')
const Pattern = require('./pattern')

Book.sync()
Doll.sync()
Outfit.sync()
Pattern.sync()

Book.hasMany(Outfit,{foreignKey: 'issueid', as: "outfit"})
Outfit.hasMany(Pattern, {foreignKey: 'outfitid', as: "pattern"})
Doll.hasMany(Pattern, {foreignKey: 'dollid', as: "pattern"})

Outfit.belongsTo(Book,{foreignKey: 'issueid', as:"book"})
Pattern.belongsTo(Outfit, {foreignKey: 'outfitid', as: "outfit"})
Pattern.belongsTo(Doll, {foreignKey: 'dollid', as: "doll"})




module.exports = {
  Book, Doll, Outfit, Pattern
}