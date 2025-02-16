"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { UseCart } from "../../action/usecart"
interface CardsType{
    quantity?: number;
    image:string,
    title:string,
    description:string,
    price : number,
    pricenow: number,
    colors: string[],
    slug :string
}
const Cards: CardsType[] = [
  // {
  //     slug:"1",
  //     image:"/herocard011.png",
  //     title:"Graphic Design",
  //     description:"English Department",
  //     price : 16.48 ,
  //     pricenow:6.48,
  //     colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  // },
  // {
  //     slug:"2",
  //     image:"/herocard022.png",
  //     title:"Graphic Design",
  //     description:"English Department",
  //     price : 16.48 ,
  //     pricenow:6.48,
  //     colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  // }
  // ,
  // {
  //     slug:"3",
  //     image:"/herocard033.png",
  //     title:"Graphic Design",
  //     description:"English Department",
  //     price : 16.48 ,
  //     pricenow:6.48,
  //     colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  // },
  // {
  //     slug:"4",
  //     image:"/herocard044.png",
  //     title:"Graphic Design",
  //     description:"English Department",
  //     price : 16.48 ,
  //     pricenow:6.48,
  //     colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  // },
  // //SECTION OF CARDS START HERE
  // {
  //     slug:"5",
  //     image:"/herocard055.png",
  //     title:"Graphic Design",
  //     description:"English Department",
  //     price : 16.48 ,
  //     pricenow:6.48,
  //     colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  // },
  // {
  //     slug:"6",
  //     image:"/herocard066.png",
  //     title:"Graphic Design",
  //     description:"English Department",
  //     price : 16.48 ,
  //     pricenow:6.48,
  //     colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  // },
  // {
  //     slug:"7",
  //     image:"/herocard077.png",
  //     title:"Graphic Design",
  //     description:"English Department",
  //     price : 16.48 ,
  //     pricenow:6.48,
  //     colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  // },
  // {
  //     slug:"8",
  //     image:"/herocard088.png",
  //     title:"Graphic Design",
  //     description:"English Department",
  //     price : 16.48 ,
  //     pricenow:6.48,
  //     colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
  // }
  {
    slug: "1",
    image: "/shop1.webp",
    title: "Bold Nest",
    description: "English Department",
    price: 360,
    pricenow: 260,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    slug: "2",
    image: "/shop2.webp",
    title: "Sunny Chic",
    description: "English Department",
    price: 500,
    pricenow: 400,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    slug: "5",
    image: "/shop5.webp",
    title: "Timeless Elegance",
    description: "English Department",
    price: 420,
    pricenow: 320,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    slug: "4",
    image: "/shop4.webp",
    title: "Modern Serenity",
    description: "English Department",
    price: 690,
    pricenow: 480,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    slug: "3",
    image: "/shop3.webp",
    title: "Reflective Haven",
    description: "English Department",
    price: 500,
    pricenow: 300,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    slug: "6",
    image: "/shop6.webp",
    title: "Nordic Elegance",
    description: "English Department",
    price: 380,
    pricenow: 280,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    slug: "7",
    image: "/hop7.webp",
    title: "Serene Seat",
    description: "English Department",
    price: 400,
    pricenow: 350,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    slug: "8",
    image: "/shop8.webp",
    title: "Sleek Living",
    description: "English Department",
    price: 400,
    pricenow: 300,
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
];
export default function HeroCards (){
    const AddToCart = UseCart((state) => state.AddToCart);
 return(
    <main className="grid grid-cols-1 md:grid-cols-4  md:space-y-0 space-y-5 space-x-0 md:space-x-5 text-center p-5  md:p-24 ">
        {Cards.map((card, index) =>(
            <div key={index} className="flex flex-col shadow-2xl p-5  items-center">
                <Link href={`/shop/${card.slug}`}>
                    <Image src={card.image} alt="hero card" width={240} height={427}/>
                </Link>
                
                <h2 className="text-gray-900 font-bold my-3">{card.title}</h2>
                <p className="text-gray-400 font-bold mb-3">{card.description}</p>

                    <p className="text-gray-400  font-bold">${card.price}<span  className="text-[#23856D] font-bold">${card.pricenow}</span></p>
                    
                    <div className="flex space-x-[3px] md:mb-20 ">{card.colors.map((color, index) =>(
                        <div key={index} className="w-5 h-5 rounded-full " style={{backgroundColor:color}}></div>
                        
                    ))}</div>
                    <Button onClick={() => AddToCart({ ...card, quantity: card.quantity ?? 1 })} className="mt-3 bg-[#e6c93d] text-white px-4 py-2 rounded">
              Add to Cart
            </Button>
                </div>
        ))}
    </main>
 )
}

