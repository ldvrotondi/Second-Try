const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class User extends Model {}
  User.init({
    user_id: {
        type: DataTypes.STRING, 
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING, 
        allowNull: false,}
    
  }, {
    sequelize,
    timestamps: false,
    modelName: 'User',
    freezeTableName: true,
    schema: 'tinytailordb',
    tableName: 'user'
  
  });

  module.exports = User