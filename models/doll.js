const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Doll extends Model {}
Doll.init({
  dollid: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  brand: {
    type: DataTypes.STRING
  },
  line: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.STRING
  },
  height: {type: DataTypes.FLOAT},
  head: {type: DataTypes.FLOAT},
  neck: {type: DataTypes.FLOAT},
  bust: {type: DataTypes.FLOAT},
  waist: {type: DataTypes.FLOAT},
  hips: {type: DataTypes.FLOAT},
  thigh: {type: DataTypes.FLOAT},
  calf: {type: DataTypes.FLOAT},
  shoulders: {type: DataTypes.FLOAT},
  armlen: {type: DataTypes.FLOAT},
  upperarmcirc: {type: DataTypes.FLOAT},
  lowerarmcirc: {type: DataTypes.FLOAT},
  wrist: {type: DataTypes.FLOAT},
  inseam: {type: DataTypes.FLOAT},
  footlen: {type: DataTypes.FLOAT},
  footwid: {type: DataTypes.FLOAT}
}, {
  sequelize,
  timestamps: false,
  modelName: 'Doll',
  freezeTableName: true,
  schema: 'tinytailordb',
  tableName: 'dollsizes'

});

module.exports = Doll