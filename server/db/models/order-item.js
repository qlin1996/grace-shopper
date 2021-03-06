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
    defaultValue: 100,
    validate: {
      isNumeric: true,
      min: 1
    },
    get() {
      return this.getDataValue('price') / 100
    }
  }
})

module.exports = OrderItem
