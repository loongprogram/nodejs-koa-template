const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('./sequelize')

const MovieModel = sequelize.define('movie', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: DataTypes.STRING
}, {
  tableName: 'movie'
})

module.exports = MovieModel
