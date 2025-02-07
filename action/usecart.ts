// import { useState, useEffect } from "react";
//  interface cartitem {
//     slug:string;
//     title:string;
//     image:string;
//     price:number;
//     quantity:number;
//  }
//  const CARTKEY = "cartItems"
//  export default function UseCart (){
//     const [cart , setCart] = useState<cartitem[]>([])

//     useEffect(()=>{
//       const storedCart = JSON.parse(localStorage.getItem(CARTKEY) || "[]");
//         if(storedCart){setCart(storedCart)}},[])
          
//     useEffect(()=>{
//       localStorage.setItem(CARTKEY,JSON.stringify(cart));},[cart])
    
//       const AddToCart = (card: cartitem) => {
//         setCart((prevcart) =>{
//             const existingitem = prevcart.find(card=>card.slug === card.slug);
//             if (existingitem) {
//                 return prevcart.map((card) => card.slug === card.slug ? { ...card, quantity: card.quantity + 1 } : card)
//             }else{
//                 return[...prevcart ,{...card , quantity :1 }]
//             }})}
//       const handleIncrement = (slug: string) => {
//                 setCart((prevcart)=>prevcart.map((card)=>card.slug === card.slug ? { ...card, quantity: card.quantity + 1 } : card));

//               };
            
//               const handleDecrement = (slug: string) => {
//                 setCart((prevcart)=>prevcart.map((card)=>card.slug === card.slug ? { ...card, quantity: card.quantity - 1 } : card).filter((card)=>card.quantity>0));};
             
//                 const handleRemove = (slug: string) => {
//                   setCart((prevcart)=>prevcart.filter((card)=>card.slug !== card.slug ));};
//              return{cart, AddToCart, handleDecrement, handleIncrement , handleRemove }
        
      
//  }
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Swal from "sweetalert2";
interface CartItem {
  slug: string;
  title: string;
  price: number;
  pricenow:number;
  quantity: number;
  image: string;
}

interface CartState {
  cart: CartItem[];
  AddToCart: (newItem: CartItem) => void;
  handleIncrement: (slug: string) => void;
  handleDecrement: (slug: string) => void;
  handleRemove: (slug: string) => void;
  clearCart: () => void;
}

export const UseCart = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      

AddToCart: (newItem) => {
  set((state) => {
    const existingItem = state.cart.find((item) => item.slug === newItem.slug);

    if (existingItem) {
      Swal.fire({
        icon: "info",
        title: "Cart Updated",
        text: `${newItem.title} quantity increased.`,
        timer: 1500,
        showConfirmButton: false,
      });

      return {
        cart: state.cart.map((item) =>
          item.slug === newItem.slug ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    } else {
      Swal.fire({
        icon: "success",
        title: "Added to Cart",
        text: `${newItem.title} added successfully.`,
        timer: 1500,
        showConfirmButton: false,
      });

      return { cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
  });
},

      handleIncrement: (slug) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }));
      },
      handleDecrement: (slug) => {
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.slug === slug ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        }));
      },
      handleRemove: (slug) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.slug !== slug),
        }));
      },
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);
