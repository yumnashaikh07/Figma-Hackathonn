import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { ArrowRight, Search, ShoppingCart, AlignRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Headertype2() {
  return (
    <main className="mx-auto">
      <header className="md:bg-white bg-[#F6F6F6] flex text-center py-7 p-5 md:p-28 justify-between h-24 ">
        <div className="text-black font-bold text-3xl">Luxerays</div>
        <nav>
          <ul className="md:flex hidden md:gap-x-7  text-lg">
            <li>
              <Link
                href={"/"}
                className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/FAQS"}
                className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
              >
               FAQS
              </Link>
            </li>
            {/* <li>
              <Link
                href={"/pricing"}
                className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
              >
                Pricing
              </Link>
            </li> */}
            <li>
              <Link
                href={"/shop"}
                className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
              >
                Shop
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-between  space-x-5 md:hidden">
          <Search />
          <Link href={""}>
            <ShoppingCart size={24} />
          </Link>
          <Sheet>
            <SheetTrigger>
              <AlignRight className="mb-3" size={24} />
            </SheetTrigger>
            <SheetContent>
              <nav>
                <ul className="flex flex-col md:hidden md:gap-x-7  mt-20 gap-y-5 text-3xl md:text-lg">
                  <li>
                    <Link
                      href={"/"}
                      className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/FAQS"}
                      className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
                    >
                    FAQS
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href={"/pricing"}
                      className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
                    >
                      Pricing
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href={"/contact"}
                      className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="md:flex hidden gap-x-3 text-[#e6c93d]  ">
          <h3 className="font-semibold mt-1"><Link href={"/signin"}>SignIn</Link></h3>
          <Button className="text-white bg-[#e6c93d]" >
           <Link href={"/signup"}>Become a member</Link>  <ArrowRight />
          </Button>
        </div>
      </header>
    </main>
  );
}
