"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UseCart } from "../../action/usecart";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

import { Slider } from "@/components/ui/slider"; // Adjust the import according to your project structure

interface CardsType {
  quantity?: number;
  slug: string;
  image: string;
  title: string;
  price: number;
  pricenow: number;
  colors: string[];
  
}

const Cards: CardsType[] = [
  { slug: "1", image: "/shop1.webp", title: "Bold Nest", price: 360, pricenow: 260, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "2", image: "/shop2.webp", title: "Sunny Chic", price: 500, pricenow: 400, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "3", image: "/shop3.webp", title: "Reflective Haven", price: 500, pricenow: 300, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "4", image: "/shop4.webp", title: "Modern Serenity", price: 690, pricenow: 480, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "5", image: "/shop5.webp", title: "Timeless Elegance", price: 420, pricenow: 320, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "6", image: "/shop6.webp", title: "Nordic Elegance", price: 380, pricenow: 280, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "7", image: "/hop7.webp", title: "Serene Seat", price: 400, pricenow: 350, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "8", image: "/shop8.webp", title: "Sleek Living", price: 400, pricenow: 300, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "9", image: "/shop9.webp", title: "Tropical Vibe", price: 650, pricenow: 550, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "10", image: "/shop10.webp", title: "Zen Table", price: 350, pricenow: 250, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "11", image: "/shop11.webp", title: "Pure Aura", price: 480, pricenow: 280, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "12", image: "/shop12.webp", title: "The Lucky Lamp", price: 200, pricenow: 100, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "13", image: "/shop13.webp", title: "Retro Vibe", price: 500, pricenow: 340, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "14", image: "/shop14.webp", title: "Wood Chair", price: 200, pricenow: 100, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "15", image: "/shop15.webp", title: "Bed", price: 600, pricenow: 500, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "16", image: "/shop16.webp", title: "Syltherine", price: 300, pricenow: 200, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "17", image: "/shop17.webp", title: "Marble Ease", price: 500, pricenow: 419, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "18", image: "/shop18.webp", title: "Vase Set", price: 200, pricenow: 150, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "19", image: "/shop19.webp", title: "The Dandy chair", price: 300, pricenow: 150, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "20", image: "/shop20.webp", title: "Bright Space", price: 200, pricenow: 180, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "21", image: "/shop21.webp", title: "Cloud Haven Chair", price: 400, pricenow: 230, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "22", image: "/shop22.webp", title: "Amber Haven", price: 500, pricenow: 400, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "23", image: "/shop23.webp", title: "Timber Craft", price: 400, pricenow: 320, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { slug: "24", image: "/shop24.webp", title: "Rustic Vase Set", price: 420, pricenow: 210, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] }
];

function PriceFilter({ onFilter }: { onFilter: (range: number[]) => void }) {
  const [sliderValue, setSliderValue] = useState([0, 1000]); 

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
  };

  const handleApplyFilter = () => {
    onFilter(sliderValue);
  };

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 md:px-0 px-20  py-0 md:py-3 ">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="border-[1px] border-gray-500 px-5"
          >
            <AccordionTrigger className="">Filter</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p className="text-gray-500 flex justify-between">
                  {sliderValue[0]}
                  <span> {sliderValue[1]}</span>
                </p>
                <Slider
                  value={sliderValue}
                  onValueChange={handleSliderChange}
                  min={0}
                  max={1000}
                  step={10}
                  className="w-full"
                />
                <Button
                  onClick={handleApplyFilter}
                  className="bg-[#575651] text-white px-2 py-2 rounded"
                >
                  Apply Filter
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}

export default function ShopCards() {
  // const{AddToCart}=UseCart()
  // const {AddToCart} = UseCart();
  const AddToCart = UseCart((state) => state.AddToCart);
  const [filteredCards, setFilteredCards] = useState<CardsType[]>(Cards);

  const handlePriceFilter = (range: number[]) => {
    const [min, max] = range;
    const filtered = Cards.filter(
      (card) => card.pricenow >= min && card.pricenow <= max
    );
    setFilteredCards(filtered);
  };
  return (
    <main className="p-10">
      <PriceFilter onFilter={handlePriceFilter} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {filteredCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col shadow-2xl p-5 items-center"
          >
            <Link href={`/shop/${card.slug}`}>
              <Image
                src={card.image}
                alt={card.title}
                width={277}
                height={347}
              />
            </Link>
            <h2 className="text-gray-900 font-bold my-3">{card.title}</h2>
            <p className="text-gray-400 font-bold">
              ${card.price}
              <span className="text-green-500 font-bold">
                {" "}
                ${card.pricenow}
              </span>
            </p>
            <div className="flex space-x-2">
              {card.colors.map((color, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
            <Button onClick={() => AddToCart({ ...card, quantity: card.quantity ?? 1 })} className="mt-3 bg-[#e6c93d] text-white px-4 py-2 rounded">
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
