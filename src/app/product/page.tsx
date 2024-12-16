import Herobanner from "@/components/herobanner";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Eye, Heart, ShoppingCart } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
export default function Product() {
  return (
    <main className="mx-auto">
      <div className="bg-[#23856D]">
        <Herobanner />
      </div>
      <Header />
      <section>
        <Breadcrumb>
          <BreadcrumbList className="text-base flex md:justify-start justify-center md:text-lg p-11 bg-slate-50">
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
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 md:space-y-0 space-y-5 space-x-0 md:space-x-3 md:px-0 px-10 bg-slate-50 md:mx-24">
        <div>
          <Image src={"/product1.png"} width={550} height={510} alt="product" />
        </div>
        <div className="flex flex-col ">
          <h3 className="font-semibold">Floating Phone</h3>
          <div className="flex gap-x-3">
            <Image src={"/stars.png"} width={130} height={22} alt="" />
            <h6 className="text-gray-500 font-semibold">10 Reviews</h6>
          </div>
          <h2 className="text-gray-700 font-bold text-xl">$1,139.33</h2>
          <h6 className="text-gray-500 mb-7 font-bold">
            Availability :<span className="text-[#23A6F0]"> In Stock</span>
          </h6>
          <div className="text-gray-500 font-semibold">
            <p>Met minim Mollie non desert Alamo est sit cliquey dolor </p>
            <p>
              do met sent. RELIT official consequent door ENIM RELIT Mollie.
            </p>
            <p>Excitation venial consequent sent nostrum met.</p>
          </div>
          <div className="border-[1px] w-[445px] hidden md:flex text-[#BDBDBD] my-9"></div>
          <Image
            src={"/product-colors.png"}
            height={30}
            width={150}
            alt=""
            className="mb-11 md:mt-0 mt-9"
          />
          <div className="flex gap-x-3 ">
            <Button className="text-white bg-[#23A6F0] rounded-sm font-semibold px-5 mt-5 py-5">
              Select Options
            </Button>

            <div className="mt-4 bg-slate-50 border-2 w-[50px] h-[50px] border-[#BDBDBD] rounded-full">
              <Link href={""}>
                <Heart size={29} className="p-1 mt-2 ml-2 text-black" />
              </Link>
            </div>
            <div className="mt-4 bg-slate-50 border-2 w-[50px] h-[50px] border-[#BDBDBD] rounded-full">
              <Link href={""}>
                <ShoppingCart size={29} className="p-1 mt-2 ml-2 text-black" />
              </Link>
            </div>
            <div className="mt-4 bg-slate-50 border-2 w-[50px] h-[50px] border-[#BDBDBD] rounded-full">
              {" "}
              <Link href={""}>
                <Eye size={29} className="p-1 mt-2 ml-2 text-black" />
              </Link>
            </div>
          </div>{" "}
        </div>
      </section>

      <section className="md:px-0 px-7">
        <div className="  flex justify-between md:mt-0 mt-5 md:p-11 md:gap-x-3 ">
          <h3 className="text-gray-500 text-xs md:text-xl md:ml-72">
            Description
          </h3>
          <h3 className="text-gray-500 text-xs md:text-xl font-semibold">
            Additional Information
          </h3>
          <h3 className="text-gray-500 text-sm md:text-xl font-semibold md:mr-72">
            Reviews{" "}
            <span className="text-[#23856D] text-sm md:text-xl "> (0)</span>
          </h3>
        </div>
      </section>

      <div className="text-[#ECECEC] w-[1049px] hidden md:flex ml-20 border-[1px] "></div>

      <section className=" grid grid-cols-1 md:grid-cols-3 md:px-0 px-7 my-9 md:p-14 md:space-x-3 ">
        <div>
          <Image
            src={"/pr0duct22.png"}
            width={332}
            height={392}
            alt=""
            className="md:flex hidden"
          />
          <Image
            src={"/productmain2.png"}
            width={332}
            height={392}
            alt=""
            className="md:hidden flex "
          />
        </div>
        <div className="">
          <h1 className="text-gray-700 text-2xl font-bold md:mt-0 mt-11 mb-5 ">
            the quick fox jumps over
          </h1>
          <p className="text-[#737373]  mb-5">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373] mb-5">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373] ">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className=" flex flex-col ">
          <h1 className="text-gray-700 text-2xl font-bold mb-7">
            the quick fox jumps over
          </h1>
          <p className="text-[#737373] flex mb-5">
            <ChevronRight />
            the quick fox jumps over the lazy dog
          </p>
          <p className="text-[#737373]  flex mb-5">
            <ChevronRight />
            the quick fox jumps over the lazy dog
          </p>
          <p className="text-[#737373] flex mb-5">
            <ChevronRight />
            the quick fox jumps over the lazy dog
          </p>
          <p className="text-[#737373] flex mb-9">
            <ChevronRight />
            the quick fox jumps over the lazy dog
          </p>

          <h1 className="text-gray-700 text-2xl font-bold mb-7">
            the quick fox jumps over
          </h1>
          <p className="text-[#737373]  flex mb-5">
            <ChevronRight />
            the quick fox jumps over the lazy dog
          </p>
          <p className="text-[#737373]  flex mb-5">
            <ChevronRight />
            the quick fox jumps over the lazy dog
          </p>
          <p className="text-[#737373]  flex mb-5">
            <ChevronRight />
            the quick fox jumps over the lazy dog
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-0 md:py-11 ">
        <h1 className="text-[#252B42] text-3xl  md:my-0 my-9 md:px-0 px-3 md:ml-20 mt-9 font-bold ">
          {" "}
          BESTSELLER PRODUCTS
        </h1>
        <div className="text-[#ECECEC] w-[1059px] ml-24 hidden md:flex border-[1px] my-7 "></div>
        <div className=" flex flex-col mx-auto md:mx-24">
          <div className="grid grid-cols-1 md:flex md:justify-between md:space-x-3 md:space-y-0 space-y-5 md:px-0 px-10 text-center">
            <div>
              <Image src={"/prcard1.png"} width={277} height={347} alt="" />
              <div className="flex flex-col">
                <h1 className="text-gray-900 font-bold my-3 ">
                  Graphic Design
                </h1>
                <p className="text-gray-400 font-bold mb-3">
                  English Department
                </p>
                <p className="text-gray-400  font-bold shadow-lg">
                  $16.48<span className="text-[#23856D] font-bold">$6.48</span>
                </p>
              </div>
            </div>

            <div>
              <Image src={"/prcard2.png"} width={277} height={347} alt="" />
              <div className="flex flex-col">
                <h1 className="text-gray-900 font-bold my-3 ">
                  Graphic Design
                </h1>
                <p className="text-gray-400 font-bold mb-3">
                  English Department
                </p>
                <p className="text-gray-400  font-bold shadow-lg">
                  $16.48<span className="text-[#23856D] font-bold">$6.48</span>
                </p>
              </div>
            </div>

            <div>
              <Image src={"/prcard3.png"} width={277} height={347} alt="" />
              <div className="flex flex-col">
                <h1 className="text-gray-900 font-bold my-3 ">
                  Graphic Design
                </h1>
                <p className="text-gray-400 font-bold mb-3">
                  English Department
                </p>
                <p className="text-gray-400  font-bold shadow-lg">
                  $16.48<span className="text-[#23856D] font-bold">$6.48</span>
                </p>
              </div>
            </div>

            <div>
              <Image src={"/prcard4.png"} width={277} height={347} alt="" />
              <div className="flex flex-col">
                <h1 className="text-gray-900 font-bold my-3 ">
                  Graphic Design
                </h1>
                <p className="text-gray-400 font-bold mb-3">
                  English Department
                </p>
                <p className="text-gray-400  font-bold shadow-lg">
                  $16.48<span className="text-[#23856D] font-bold">$6.48</span>
                </p>
              </div>
            </div>
          </div>

          {/* CARDS SECTION  02     */}
          <div className="grid grid-cols-1 md:flex md:justify-between md:space-x-3 space-x-0 md:space-y-0 space-y-5 md:px-0 px-10 mt-9  text-center ">
            <div>
              <Image src={"/prcard5.png"} width={277} height={347} alt="" />
              <div className="flex flex-col">
                <h1 className="text-gray-900 font-bold my-3 ">
                  Graphic Design
                </h1>
                <p className="text-gray-400 font-bold mb-3">
                  English Department
                </p>
                <p className="text-gray-400  font-bold shadow-lg">
                  $16.48<span className="text-[#23856D] font-bold">$6.48</span>
                </p>
              </div>
            </div>

            <div>
              <Image src={"/prcard6.png"} width={277} height={347} alt="" />
              <div className="flex flex-col">
                <h1 className="text-gray-900 font-bold my-3 ">
                  Graphic Design
                </h1>
                <p className="text-gray-400 font-bold mb-3">
                  English Department
                </p>
                <p className="text-gray-400  font-bold shadow-lg">
                  $16.48<span className="text-[#23856D] font-bold">$6.48</span>
                </p>
              </div>
            </div>

            <div>
              <Image src={"/prcard1.png"} width={277} height={347} alt="" />
              <div className="flex flex-col">
                <h1 className="text-gray-900 font-bold my-3 ">
                  Graphic Design
                </h1>
                <p className="text-gray-400 font-bold mb-3">
                  English Department
                </p>
                <p className="text-gray-400  font-bold shadow-lg">
                  $16.48<span className="text-[#23856D] font-bold">$6.48</span>
                </p>
              </div>
            </div>

            <div>
              <Image src={"/prcard3.png"} width={277} height={347} alt="" />
              <div className="flex flex-col">
                <h1 className="text-gray-900 font-bold my-3 ">
                  Graphic Design
                </h1>
                <p className="text-gray-400 font-bold mb-3">
                  English Department
                </p>
                <p className="text-gray-400  font-bold shadow-lg">
                  $16.48<span className="text-[#23856D] font-bold">$6.48</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#FAFAFA] md:py-7 mt-9 py-0 px-20">
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
      </section>
    </main>
  );
}
