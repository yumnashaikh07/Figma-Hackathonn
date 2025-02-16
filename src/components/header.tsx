import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Cart from "./cart";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, AlignRight, ShoppingCart , Heart,User } from "lucide-react";
import Link from "next/link";
import WishList from "./wishlist";
export default function Header() {
  return (
    <main className="fixed top-0 mt-10 left-0 w-full z-50 bg-transparent flex py-7 p-9 justify-between space-x-3 h-24 shadow-lg">
      <div className="text-black font-bold text-3xl ">Luxerays</div>
      <nav>
        <ul className="md:flex gap-x-5 hidden ml-36 mt-3  text-lg">
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
              href={"/about"}
              className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/shop"}
              className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
            >
              Contact
            </Link>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex text-gray-500  hover:text-gray-600 hover:font-semibold">
                Shop
                <ChevronDown className="mt-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <Link href={"/FAQS"}>FAQS</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href={"/team"}>Team</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </nav>
      <div>
        <div className="hidden md:flex gap-x-3 ml-14 mt-3  text-[#252B42] ">
          <User />
          <h3 className="md:font-bold">
            <Link href={"/signup"}>SignUp</Link>/
            <Link href={"/signin"}>SignIn</Link>
          </h3>
          <Cart />
          <WishList />
        </div>
      </div>

      {/* SMALL SCREEN SHEET SECTION */}

      <div className="md:hidden flex space-x-3 items-center">
          {/* <Link href={"/cartdetailpage"} >
                <ShoppingCart size={24} /> */}
                <Cart />
          {/* </Link> */}
          <Link href={""} >
                <Heart size={24} />
                {/* <WishList /> */}
          </Link>
        <Sheet>
          <SheetTrigger>
            <AlignRight  size={24} />
          </SheetTrigger>
          <SheetContent >
            <nav>
              <ul className="text-center mt-20 space-y-5 font-bold text-3xl">
                <li>
                  <Link
                    href={"/"}
                    className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className=" ml-[115px] flex text-gray-500  hover:text-gray-600  hover:font-semibold">
                      Shop
                      <ChevronDown className="mt-1 " />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Categories</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href={"/shop"}>Shop</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/product"}>Product</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/pricing"}>Pricing</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/team"}>Team</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
                  >
                    About
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
                <li>
                  <Link
                    href={"/contact"}
                    className=" text-gray-500  hover:text-gray-600 hover:font-semibold"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/shop"}
                    className=" text-gray-500 hover:text-gray-600 hover:font-semibold"
                  >
                    Pages
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex text-center flex-col gap-y-5 font-semibold text-3xl mt-7 text-[#252B42] ">
              <div className="flex justify-between ">
                <User className=" ml-7 mt-1" size={30} />
                <h5 className="font-base mr-11">
                  <Link href={"/signup"}>SignUp</Link>/
                  <Link href={"/signin"}>SignIn</Link>
                </h5>
              </div>
            
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex">
      <Command>
        <CommandInput placeholder="Search..." className="md:flex hidden" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Shop">
            <CommandItem>
              <Link href={"/shop"}>Shop</Link>
            </CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      </div>
    </main>
  );
}
