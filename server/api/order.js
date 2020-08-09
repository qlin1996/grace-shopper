const router = require('express').Router()
const OrderItem = require('../db/models/order-item')
const Order = require('../db/models/order')
const Product = require('../db/models/product')

//proctection A.K.A. isAdmin
const isAdmin = (req, res, next) => {
  if (!User.user && !User.isAdmin) {
    const error = new Error("you can't hack us")
    res.status(401).send(error)
    return next(error)
  } else {
    next()
  }
}

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const order = await Order.findAll()
    res.json(order).status(200)
  } catch (error) {
    next(error)
  }
})

module.exports = router
