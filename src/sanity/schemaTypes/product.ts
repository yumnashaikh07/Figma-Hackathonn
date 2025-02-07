// //Product detail page Schema
// export default {
//     name: 'product',
//     title: 'Product',
//     type: 'document',
//     fields: [
//       {
//         name: 'name',
//         title: 'Name',
//         type: 'string'
//       },
//       {
//         name: 'description',
//         title: 'Description',
//         type: 'text'
//       },
//       {
//         name: 'price',
//         title: 'Price',
//         type: 'number'
//       },
//       {
//         name: 'image',
//         title: 'Image',
//         type: 'image',
//         options: {
//           hotspot: true
//         }
//       },
//       {
//         name: 'category',
//         title: 'Category',
//         type: 'string'
//       },
//       {
//         name: 'availability',
//         title: 'Availability',
//         type: 'string',
//         options: {
//           list: ['In Stock', 'Out of Stock']
//         }
//       }
//     ]
//   }
  
import { defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "productImage",
      title: "Product Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true, // Allows setting a focal point for images
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
      validation: (Rule) =>
        Rule.min(0).max(100).error("Discount must be between 0 and 100%"),
    },
    {
      name: "isNew",
      title: "New Badge",
      type: "boolean",
      description: "Indicate if the product is new",
    },
    {
      name: "stockQuantity",
      title: "Stock Quantity",
      type: "number",
      validation: (Rule) => Rule.required().min(0).error("Stock quantity must be a non-negative number"),
    }
    
    
  ],
});
