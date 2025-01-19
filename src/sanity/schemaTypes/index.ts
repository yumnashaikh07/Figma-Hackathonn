import { type SchemaTypeDefinition } from 'sanity'
// import productdetail from './productdetail'
import servicedetail from './servicedetail'
import bookingform from './bookingform'
import { product } from './product'
import { wishlist } from './wishlist'
import herocards from './herocards'
// import cart from './cart'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,servicedetail,bookingform,],
}
