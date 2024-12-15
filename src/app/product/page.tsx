import Herobanner from "@/components/herobanner"
import Header from "@/components/header"
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
export default function Product(){
 return(
    <main>
        <div className="bg-[#23856D]">
     <Herobanner  /></div>
      <Header />
      <section>
      <Breadcrumb>
            <BreadcrumbList className="text-lg p-11 bg-slate-50">
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

      <section className="flex justify-between bg-slate-50 md:mx-24">
        <div>
            <Image src={"/product1.png"} width={550} height={510} alt="product"/>
        </div>
        <div className="flex flex-col">
        <h3>Floating Phone</h3>
        <div className="flex gap-x-3"><Image src={"/stars.png"} width={130} height={22} alt=""/><h6 className="text-gray-500 font-semibold">10 Reviews</h6></div>
        <h2 className="text-gray-700 font-bold text-xl">$1,139.33</h2>
        <h6 className="text-gray-500 mb-7 font-bold">Availability :<span className="text-[#23A6F0]"> In Stock</span></h6>
        <div className="text-gray-500 font-semibold"><p>Met minim Mollie non desert Alamo est sit cliquey dolor </p>
<p>do met sent. RELIT official consequent door ENIM RELIT Mollie.</p> 
<p>Excitation venial consequent sent nostrum met.</p></div>

<div className="border-[1px] w-[445px] text-[#BDBDBD] my-9"></div>
        <Image src={"/product-colors.png"} height={30} width={150} alt="" className="mb-11"/>
        
        <div className="flex gap-x-3 ">
        <Button className="text-white bg-[#23A6F0] rounded-sm font-semibold px-5 mt-5 py-5">Select Options</Button>
{/* <Image src={"/like.png"} height={30} width={30} alt=""/>
<Image src={"/basket.png"} height={40} width={40} alt=""/>
<Image src={"/more.png"} height={40} width={40} alt=""/> */}
   
   <div className="mt-4 bg-slate-50 border-2 w-[50px] h-[50px] border-[#BDBDBD] rounded-full"><Link href={""}>
            <Heart size={29}  className="p-1 mt-2 ml-2 text-black" />
          </Link></div>
          <div className="mt-4 bg-slate-50 border-2 w-[50px] h-[50px] border-[#BDBDBD] rounded-full"><Link href={""}>
            <ShoppingCart  size={29} className="p-1 mt-2 ml-2 text-black"/>
          </Link></div>
          <div className="mt-4 bg-slate-50 border-2 w-[50px] h-[50px] border-[#BDBDBD] rounded-full"> <Link href={""}>
            <Eye size={29} className="p-1 mt-2 ml-2 text-black"/>
          </Link></div>
          </div> </div>
      </section>

      <section>
        <div className=" flex justify-between p-11 gap-x-3 ">
            <h3 className="text-gray-500 text-xl ml-72">Description</h3>
            <h3 className="text-gray-500 text-xl font-semibold">Additional Information</h3>
            <h3 className="text-gray-500 text-xl font-semibold mr-72">Reviews <span className="text-[#23856D] "> (0)</span></h3>
        </div>
      </section>

<div className="text-[#ECECEC] w-[1049px] ml-20 border-[1px] "></div>


      <section className=" flex justify-between my-9 mx-20 space-x-3 h-[499px]">
        <div><Image src={"/pr0duct22.png"} width={332} height={392} alt=""/></div>
        <div className="w-[332px] h-[427px]">
          <h1 className="text-gray-700 text-3xl font-bold mb-9 ">the quick fox jumps over</h1>
          <p className="text-[#737373]  mb-7">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          <p className="text-[#737373] mb-7">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          <p className="text-[#737373] ">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
        </div>
        <div className="w-[332px] h-[367px]flex flex-col ">
          <h1 className="text-gray-700 text-2xl font-bold mb-7">the quick fox jumps over</h1>
          <p className="text-[#737373] flex mb-3"><ChevronRight/>the quick fox jumps over the lazy dog</p>
          <p className="text-[#737373]  flex mb-3"><ChevronRight/>the quick fox jumps over the lazy dog</p>
          <p className="text-[#737373] flex mb-3"><ChevronRight/>the quick fox jumps over the lazy dog</p>
          <p className="text-[#737373] flex mb-7"><ChevronRight/>the quick fox jumps over the lazy dog</p>
      
          <h1 className="text-gray-700 text-2xl font-bold mb-7">the quick fox jumps over</h1>
          <p className="text-[#737373]  flex mb-3"><ChevronRight/>the quick fox jumps over the lazy dog</p>
          <p className="text-[#737373]  flex mb-3"><ChevronRight/>the quick fox jumps over the lazy dog</p>
          <p className="text-[#737373]  flex mb-3"><ChevronRight/>the quick fox jumps over the lazy dog</p>
          </div>
      </section>


     
      <section  className="bg-[#FAFAFA]">

        <h1 className="text-[#252B42] text-3xl md:ml-20 mt-9 font-bold "> BESTSELLER PRODUCTS</h1>
        <div className="text-[#ECECEC] w-[1059px] ml-24 border-[1px] my-7 "></div>
        <div className=" flex flex-col md:mx-24">
<div className="flex justify-between space-x-5   text-center">

<div>
            <Image src={"/prcard1.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3 ">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold shadow-lg">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
          </div>
</div>

<div>
            <Image src={"/prcard2.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3 ">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold shadow-lg">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
          </div>
</div>

<div>
            <Image src={"/prcard3.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3 ">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold shadow-lg">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
          </div>
</div>

<div>
            <Image src={"/prcard4.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3 ">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold shadow-lg">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
          </div>
</div>
</div>
<div className="flex justify-between space-x-5  mt-9  text-center ">
        
<div>
            <Image src={"/prcard5.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3 ">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold shadow-lg">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
          </div>
</div>



<div>
            <Image src={"/prcard6.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3 ">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold shadow-lg">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
          </div>
</div>


<div>
            <Image src={"/prcard1.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3 ">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold shadow-lg">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
          </div>
</div>

<div>
            <Image src={"/prcard3.png"} width={277} height={347} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3 ">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold shadow-lg">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
          </div>
</div>
</div>
</div>

      </section>

<section className=" bg-[#FAFAFA] py-7 px-20">
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
 )
}