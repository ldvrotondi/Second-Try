const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Book extends Model {}
Book.init({
    issueid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    series:{ type: DataTypes.STRING},
    seriesjp:{type: DataTypes.STRING},
    issue: {type: DataTypes.STRING},
    issuejp: {type: DataTypes.STRING},
    publisher: {type: DataTypes.STRING},
    isbn: {type: DataTypes.INTEGER},
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Books',
    freezeTableName: true,
    schema: 'tinytailordb',
    tableName: 'bookindex'
  
  });
  
  module.exports = Book