'use strict'

const db = require('../server/db')
const {User, Product} = require('../server/db/models')

const products = [
  {
    name: 'head & shoulders',
    description: 'good for your hair',
    price: 799,
    quantity: 10
  },
  {name: 'axe', description: 'you will smell good', price: 5.99, quantity: 10},
  {
    name: 'cantu',
    description: 'good for your hair',
    price: 1099,
    quantity: 10
  }
]

const users = [
  {
    firstName: 'Daniel',
    lastName: 'polc',
    email: 'polc@gmail.com',
    streetAddress: '23 something',
    city: 'nyc',
    state: 'new york',
    zipCode: 11234,
    password: 'bjcsdubvibjv'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(
    products.map(product => {
      return Product.create(product)
    })
  )

  await Promise.all(
    users.map(user => {
      return User.create(user)
    })
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
