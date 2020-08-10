const router = require('express').Router()
const {Product} = require('../db/models')

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

//PATCH --> /api/products/:id
router.patch('/:id', async (req, res, next) => {
  try {
    const productObj = {}
    if (req.body.quantityInStock) {
      productObj.quantityInStock = req.body.quantityInStock
    }
    await Product.update(productObj, {
      where: {
        id: req.params.id
      }
    })
    const updatedProduct = await Product.findByPk(req.params.id)
    res.json(updatedProduct)
  } catch (error) {
    next(error)
  }
})

module.exports = router
