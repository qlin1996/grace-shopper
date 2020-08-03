const router = require('express').Router()
const Product = require('../db/models/product')

//GET --> /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

//GET --> /api/products/:id
router.get('/:id', async (req, res, next) => {
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
