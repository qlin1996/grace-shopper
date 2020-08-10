const router = require('express').Router()
const {Product} = require('../db/models')
const {User} = require('../db/models')

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

const isAdmin = (req, res, next) => {
  if (User.isAdmin === 'no') {
    const error = new Error("you can't hack us")
    res.status(401).send(error)
    return next(error)
  } else {
    next()
  }
}
// Post route for admin - Add products
router.post('/', isAdmin, async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body)
    res.json(newProduct)
  } catch (error) {
    next(error)
  }
})
// Put route for admin - Edit products
router.put('/:id', isAdmin, async (req, res, next) => {
  try {
    const item = await Product.findByPk(req.params.id)
    const updatedItem = item.update(req.body)
    res.json(updatedItem)
  } catch (error) {
    next(error)
  }
})
// Delete route for admin - Remove products
router.delete('/:id', isAdmin, async (req, res, next) => {
  try {
    const item = await Product.findByPk(req.params.id)
    const destroyedItem = await item.destroy()
    res.json(destroyedItem)
  } catch (error) {
    next(error)
  }
})

module.exports = router
