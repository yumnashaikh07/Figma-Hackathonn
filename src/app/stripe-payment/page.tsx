// "use client";

// import { useEffect, useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import Swal from "sweetalert2";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

// export default function StripePaymentPage({ totalPrice }: { totalPrice: number }) {
//   const [clientSecret, setClientSecret] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPaymentIntent = async () => {
//       const response = await fetch("/api/create-payment-intent", {
//         method: "POST",
//         body: JSON.stringify({ totalPrice }),
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await response.json();
//       setClientSecret(data.clientSecret);
//     };

//     fetchPaymentIntent();
//   }, [totalPrice]);

//   return (
//     <div>
//       {clientSecret && (
//         <Elements stripe={stripePromise} options={{ clientSecret }}>
//           <CheckoutForm />
//         </Elements>
//       )}
//     </div>
//   );
// }

// function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!stripe || !elements) return;

//     const { error } = await stripe.confirmPayment({
//       elements,
//       confirmParams: { return_url: "/order-success" },
//     });

//     if (error) {
//       Swal.fire("Error", error.message || "Payment failed", "error");
//     } else {
//       Swal.fire("Success", "Payment successful!", "success");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <button type="submit" className="mt-4 bg-black text-white px-4 py-2">
//         Pay Now
//       </button>
//     </form>
//   );
// }
export default function Priceintent(){
  return(
    <></>
  )
} 