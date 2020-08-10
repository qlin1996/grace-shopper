const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 1
    },
    get() {
      return this.getDataValue('price') / 100
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: 'https://i.ytimg.com/vi/_ph7TzyW318/maxresdefault.jpg',
    validate: {
      notEmpty: true
    }
  },
  quantityInStock: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  category: {
    type: Sequelize.ENUM('Computer', 'Tablet', 'TV', 'Phone'),
    defaultValue: 'Computer'
  }
})

//hook
module.exports = Product
