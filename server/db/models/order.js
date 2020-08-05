const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isFulfilled: {
    type: Sequelize.ENUM('yes', 'no'),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    defaultValue: 'no'
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  //to allow users to potentially sort their order
  date: {
    type: Sequelize.DATE
  }
})

module.exports = Order
