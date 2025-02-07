import { type SchemaTypeDefinition } from 'sanity'
// import productdetail from './productdetail'
// import servicedetail from './servicedetail'
// import bookingform from './bookingform'
import { product } from './product'
import signupform from './signupform'
import signin from './signin'
import shippingdetails from './shippingdetails'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,signupform,signin,shippingdetails],
}
