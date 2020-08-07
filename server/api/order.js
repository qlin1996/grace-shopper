const router = require('express').Router()
const OrderItem = require('../db/models/order-item')
const Order = require('../db/models/order')
const Product = require('../db/models/product')

router.get('/', async (req, res, next) => {
  try {
    const order = await Order.findAll()
    res.json(order).status(200)
  } catch (error) {
    next(error)
  }
})

module.exports = router
