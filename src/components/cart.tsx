// // THIS IS SIDE SHEET FOR CART
"use client";
import React from "react";
import { UseCart } from "../../action/usecart";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Cart() {
  const router = useRouter();
  const { cart, handleDecrement, handleIncrement, handleRemove } = UseCart();
  const [isOpen, setIsOpen] = React.useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleViewCart = () => {
    setIsOpen(false);
    router.push("/cartdetailpage");
  };

  const handleProceedToCheckout = () => {
    setIsOpen(false);
    router.push("/checkout");
  };

  return (
    <div>
      <ShoppingCart onClick={() => setIsOpen(true)} className="cursor-pointer" size={24} />
  {/* <ShopCards  handleAddToCart={handleAddToCart}/> */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          <SheetHeader >
            <SheetTitle className="text-3xl mb-5 text-center">Your Cart</SheetTitle>
          </SheetHeader>

          {cart.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-lg font-semibold">Your cart is currently empty.</p>
              <Button variant="link" onClick={() => setIsOpen(false)} className="mt-2 text-yellow-300">
                Click here to continue shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mt-5">
                {cart.map((card) => (
                  <div key={card.slug} className="flex justify-between border-t-[1px] py-5 items-center">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={card.image}
                        alt={card.title}
                        className="w-16 h-16 object-cover rounded-md"
                        width={200}
                        height={200}
                      />
                      <div>
                        <h4 className="font-semibold">{card.title}</h4>
                        <p>${card.pricenow}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        className="w-3 h-7 rounded-full bg-white border-black border-[1px] text-black"
                        onClick={() => handleDecrement(card.slug)}
                      >
                        -
                      </Button>
                      <span>{card.quantity}</span>
                      <Button
                        className="w-3 h-7 rounded-full bg-white border-black border-[1px] text-black"
                        onClick={() => handleIncrement(card.slug)}
                      >
                        +
                      </Button>
                      <Button variant="destructive" className="hover:bg-red-300" onClick={() => handleRemove(card.slug)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <h4 className="font-semibold">Total: ${calculateTotal().toFixed(2)}</h4>
              </div>

              <div className="mt-4 flex justify-between space-x-4">
                <Button onClick={handleViewCart} className="w-full">
                  View Cart
                </Button>
                <Button onClick={handleProceedToCheckout} className="w-full">
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}


