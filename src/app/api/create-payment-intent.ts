// import { NextApiRequest, NextApiResponse } from "next";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
//   apiVersion: "2022-11-15",
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { amount } = req.body;

//     try {
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount,
//         currency: "usd",
//         payment_method_types: ["card"],
//       });

//       res.status(200).json({ clientSecret: paymentIntent.client_secret });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }
