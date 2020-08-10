'use strict'

const db = require('../server/db')
const {User, Product, Order, OrderItem} = require('../server/db/models')

const products = [
  {
    name: 'head & shoulders',
    description: 'good for your hair',
    price: 799,
    quantity: 10,
    category: 'Phone'
  },
  {name: 'axe', description: 'you will smell good', price: 599, quantity: 10},
  {
    name: 'cantu',
    description: 'good for your hair',
    price: 1099,
    quantity: 10,
    category: 'Computer'
  },
  {
    name: 'Tablet',
    description: 'good for your hair',
    price: 1099,
    quantity: 10,
    category: 'Tablet'
  },
  {
    name: 'Tablet Mini',
    description: 'good for your hair',
    price: 1111,
    quantity: 10,
    category: 'Tablet'
  },
  {
    name: 'CRT TV ',
    description: 'good for your hair',
    price: 1099,
    quantity: 10,
    category: 'TV'
  },
  {
    name: 'OLed',
    description: 'good for your hair',
    price: 1099,
    quantity: 10,
    category: 'TV'
  },
  {
    name: 'Plasma',
    description: 'good for your hair',
    price: 1099,
    quantity: 10,
    category: 'TV'
  },
  {
    name: 'Juke',
    description: 'good for your hair',
    price: 1099,
    quantity: 10,
    category: 'Phone'
  },
  {
    name: 'Google Pixel',
    description: 'good for your hair',
    price: 1099,
    quantity: 10,
    category: 'Phone'
  }
]

const users = [
  {
    firstName: 'Daniel',
    lastName: 'polc',
    email: 'polc@gmail.com',
    password: 'bjcsdubvibjv',
    billingStreetAddress: '23 something',
    billingCity: 'nyc',
    billingState: 'new york',
    billingZipCode: 11234,
    shippingStreetAddress: '23 something',
    shippingCity: 'nyc',
    shippingState: 'new york',
    shippingZipCode: 11234
  },
  {
    firstName: 'marco',
    lastName: 'polo',
    email: 'polomarc@gmail.com',
    password: 'bjcsdubvibjv',
    billingStreetAddress: '23 something',
    billingCity: 'nyc',
    billingState: 'new york',
    billingZipCode: 11234,
    shippingStreetAddress: '23 something',
    shippingCity: 'nyc',
    shippingState: 'new york',
    shippingZipCode: 11234
  },
  {
    firstName: 'Simon',
    lastName: 'Zeng',
    email: 'zeng.simonl@gmail.com',
    password: 'bjcsdubvibjv',
    billingStreetAddress: '23 something',
    billingCity: 'nyc',
    billingState: 'new york',
    billingZipCode: 11234,
    shippingStreetAddress: '23 something',
    shippingCity: 'nyc',
    shippingState: 'new york',
    shippingZipCode: 11234,
    isAdmin: 'yes'
  }
]

const orders = [
  {
    userId: 1
  },
  {
    userId: 2
  }
]

const orderitems = [
  {
    quantity: 5,
    price: 799,
    productId: 1,
    orderId: 1
  },
  {
    quantity: 4,
    price: 799,
    productId: 2,
    orderId: 2
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

  await Promise.all(
    orders.map(order => {
      return Order.create(order)
    })
  )

  await Promise.all(
    orderitems.map(item => {
      return OrderItem.create(item)
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
