import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import HeroCards from "./herocards";

export default function Herosection() {
  return (
    <main>
      <div className="relative md:mb-14 ">
        <Image
          src={"/herosection1.jpg"}
          layout="fill"
          objectFit="cover"
          alt=""
          className=" md:flex hidden md:absolute md:inset-0  "
        />
        <Image
        //  src={"/herosection1.jpg"}
        //  layout="fill"
        //  objectFit="cover"
          src={"/hero2.jpg"}
          width={414}
          height={716}
          alt=""
          className="md:hidden absolute inset-0 w-full object-cover"
        />
        <div className="relative text-center md:text-left text-white p-7 md:p-32">
          <h5 className="font-bold text-sm md:mt-16  mt-52">SUMMER 2020</h5>
          <h1 className="font-bold text-5xl  md:text-5xl my-9">
            NEW COLLECTION
          </h1>
          <h3 className="md:font-semibold text-xl md:text-lg">
            We Know how large objects will act,
          </h3>
          <h3 className="md:font-semibold text-xl md:text-lg mb-9 md:mb-5">
            but things on small scale
          </h3>
          <Button className="bg-[#e6c93d] md:rounded-sm px-16 md:px-9 rounded-lg py-8 md:py-6">
            <Link href={"/shop"} className="text-xl font-semibold">SHOP NOW</Link>
          </Button>
        </div>
      </div>

      <section className="bg-[#fff] md:py-0 py-44 px-11 md:px-0 md:p-28">
        <div className="flex flex-col text-center">
          <h1 className="font-bold  md:mt-5 mt-16 text-3xl">EDITORS PICK</h1>
          <p className="text-[#737373] mb-9">
            Problems trying to resolve the conflict
          </p>
        </div>
        <div className="grid grid-cols-1 md:flex md:justify-between  md:px-20">
          
          <div>
            <Image
              src={"/cushion2.webp"}
              width={510}
              height={500}
              alt=""
              className=" hidden md:flex"
            />
          </div>
          {/* <div>
            <Image
              src={"/filter02.png"}
              width={324}
              height={500}
              alt=""
              className="md:hidden "
            />
          </div> */}
          <div>
            <Image
              src={"/vase2.webp"}
              width={440}
              height={400}
              alt=""
              className=" hidden md:flex"
            />
          </div>
          {/* <div>
            <Image
              src={"/editor02.png"}
              width={324}
              height={500}
              alt=""
              className="md:hidden my-7"
            />
          </div> */}
          <div className="flex flex-col space-y-5">
            <div>
              <Image
                src={"/lamp5.webp"}
                width={240}
                height={242}
                alt=""
                className=" hidden md:flex"
              />
              {/* <Image
                src={"/editor03a.png"}
                width={324}
                height={242}
                alt=""
                className="md:hidden "
              /> */}
            </div>

            <div>
              <Image
                src={"/lamp6.webp"}
                width={240}
                height={242}
                alt=""
                className=" hidden md:flex"
              />
              {/* <Image
                src={"/editor03b.png"}
                width={324}
                height={242}
                alt=""
                className="md:hidden "
              /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className=" flex flex-col md:px-0 px-11 text-center justify-center">
          <h5 className="text-xl font-semibold  mt-16 text-[#737373]">
            Featured Products
          </h5>
          <h1 className="font-bold text-3xl  my-3">BESTSELLER PRODUCTS</h1>
          <p className="text-[#737373]">
            Problems trying to resolve the conflict
          </p>
        </div>
        <HeroCards/>
      </section>
      {/* <section className="bg-[#23856D] md:h-[570px]  text-white grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-20 md:ml-28">
          <h5 className="font-semibold text-sm text-gray-300 mt-5">
            SUMMER 2020
          </h5>
          <h1 className="font-bold text-6xl mt-9">Vita Classic</h1>
          <h1 className="font-bold text-6xl mb-9">Product</h1>
          <h3 className="font-semibold text-lg text-gray-300 ">
            We Know how large objects will act,
          </h3>
          <h3 className="font-semibold text-lg mb-3 text-gray-300">
            but things on small scale
          </h3>
          <div className="flex justify-between text-xl">
            <h2 className=" rounded-sm py-[18px] text-white mr-4 font-bold ">
              $16.48
            </h2>
            <Button className="bg-green-500 rounded-sm py-5 mr-[200px] mt-3">
              ADD TO CART
            </Button>
          </div>
        </div>
        <div className="md:mr-32">
          <Image
            src={"/herosection3.png"}
            width={370}
            height={395}
            alt=""
            className="md:mt-[73px]"
          />
        </div>
      </section> */}
      {/* <section className=" grid grid-cols-1 md:grid-cols-2 md:space-x-5">
        <div className="hidden md:flex">
          <Image src={"/row.png"} width={600} height={682} alt="img" />
        </div>
        <div className="p-20">
          <h5 className="font-bold text-sm text-[#BDBDBD] mt-16">
            SUMMER 2020
          </h5>
          <h1 className="font-bold text-5xl my-9">
            Part of the Neural Universe
          </h1>
          <h3 className="font-semibold text-lg text-[#737373] ">
            We Know how large objects will act,
          </h3>
          <h3 className="font-semibold text-lg mb-3 text-[#737373]">
            but things on small scale
          </h3>
          <div className="grid grid-cols-1 md:flex md:justify-between text-xl">
            <Button className="bg-[#23A6F0] md:bg-green-500 text-white rounded-sm   md:my-0 my-3 py-7 md:py-5 ">
              ADD TO CART
            </Button>
            <Button className="border-2 bg-white rounded-sm  py-6 md:py-[18px] text-[#23A6F0] border-[#23A6F0] md:text-green-500 md:border-green-500 md:mr-[200px]">
              READ MORE
            </Button>
          </div>
        </div>
        <div className="md:hidden">
          <Image src={"/herow02.png"} width={600} height={682} alt="img" />
        </div>
      </section> */}
{/* 
      <section className="flex justify-center mt-28 flex-col text-center">
        <div className="md:px-0 px-16 ">
          <h5 className=" text-[#23A6F0] font-bold ">Practice Advice</h5>
          <h1 className="text-4xl font-bold mb-5">Featured Posts</h1>
          <p className="text-[#737373] md:mb-0 mb-14 ">
            Problems trying to resolve the conflict between
          </p>
          <p className="text-[#737373] md:flex justify-center  hidden ">
            the two major realms of Classical physics: Newtonisan mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 space-x-0 space-y-3 md:space-y-0 md:space-x-3 md:p-28  mx-11 md:mx-0">
          <Image
            src={"/hero1.png"}
            width={328}
            height={606}
            alt=""
            className="md:flex hidden"
          />
          <Image
            src={"/hero01.png"}
            width={328}
            height={606}
            alt=""
            className="md:hidden"
          />

          <Image
            src={"/hero2.png"}
            width={328}
            height={606}
            alt=""
            className="md:flex hidden"
          />
          <Image
            src={"/hero02.png"}
            width={328}
            height={606}
            alt=""
            className="md:hidden"
          />

          <Image
            src={"/hero3.png"}
            width={328}
            height={606}
            alt=""
            className="md:flex hidden"
          />
          <Image
            src={"/hero03.png"}
            width={328}
            height={606}
            alt=""
            className="md:hidden"
          />
        </div>
      </section> */}
    </main>
  );
}
