const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('orderItem', {
  quantity: {
    type: Sequelize.INTEGER
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
  // hooks: {
  //   beforeSave() {
  //     price = parseFloat(price)
  //   },
  // },
})

module.exports = OrderItem
