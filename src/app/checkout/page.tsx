// THIS PAGE CONTAINS ORDER SUMMARY AS WELL AS SHIPPING DETAILS AS SHIPPING DETAILS FORM COMPONENT
"use client"
import { useRouter } from "next/navigation";
import { UseCart } from "../../../action/usecart";
import { Button } from "@/components/ui/button";
import ShippingForm from "@/components/shippingdetailform";
  

export default function CheckoutPage(){
    const router = useRouter();
    const { cart } = UseCart();
  
    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    
      const salesTax = 0.1; 
      const subtotal = calculateSubtotal();
      const totalTax = subtotal * salesTax;
      const total = subtotal + totalTax;
      const handleProceedToPayemnt = () => {
        router.push("/payment");
      };
  
      return(
        <main className="bg-gray-100 grid grid-cols-1 md:p-10 md:flex md:justify-between">
        <section  className=" md:w-[700px] ">
      <ShippingForm />

        </section>


        <div className="w-[387px] md:w-[350px] bg-gray-100 p-6 md:border-none border-black border-[1px] md:ml-0 ml-3 md:mr-0 mr-3 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Sales Tax (10%):</span>
            <span>${totalTax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <Button
          onClick={handleProceedToPayemnt}
          className="w-full mt-6 bg-black text-white hover:bg-gray-500"
        >
          Proceed to Payment
        </Button>
      </div>
        </main>
    )
}