import { createClient } from "next-sanity";

export const shippingClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-01-01",
  token: process.env.NEXT_PUBLIC_SANITY_SHIPPING_TOKEN,
  useCdn: false,
});
