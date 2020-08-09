const router = require('express').Router()
const Order = require('../db/models/order')

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
    const orders = await Order.findAll()
    res.status(200).json(orders)
  } catch (error) {
    next(error)
  }
})
  
router.post('/', async (req, res, next) => {
    try {
    const order = await Order.create(req.body)
    res.status(200).json(order)
  } catch (error) {
    next(error)
  }
})

module.exports = router
