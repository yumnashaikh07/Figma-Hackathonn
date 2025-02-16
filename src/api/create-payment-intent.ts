// import { NextApiRequest, NextApiResponse } from "next";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//   apiVersion: "2023-08-16",
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     try {
//       const { amount } = req.body;
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: Math.round(amount * 100),
//         currency: "usd",
//         payment_method_types: ["card"],
//       });

//       res.status(200).json({ clientSecret: paymentIntent.client_secret });
//     } catch (error: any) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }

