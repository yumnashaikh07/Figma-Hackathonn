import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronDown, Heart, Search, ShoppingCart,AlignRight, User } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <main className="flex text-cent py-7 p-9 justify-between h-24 shadow-lg">
      <div className="text-black font-bold text-3xl">Bandage</div>
      <nav>
        <ul className="md:flex gap-x-7 hidden text-lg">
          <li>
            <Link href={"/"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/shop"}>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex text-gray-500  hover:text-gray-600 hover:font-semibold">
                  Shop
                  <ChevronDown className="mt-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Link  href={"/shop"}>Shop</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link  href={"/product"}>Product</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link  href={"/pricing"}>Pricing</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link  href={"/team"}>Team</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Link>
          </li>
          <li>
            <Link href={"/about"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              About
            </Link>
          </li>
          <li>
            <Link href={"/"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Blog
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className=" text-gray-500  hover:text-gray-600 hover:font-semibold">
              Contact
            </Link>
          </li>
          <li>
            <Link href={"/shop"} className=" text-gray-500 hover:text-gray-600 hover:font-semibold">
              Pages
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <div className="hidden md:flex gap-x-3  text-[#252B42] md:text-[#23A6F0]">
            <User /><h3 className="md:font-bold ">Login/Register</h3>
            <Search/>
          <Link href={""}>
            <ShoppingCart  size={24} />
          </Link>
          <Link href={""}>
            <Heart size={24} />
          </Link>
        </div>
      </div>

      <div className="flex justify-between  space-x-5 md:hidden">
      <Search size={24}/>
          <Link href={""}>
            <ShoppingCart  size={24} />
          </Link>
          <Sheet>
  <SheetTrigger><AlignRight className="mb-3" size={24}/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      </div>
    </main>
  );
}

