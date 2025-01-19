import { defineType } from "sanity";

export const wishlist = defineType({
  name: "wishlist",
  title: "Wishlist",
  type: "document",
  fields: [
    // {
    //   name: "user",
    //   title: "User",
    //   type: "reference",
    //   to: [{ type: "user" }], // Assuming you have a User document in Sanity
    // },
    {
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }], // Product reference from your products schema
    },
    {
      name: "addedAt",
      title: "Added At",
      type: "datetime",
      initialValue: { type: "now" },
    },
  ],
});
