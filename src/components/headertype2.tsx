import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { ArrowRight,Search, ShoppingCart,AlignRight} from "lucide-react";
import { Button } from "@/components/ui/button"
export default function Headertype2 (){
    return(
        <main className="mx-auto">
              <header className="md:bg-white bg-[#F6F6F6] flex text-center py-7 p-5 md:p-28 justify-between h-24 ">
      <div className="text-black font-bold text-3xl">Bandage</div>
      <nav>
        <ul className="md:flex hidden md:gap-x-7  text-lg">
          <li>
            <Link href={"/"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/product"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Product
            </Link>
          </li>
          <li>
            <Link href={"/pricing"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Pricing
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Contact
            </Link>
          </li>
        </ul>
         </nav>
         <div className="flex justify-between  space-x-5 md:hidden">
         <Search/>
          <Link href={""}>
            <ShoppingCart  size={24} />
          </Link>
          <Sheet>
  <SheetTrigger><AlignRight className="mb-3" size={24}/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetDescription>
      <nav>
        <ul className="flex flex-col md:hidden md:gap-x-7  mt-20 gap-y-5 text-3xl md:text-lg">
          <li>
            <Link href={"/"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/product"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Product
            </Link>
          </li>
          <li>
            <Link href={"/pricing"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Pricing
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Contact
            </Link>
          </li>
        </ul>
         </nav>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      </div>
         <div className="md:flex hidden gap-x-3 text-[#23A6F0] ">
        <h3 className="font-semibold mt-1">Login</h3><Button className="text-white bg-[#23A6F0]">Become a member <ArrowRight/></Button></div>
   
            </header>
        </main>
    )
}