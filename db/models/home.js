'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db => db.define('homes', {
  name:Sequelize.TEXT, 
  location: Sequelize.STRING,
  description:Sequelize.TEXT,
  imageUrl: {
	  type: Sequelize.STRING,
	  validate: {
	  		isUrl: true
	  		}
  },
  rating: Sequelize.FLOAT,
  price: Sequelize.FLOAT,
  startDate: Sequelize.DATE,
  endDate: Sequelize.DATE

})

module.exports.associations = (Home, {Transaction, User}) => {
	Home.belongsTo(User, {as: 'Host'})

}

