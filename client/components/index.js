/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {default as About} from './about'
export {default as Shipping} from './shipping-billing'
export {default as ReviewOrder} from './review-order'
export {default as OrderSubmitted} from './order-submitted'
export {Login, Signup} from './auth-form'
export {default as NewProduct} from './newProduct'
