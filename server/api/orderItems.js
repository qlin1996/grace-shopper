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

router.post('/', isAdmin, async (req, res, next) => {
  try {
    // req.body.productId, req.body.orderId
    const order = Order.findByPk(req.body.orderId)
    const product = Product.findByPk(req.body.productId)

    // creates a order_item instance with this information if it does NOT exist
    // UPDATES the existing instance with this new field
    //order.addProduct(product, {through: {quantity: req.body.quantity}}) // quantity: req.body.quantity
    // if we update the price use---->>>> price: req.body.price
    // findOrCreate would also work - look up return value
    const misteriousItem = await OrderItem.findOrCreate({
      where: {productId: req.body.productId, orderId: req.body.orderId}
    })
    await misteriousItem[0].update(req.body)
    res.json(misteriousItem).status(200)
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

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const order = await Order.findAll({include: {all: true}})
    res.json(order)
  } catch (error) {
    next(error)
  }
})

module.exports = router
