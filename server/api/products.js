const router = require('express').Router()
const {Product} = require('../db/models')

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

//GET --> /api/products
router.get('/', isAdmin, async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

//GET --> /api/products/:id
router.get('/:id', isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(product)
  } catch (error) {
    next(error)
  }
})

module.exports = router
