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
    <main>
     <div className="bg-[#23856D]">
     <Herobanner  /></div>
      <Header />
      <section className="bg-gray-50">
        <header className="flex justify-between mx-auto md:mx-16">
          <div className="flex text-cent py-7  justify-between h-24">
            <h1 className="text-black font-bold text-3xl">Shop</h1>
          </div>
          <Breadcrumb>
            <BreadcrumbList className="text-lg mt-7">
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
<section className="flex justify-between space-x-5 p-5 md:mx-16">
    <Image  src={"/card01.png"} width={254} height={238} alt="img"className=""/>
    <Image  src={"/card02.png"} width={254} height={238} alt="img"className=""/>
    <Image  src={"/card03.png"} width={254} height={238} alt="img"className=""/>
    <Image  src={"/card04.png"} width={254} height={238} alt="img"className=""/>
    <Image  src={"/card05.png"} width={254} height={238} alt="img"className=""/>

</section>
      </section>
      <section className="flex justify-between p-10 md:mx-16">
        <div>
          <h3 className="text-gray-500 mt-2 font-bold text-lg">
            Showing All 12 results
          </h3>
        </div>
        <div className="flex justify-between  ">
          <h3 className="text-gray-500 font-bold text-lg mr-10 mt-2">Views:</h3>
          <div className="flex justify-between space-x-2">
            <Image src={"/btn.png"} width={50} height={50} alt="button"/>
            <Image src={"/btn24.png"} width={50} height={50} alt="button"/></div>
        </div>
        <div>
          <Select>
            <SelectTrigger className=" text-gray-500 font-semibold  px-3 py-5 focus:outline-none">
              <SelectValue placeholder="Popularity"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className="bg-[#23A6F0] text-white px-5 py-5 mr-24 rounded-sm  ">Filter</Button>
        </div>
      </section>

      {/* CARD SECTION :01 */}

      <section className="flex justify-between space-x-5 text-center p-24">
<div>
            <Image src={"/card1.png"} width={277} height={347} alt=""/>
   
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-[85px]"/>
          </div>
</div>

<div>
            <Image src={"/card2.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-[85px]"/>
          </div>
</div>

<div>
            <Image src={"/card3.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-[85px]"/>
          </div>
</div>

<div>
            <Image src={"/card4.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 mr-5 font-bold mb-3">English Department</p>
            <p className="text-gray-400 ml-5 font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-[97px]"/>
          </div>
</div>
      </section>

      {/* CARD SECTION :02 */}

      <section className="flex justify-between space-x-5 text-center p-24">
       
<div>
            <Image src={"/card5.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 mr-5 font-bold mb-3">English Department</p>
            <p className="text-gray-400 ml-5 font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-[97px]"/>
          </div>
</div>

     
<div>
            <Image src={"/card6.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 mr-5 font-bold mb-3">English Department</p>
            <p className="text-gray-400 ml-5 font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-[97px]"/>
          </div>
</div>

        
<div>
            <Image src={"/card7.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 mr-5 font-bold mb-3">English Department</p>
            <p className="text-gray-400 ml-5 font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-[97px]"/>
          </div>
</div>


        
<div>
            <Image src={"/card8.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 mr-5 font-bold mb-3">English Department</p>
            <p className="text-gray-400 ml-5 font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-[97px]"/>
          </div>
</div>
      </section>

      {/* CARD SECTION :03 */}

      <section className="flex justify-between space-x-5 text-center p-24">
       
<div>
            <Image src={"/card9.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 mr-5 font-bold mb-3">English Department</p>
            <p className="text-gray-400 ml-5 font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-[97px]"/>
          </div>
</div>

        
<div>
            <Image src={"/card11.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 mr-5 font-bold mb-3">English Department</p>
            <p className="text-gray-400 ml-5 font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-[97px]"/>
          </div>
</div>


        
<div>
            <Image src={"/card10.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 mr-5 font-bold mb-3">English Department</p>
            <p className="text-gray-400 ml-5 font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-[97px]"/>
          </div>
</div>

       
<div>
            <Image src={"/card12.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 mr-5 font-bold mb-3">English Department</p>
            <p className="text-gray-400 ml-5 font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-[97px]"/>
          </div>
</div>
      </section>

      <section className="flex justify-center">
      <Image src={"/Pagination.png"} width={300} height={200} alt="pagination" quality={100}/>
      </section>

      <section className=" bg-gray-50 p-20">
        <div className="flex justify-center text-center flex-col">
        <h1 className="text-gray-700 font-bold text-3xl mb-3">Big Companies Are Here</h1>
        <h3 className="text-sm text-gray-500 font-semibold">Problems trying to resolve the conflict between</h3>
        <h3 className="text-sm text-gray-500 font-semibold mb-20">the two major realms of Classical physics: Newtonisan mechanics</h3></div>
        <div className="flex justify-between md:mx-14">
            <Image  src={"/stripe.png"} width={150} height={190} alt=""/>
            <Image  src={"/aws.png"} width={150} height={190} alt=""/>
            <Image  src={"/logo11.png"} width={150} height={190} alt=""/>
            <Image  src={"/hooli2.png"} width={150} height={190} alt=""/> 
            <Image  src={"/lyfttt.png"} width={150} height={190} alt=""/>
            <Image  src={"/logo2.png"} width={150} height={190} alt=""/> 
        </div>
    </section>
    </main>
  );
}
