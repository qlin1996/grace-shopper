const router = require('express').Router()
const {ShoppingCart, Product, User} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const cart = await ShoppingCart.findAll({
      include: Product
    })
    res.json(cart)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const userCart = await User.findOne({
      where: {
        id: req.params.id
      },
      include: Product
    })
    res.json(userCart)
  } catch (error) {
    next(error)
  }
})

module.exports = router
