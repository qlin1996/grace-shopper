const router = require('express').Router()
const Order = require('../db/models/order')
const {User} = require('../db/models')

//proctection A.K.A. isAdmin
const isAdmin = (req, res, next) => {
  if (User.isAdmin === 'no') {
    const error = new Error("you can't hack us")
    res.status(401).send(error)
    return next(error)
  } else {
    next()
  }
}

//GET --> /api/orders/
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.status(200).json(orders)
  } catch (error) {
    next(error)
  }
})

//POST --> /api/orders/
router.post('/', async (req, res, next) => {
  try {
    const order = await Order.create(req.body)
    res.status(200).json(order)
  } catch (error) {
    next(error)
  }
})

//PATCH --> /api/orders/:id
router.patch('/:id', async (req, res, next) => {
  try {
    await Order.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    const orderSubmitted = await Order.findByPk(req.params.id)
    res.json(orderSubmitted)
  } catch (error) {
    next(error)
  }
})

module.exports = router
