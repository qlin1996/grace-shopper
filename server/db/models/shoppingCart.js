const Sequelize = require('sequelize')
const db = require('../db')

const ShoppingCart = db.define('shoppingCart', {
  price: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = ShoppingCart

/*


*/
