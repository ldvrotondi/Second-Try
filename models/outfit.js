const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Outfit extends Model {}
  Outfit.init({
    outfitid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    issueid:{ type: DataTypes.STRING}
    ,
      name:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    designer: {type: DataTypes.STRING}
    
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Outfits',
    freezeTableName: true,
    schema: 'tinytailordb',
    tableName: 'outfitindex'
  
  });

  module.exports = Outfit