import {Heart} from "lucide-react";
export default function WishList (){
    return(
        <><Heart size={24} /></>
    )
}

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "./ui/button";
// import { FaList, FaTh } from "react-icons/fa";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// interface CardsType {
//   slug: string;
//   image: string;
//   title: string;
//   price: number;
//   pricenow: number;
//   colors: string[];
// }

// const Cards: CardsType[] = [
//   {
//     slug: "1",
//     image: "/shop1.webp",
//     title: "Bold Nest",
//     price: 360,
//     pricenow: 260,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "2",
//     image: "/shop2.webp",
//     title: "Sunny Chic",
//     price: 500,
//     pricenow: 400,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "3",
//     image: "/shop3.webp",
//     title: "Reflective Haven",
//     price: 500,
//     pricenow: 300,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "4",
//     image: "/shop4.webp",
//     title: "Modern Serenity",
//     price: 690,
//     pricenow: 480,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "5",
//     image: "/shop5.webp",
//     title: "Timeless Elegance",
//     price: 420,
//     pricenow: 320,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "6",
//     image: "/shop6.webp",
//     title: "Nordic Elegance",
//     price: 380,
//     pricenow: 280,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "7",
//     image: "/hop7.webp",
//     title: "Serene Seat",
//     price: 400,
//     pricenow: 350,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "8",
//     image: "/shop8.webp",
//     title: "Sleek Living",
//     price: 400,
//     pricenow: 300,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "9",
//     image: "/shop9.webp",
//     title: "Tropical Vibe",
//     price: 650,
//     pricenow: 550,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "10",
//     image: "/shop10.webp",
//     title: "Zen Table",
//     price: 350,
//     pricenow: 250,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "11",
//     image: "/shop11.webp",
//     title: "Pure Aura",
//     price: 480,
//     pricenow: 280,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "12",
//     image: "/shop12.webp",
//     title: "The Lucky Lamp",
//     price: 200,
//     pricenow: 100,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "13",
//     image: "/shop13.webp",
//     title: "Retro Vibe",
//     price: 500,
//     pricenow: 340,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "14",
//     image: "/shop14.webp",
//     title: "Wood Chair",
//     price: 200,
//     pricenow: 100,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "15",
//     image: "/shop15.webp",
//     title: "Bed",
//     price: 600,
//     pricenow: 500,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "16",
//     image: "/shop16.webp",
//     title: "Syltherine",
//     price: 300,
//     pricenow: 200,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "17",
//     image: "/shop17.webp",
//     title: "Marble Ease",
//     price: 500,
//     pricenow: 419,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "18",
//     image: "/shop18.webp",
//     title: "Vase Set",
//     price: 200,
//     pricenow: 150,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "19",
//     image: "/shop19.webp",
//     title: "The Dandy chair",
//     price: 300,
//     pricenow: 150,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "20",
//     image: "/shop20.webp",
//     title: "Bright Space",
//     price: 200,
//     pricenow: 180,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "21",
//     image: "/shop21.webp",
//     title: "Cloud Haven Chair",
//     price: 400,
//     pricenow: 230,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "22",
//     image: "/shop22.webp",
//     title: "Amber Haven",
//     price: 500,
//     pricenow: 400,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "23",
//     image: "/shop23.webp",
//     title: "Timber Craft",
//     price: 400,
//     pricenow: 320,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
//   {
//     slug: "24",
//     image: "/shop24.webp",
//     title: "Rustic Vase Set",
//     price: 420,
//     pricenow: 210,
//     colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
//   },
// ];

// function PriceFilter({ onFilter }: { onFilter: (range: number[]) => void }) {
//   const handleFilter = (min: number, max: number) => {
//     onFilter([min, max]);
//   };

//   return (
//     <>
//       <section className="grid grid-cols-1 md:grid-cols-3 md:px-0 px-20  py-0 md:py-9 ">
//         <div>
//           <h3 className="text-gray-500 md:ml-20 ml-0 md:mt-3 mt-5 font-bold text-base md:text-lg">
//             Showing All 24 results
//           </h3>
//         </div>
//         <div className="flex justify-between md:mt-0 mt-7  ">
//           <h3 className="text-gray-500 font-bold md:ml-28 text-lg mt-2">
//             Views:
//           </h3>
//           <div className="flex justify-between  space-x-2">
//             <FaList size={30} />
//             <FaTh size={30} />
//           </div>
//         </div>
//         <Sheet>
//           <SheetTrigger className="bg-[#e6c93d] mb-7 text-white ml-32 py-3 rounded-sm  ">
//             Filter
//           </SheetTrigger>
//           <SheetContent className="space-y-3 grid grid-rows-1">
//             <SheetHeader>SET PRICE RANGE HERE</SheetHeader>

//             <Button
//               onClick={() => handleFilter(0, 200)}
//               className="bg-[#e6c93d]  text-white px-4 py-2 rounded"
//             >
//               Below $200
//             </Button>
//             <Button
//               onClick={() => handleFilter(200, 400)}
//               className="bg-[#e6c93d]  text-white px-4 py-2 rounded"
//             >
//               $200 - $400
//             </Button>
//             <Button
//               onClick={() => handleFilter(400, 600)}
//               className="bg-[#e6c93d]  text-white px-4 py-2 rounded"
//             >
//               $400 - $600
//             </Button>
//             <Button
//               onClick={() => handleFilter(600, Infinity)}
//               className="bg-[#e6c93d]  text-white px-4 py-2 rounded"
//             >
//               Above $600
//             </Button>
//           </SheetContent>
//         </Sheet>
//       </section>
//     </>
//   );
// }

// export default function ShopCards() {
//   const [filteredCards, setFilteredCards] = useState<CardsType[]>(Cards);

//   const handlePriceFilter = (range: number[]) => {
//     const [min, max] = range;
//     const filtered = Cards.filter(
//       (card) => card.pricenow >= min && card.pricenow <= max
//     );
//     setFilteredCards(filtered);
//   };
//   const addToCart = (card: CardsType) => {
//     const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     const updatedCart = [...existingCart, { ...card, quantity: 1 }];
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };
//   return (
//     <main className="p-10">
//       <PriceFilter onFilter={handlePriceFilter} />
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
//         {filteredCards.map((card, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <Link href={`/shop/${card.slug}`}>
//               <Image
//                 src={card.image}
//                 alt={card.title}
//                 width={277}
//                 height={347}
//               />
//             </Link>
//             <h2 className="text-gray-900 font-bold my-3">{card.title}</h2>
//             <p className="text-gray-400 font-bold">
//               ${card.price}
//               <span className="text-green-500 font-bold">
//                 {" "}
//                 ${card.pricenow}
//               </span>
//             </p>
//             <div className="flex space-x-2">
//               {card.colors.map((color, i) => (
//                 <div
//                   key={i}
//                   className="w-5 h-5 rounded-full"
//                   style={{ backgroundColor: color }}
//                 ></div>
//               ))}
//             </div>
//             <Button onClick={() => addToCart(card)} className="mt-3 ">
//               Add to Cart
//             </Button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


