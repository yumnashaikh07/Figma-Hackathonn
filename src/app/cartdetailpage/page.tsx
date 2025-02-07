// // THIS IS DETAILED CART PAGE
"use client";
import Link from "next/link";
import React from "react";
import { UseCart } from "../../../action/usecart";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CartDetailPage = () => {
  const router = useRouter();
  const { cart, handleDecrement, handleIncrement, handleRemove } = UseCart();

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const salesTax = 0.1; 
  const subtotal = calculateSubtotal();
  const totalTax = subtotal * salesTax;
  const total = subtotal + totalTax;

  const handleProceedToCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="flex flex-col md:flex-row p-6 md:p-20 space-y-6 md:space-y-0 md:space-x-10">
      <div className="w-full  space-y-6">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((card) => (
            <div
              key={card.slug}
              className="flex justify-between items-center border-b pb-4"
            >
              <Link
                href={`/shop/${card.slug}`}
                className="flex items-center space-x-4 hover:underline"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-16 h-16 object-cover rounded-md"
                  width={65}
                  height={65}
                />
                <div>
                  <h4 className="font-semibold">{card.title}</h4>
                  <p ><span className="line-through text-gray-500">${card.price}</span><span className="font-bold"> ${card.pricenow}</span></p>
                </div>
              </Link>
              <div className="flex items-center space-x-2">
                <Button
                  className="w-7 h-7  hover:bg-white hover:border-black hover:border-[1px] hover:text-black"
                  onClick={() => handleDecrement(card.slug)}
                >
                  -
                </Button>
                <span>{card.quantity}</span>
                <Button
                  className="w-7 h-7 hover:bg-white hover:border-black hover:border-[1px] hover:text-black"
                  onClick={() => handleIncrement(card.slug)}
                >
                  +
                </Button>
                <Button
                  variant="destructive"
                  className="hover:bg-red-300"
                  onClick={() => handleRemove(card.slug)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
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
          onClick={handleProceedToCheckout}
          className="w-full mt-6 bg-black text-white hover:bg-gray-800"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartDetailPage;
