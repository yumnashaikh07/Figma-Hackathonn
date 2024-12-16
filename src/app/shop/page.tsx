import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Image from "next/image";
import Herobanner from "@/components/herobanner";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
export default function Shop() {
  return (
    <main className="mx-auto">
      <div className="bg-[#23856D]">
        <Herobanner />
      </div>
      <Header />
      <section className="bg-gray-50 md:px-0 px-11">
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
        <section className="grid grid-cols-1 md:grid-cols-5  mx-auto gap-y-5 gap-x-0  md:gap-x-5 p-0 md:p-5 ">
          <Image
            src={"/card01.png"}
            width={254}
            height={238}
            alt="img"
            className=""
          />
          <Image
            src={"/card02.png"}
            width={254}
            height={238}
            alt="img"
            className=""
          />
          <Image
            src={"/card03.png"}
            width={254}
            height={238}
            alt="img"
            className=""
          />
          <Image
            src={"/card04.png"}
            width={254}
            height={238}
            alt="img"
            className=""
          />
          <Image
            src={"/card05.png"}
            width={254}
            height={238}
            alt="img"
            className=""
          />
        </section>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 md:px-0 px-20  py-0 md:py-9 ">
        <div>
          <h3 className="text-gray-500 md:ml-28 ml-0 md:mt-3 mt-5 font-bold text-base md:text-lg">
            Showing All 12 results
          </h3>
        </div>

        <div className="flex justify-between md:mt-0 mt-7  ">
          <h3 className="text-gray-500 font-bold md:ml-28 text-lg mt-2">
            Views:
          </h3>
          <div className="flex justify-between md:ml-10 space-x-2">
            <Image src={"/btn.png"} width={50} height={50} alt="button" />
            <Image
              src={"/btn24.png"}
              width={50}
              height={50}
              alt="button"
              className=""
            />
          </div>
        </div>

        <div className="flex justify-between my-5 md:my-0 space-x-2">
          <Select>
            <SelectTrigger className=" text-gray-500 font-semibold  ml-0 md:ml-64 py-5 focus:outline-none">
              <SelectValue placeholder="Popularity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-[#23A6F0] text-white px-5 py-5 rounded-sm  ">
            Filter
          </Button>
        </div>
      </section>

      {/* CARD SECTION :01 */}

      <section className="grid grid-cols-1 md:grid-cols-4 md:space-y-0 space-y-5 space-x-0 md:space-x-5 text-center p-24">
        <div>
          <Image src={"/card1.png"} width={277} height={347} alt="" />

          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold">
              $16.48<span className="text-[#23856D] font-bold">$6.48</span>
            </p>
            <Image
              src={"/product-colors.png"}
              width={82}
              height={16}
              alt=""
              className="md:ml-[85px] mx-auto"
            />
          </div>
        </div>

        <div>
          <Image src={"/card2.png"} width={277} height={347} alt="" />
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold">
              $16.48<span className="text-[#23856D] font-bold">$6.48</span>
            </p>
            <Image
              src={"/product-colors.png"}
              width={82}
              height={16}
              alt=""
              className="md:ml-[85px] mx-auto"
            />
          </div>
        </div>

        <div>
          <Image src={"/card3.png"} width={277} height={347} alt="" />
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold">
              $16.48<span className="text-[#23856D] font-bold">$6.48</span>
            </p>
            <Image
              src={"/product-colors.png"}
              width={82}
              height={16}
              alt=""
              className="md:ml-[85px] mx-auto"
            />
          </div>
        </div>

        <div>
          <Image src={"/card4.png"} width={277} height={347} alt="" />
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 mr-5 font-bold mb-3">
              English Department
            </p>
            <p className="text-gray-400 ml-5 font-bold">
              $16.48<span className="text-[#23856D] font-bold">$6.48</span>
            </p>
            <Image
              src={"/product-colors.png"}
              width={82}
              height={16}
              alt=""
              className="md:ml-[97px] mx-auto"
            />
          </div>
        </div>
      </section>

      {/* CARD SECTION :02 */}

      <section className="grid grid-cols-1 md:grid-cols-4 md:space-y-0 space-y-5 space-x-0 md:space-x-5 text-center p-24">
        <div>
          <Image src={"/card5.png"} width={277} height={347} alt="" />
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 md:mr-5 font-bold mb-3">
              English Department
            </p>
            <p className="text-gray-400 md:ml-5 font-bold">
              $16.48<span className="text-[#23856D] font-bold">$6.48</span>
            </p>
            <Image
              src={"/product-colors.png"}
              width={82}
              height={16}
              alt=""
              className="md:ml-[97px] mx-auto "
            />
          </div>
        </div>

        <div>
          <Image src={"/card6.png"} width={277} height={347} alt="" />
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 md:mr-5 font-bold mb-3">
              English Department
            </p>
            <p className="text-gray-400 md:ml-5 font-bold">
              $16.48<span className="text-[#23856D] font-bold">$6.48</span>
            </p>
            <Image
              src={"/product-colors.png"}
              width={82}
              height={16}
              alt=""
              className="mx-auto md:ml-[97px]"
            />
          </div>
        </div>

        <div>
          <Image src={"/card7.png"} width={277} height={347} alt="" />
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 md:mr-5 font-bold mb-3">
              English Department
            </p>
            <p className="text-gray-400 md:ml-5 font-bold">
              $16.48<span className="text-[#23856D] font-bold">$6.48</span>
            </p>
            <Image
              src={"/product-colors.png"}
              width={82}
              height={16}
              alt=""
              className="mx-auto md:ml-[97px]"
            />
          </div>
        </div>

        <div>
          <Image src={"/card8.png"} width={277} height={347} alt="" />
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400  md:mr-5 font-bold mb-3">
              English Department
            </p>
            <p className="text-gray-400 md:ml-5 font-bold">
              $16.48<span className="text-[#23856D] font-bold">$6.48</span>
            </p>
            <Image
              src={"/product-colors.png"}
              width={82}
              height={16}
              alt=""
              className="md:ml-[97px] mx-auto"
            />
          </div>
        </div>
      </section>

      {/* CARD SECTION :03 */}

      <section className="grid grid-cols-1 md:grid-cols-4 md:space-y-0 space-y-5 space-x-0 md:space-x-5 text-center p-24">
        <div>
          <Image src={"/card9.png"} width={277} height={347} alt="" />
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 md:mr-5 font-bold mb-3">
              English Department
            </p>
            <p className="text-gray-400 md:ml-5 font-bold">
              $16.48<span className="text-[#23856D] font-bold">$6.48</span>
            </p>
            <Image
              src={"/product-colors.png"}
              width={82}
              height={16}
              alt=""
              className="md:ml-[97px] mx-auto"
            />
          </div>
        </div>

        <div>
          <Image src={"/card11.png"} width={277} height={347} alt="" />
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 md:mr-5 font-bold mb-3">
              English Department
            </p>
            <p className="text-gray-400 md:ml-5 font-bold">
              $16.48<span className="text-[#23856D] font-bold">$6.48</span>
            </p>
            <Image
              src={"/product-colors.png"}
              width={82}
              height={16}
              alt=""
              className="md:ml-[97px] mx-auto"
            />
          </div>
        </div>

        <div>
          <Image src={"/card10.png"} width={277} height={347} alt="" />
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 md:mr-5 font-bold mb-3">
              English Department
            </p>
            <p className="text-gray-400 md:ml-5 font-bold">
              $16.48<span className="text-[#23856D] font-bold">$6.48</span>
            </p>
            <Image
              src={"/product-colors.png"}
              width={82}
              height={16}
              alt=""
              className="md:ml-[97px] mx-auto"
            />
          </div>
        </div>

        <div>
          <Image src={"/card12.png"} width={277} height={347} alt="" />
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 md:mr-5 font-bold mb-3">
              English Department
            </p>
            <p className="text-gray-400 md:ml-5 font-bold">
              $16.48<span className="text-[#23856D] font-bold">$6.48</span>
            </p>
            <Image
              src={"/product-colors.png"}
              width={82}
              height={16}
              alt=""
              className="md:ml-[97px] mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <Image
          src={"/Pagination.png"}
          width={300}
          height={200}
          alt="pagination"
          quality={100}
        />
      </section>

      <section className=" bg-gray-50 p-20">
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
      </section>
    </main>
  );
}
