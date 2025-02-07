// "use server";

// import Stripe from "stripe";

// export async function createPaymentIntent() {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//     apiVersion: "2024-12-18.acacia", // or the latest stable version
//   });
//   try {
//     // You can hardcode an amount here, e.g. $20 = 2000 in cents
//     const amount = 2000; // USD 20.00

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "usd",
//       // Optionally, you can add metadata or other parameters
//       automatic_payment_methods: {
//         enabled: true,
//       },
//     });

//     return {
//       clientSecret: paymentIntent.client_secret,
//     };
//   } catch (error) {
//     // In a real app, you should handle the error properly
//     console.error(error);
//     throw error;
//   }
// }


// "use server";

// import Stripe from "stripe";

// export async function createPaymentIntent(totalPrice: number) {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//     apiVersion: "2024-12-18.acacia", 
//   });

//   try {
  
//     const amount = Math.round(totalPrice * 100); // Converts dollars to cents

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "usd",
//       automatic_payment_methods: {
//         enabled: true,
//       },
//     });

//     return {
//       clientSecret: paymentIntent.client_secret,
//     };
//   } catch (error) {
//     // Handle errors gracefully
//     console.error("Error creating payment intent:", error);
//     throw new Error("Failed to create payment intent");
//   }
// }
