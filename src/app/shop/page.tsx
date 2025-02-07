import Herobanner from "@/components/herobanner";
import Header from "@/components/header";
import ShopCards from "@/components/shopcard";
import ShopPagination from "@/components/mypagination";
export default function Shop() {
  return (
    <main className="mx-auto">
      <div className="bg-[#23856D]">
        <Herobanner />
      </div>
      <Header />
      <ShopCards />
      <ShopPagination />
    </main>
  );
}




// FIGMA HACKATHON CODE
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

// import Image from "next/image";
{
  /* <section className="bg-gray-50 md:px-0 px-11">
        <header className="grid grid-cols-1 md:grid-cols-2  md:px-0 px-11  md:mx-16">
          <div className=" py-7 md:px-0 px-16  md:justify-between h-24">
            <h1 className="text-black  font-bold text-xl md:text-3xl">Shop</h1>
          </div>
          <Breadcrumb>
            <BreadcrumbList className="md:px-0 px-7  text-base ml-0 md:ml-[440px] md:mb-0 mb-9 md:mt-11">
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="font-bold text-gray-900">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
    
      </section> */
}
{
  /* <section className=" bg-gray-50 p-20">
        <div className="flex justify-center text-center flex-col">
          <h1 className="text-gray-700 font-bold text-3xl mb-3">
            Big Companies Are Here
          </h1>
          <h3 className="text-sm text-gray-500 font-semibold">
            Problems trying to resolve the conflict between
          </h3>
          <h3 className="text-sm text-gray-500 font-semibold mb-20">
            the two major realms of Classical physics: Newtonisan mechanics
          </h3>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-1 md:mx-14">
          <Image
            src={"/stripe.png"}
            width={150}
            height={190}
            alt=""
            className=" md:w-[150px] md:h-[190px] h-[290px] w-[250px]"
          />
          <Image
            src={"/aws.png"}
            width={150}
            height={190}
            alt=""
            className=" md:w-[150px] md:h-[190px] h-[290px] w-[250px]"
          />
          <Image
            src={"/logo11.png"}
            width={150}
            height={190}
            alt=""
            className=" md:w-[150px] md:h-[190px] h-[290px] w-[250px]"
          />
          <Image
            src={"/hooli2.png"}
            width={150}
            height={190}
            alt=""
            className=" md:w-[150px] md:h-[190px] h-[290px] w-[250px]"
          />
          <Image
            src={"/lyfttt.png"}
            width={150}
            height={190}
            alt=""
            className=" md:w-[150px] md:h-[190px] h-[290px] w-[250px]"
          />
          <Image
            src={"/logo2.png"}
            width={150}
            height={190}
            alt=""
            className=" md:w-[150px] md:h-[190px] h-[290px] w-[250px]"
          />
        </div>
      </section> */
}
