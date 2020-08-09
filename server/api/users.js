const router = require('express').Router()
const {User, Order} = require('../db/models')
module.exports = router

//protection A.K.A. isAdmin
const isAdmin = (req, res, next) => {
  if (!User.user && !User.isAdmin) {
    const error = new Error("you can't hack us")
    res.status(401).send(error)
    return next(error)
  } else {
    next()
  }
}

//GET --> /api/users
router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// ONLY ALLOW ADMINS AND THAT SPECIFC USER TO GET/EDIT USER FILE

//GET --> /api/users/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    res.json(user)
  } catch (error) {
    next(error)
  }
})

//PUT --> /api/users/:id
router.put('/:userId', async (req, res, next) => {
  try {
    await User.findOne({
      where: {
        id: req.params.userId
      }
      // include: Order // ??
    })
      .then(user => user.update(req.body))
      .then(user => {
        res.json(user)
      })
      .catch(next)
  } catch (error) {
    next(error)
  }
})
