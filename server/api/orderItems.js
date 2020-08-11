const router = require('express').Router()
const OrderItem = require('../db/models/order-item')
const Order = require('../db/models/order')
// const Product = require('../db/models/product')

//POST -> /api/order
router.post('/', async (req, res, next) => {
  try {
    // creates a order_item instance with this information if it does NOT exist
    // UPDATES the existing instance with this new field
    // order.addProduct(product, {through: {quantity: req.body.quantity}}) // quantity: req.body.quantity
    // if we update the price use---->>>> price: req.body.price
    // findOrCreate would also work - look up return value

    const item = await OrderItem.findOrCreate({
      where: {productId: req.body.productId, orderId: req.body.orderId}
    })
    await item[0].update(req.body)
    const order = await Order.findAll({include: {all: true}})
    res.json(order)
  } catch (error) {
    next(error)
  }
})

// router.get('/:orderId/product/:productId', async (req, res, next) => {
//   try {
//     const order = await OrderItem.findOne({
//       where: {
//         orderId: req.params.orderId,
//         productId: req.params.productId,
//       },
//     })
//     res.json(order)
//   } catch (error) {
//     next(error)
//   }
// })

// for admin so they can see all orders
router.get('/', async (req, res, next) => {
  try {
    const order = await Order.findAll({include: {all: true}})
    res.json(order)
  } catch (error) {
    next(error)
  }
})

router.get('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.orderId
      },
      include: {all: true}
    })
    res.json(order)
  } catch (error) {
    next(error)
  }
})

//PATCH --> /api/:orderId/product/:productId
router.patch('/:orderId/product/:productId', async (req, res, next) => {
  try {
    await OrderItem.update(req.body, {
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId
      }
    })
    const order = await Order.findOne({
      where: {
        id: req.params.orderId
      },
      include: {all: true}
    })
    res.json(order)
  } catch (error) {
    next(error)
  }
})

//DELETE --> /api/:orderId/product/:productId
router.delete('/:orderId/product/:productId', async (req, res, next) => {
  try {
    const orderItem = await OrderItem.findOne({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId
      }
    })
    await orderItem.destroy()

    const order = await Order.findOne({
      where: {
        id: req.params.orderId
      },
      include: {all: true}
    })
    res.json(order)
  } catch (error) {
    next(error)
  }
})

module.exports = router
