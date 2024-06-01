const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Pattern extends Model {}
  Pattern.init({
    patternid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    outfitid:{ type: DataTypes.INTEGER,
    allowNull: false,
  references:{model:'outfit', key: 'outfitid'}}
    ,
      dollid:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    type: {type: DataTypes.STRING,
    allowNull:false}
    
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Patterns',
    freezeTableName: true,
    schema: 'tinytailordb',
    tableName: 'patternindex'
  
  });

  module.exports = Pattern