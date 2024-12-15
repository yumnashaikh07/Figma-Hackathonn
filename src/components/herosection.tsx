// import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from  
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
export default function Herosection (){
    return(
        <main>
          <div className="relative mb-14">
  <Image
    src={"/heroo.jpg"}
    width={1440}
    height={716}
    alt=""
    className="absolute inset-0 w-full object-cover"
  />
  <div className="relative text-white p-32">
    <h5 className="font-bold text-sm mt-16">SUMMER 2020</h5>
    <h1 className="font-bold text-5xl my-9">NEW COLLECTION</h1>
    <h3 className="font-semibold text-lg">We Know how large objects will act,</h3>
    <h3 className="font-semibold text-lg mb-5">but things on small scale</h3>
    <Button className="bg-green-500 rounded-sm px-14 py-5"><Link href={"/shop"}>SHOP NOW</Link></Button>
  </div>
</div>


<section className="bg-[#FAFAFA] p-28">
<div className="flex flex-col text-center">
  <h1 className="font-bold  text-3xl">EDITORS PICK</h1>
  <p className="text-[#737373] mb-9">Problems trying to resolve the conflict</p>
 
  </div>
  <div className="flex justify-between ">    
    <div><Image src={"/filter.png"} width={510} height={500} alt=""/></div>
    <div><Image src={"/editor2.png"} width={240} height={500} alt=""/></div>
    <div className="flex flex-col space-y-5">
      <Image src={"/editor3a.png"} width={240} height={242} alt=""/>
      <Image src={"/editor3b.png"} width={240} height={242} alt=""/>
    </div></div>
</section>  
 
  <section className="bg-white">
  <div className=" flex flex-col text-center justify-center">
  <h5 className="text-xl font-semibold  mt-16 text-[#737373]">Featured Products</h5>
  <h1 className="font-bold text-3xl">BESTSELLER PRODUCTS</h1>
  <p className="text-[#737373]">Problems trying to resolve the conflict</p>
  </div>
                                 {/* CARDS */}


<section className="flex justify-between space-x-5 text-center p-24">
<div>
            <Image src={"/herocard011.png"} width={240} height={427} alt=""/>
   
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-20"/>
          </div>
</div>

<div>
            <Image src={"/herocard022.png"} width={240} height={427} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-20"/>
          </div>
</div>

<div>
            <Image src={"/herocard033.png"} width={240} height={427} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-20"/>
          </div>
</div>

<div>
            <Image src={"/herocard044.png"} width={240} height={427} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 mr-5 font-bold mb-3">English Department</p>
            <p className="text-gray-400 ml-5 font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-20"/>
          </div>
</div>
</section>
                                 {/* CARDS SECTION:02 */}


<section className="flex justify-between space-x-5 text-center p-24">
<div>
            <Image src={"/herocard055.png"} width={240} height={427} alt=""/>
   
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-20"/>
          </div>
</div>

<div>
            <Image src={"/herocard066.png"} width={240} height={427} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-20"/>
          </div>
</div>

<div>
            <Image src={"/herocard077.png"} width={240} height={427} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 font-bold mb-3">English Department</p>
            <p className="text-gray-400  font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-20"/>
          </div>
</div>

<div>
            <Image src={"/herocard088.png"} width={240} height={427} alt=""/>
          <div className="flex flex-col">
            <h1 className="text-gray-900 font-bold my-3">Graphic Design</h1>
            <p className="text-gray-400 mr-5 font-bold mb-3">English Department</p>
            <p className="text-gray-400 ml-5 font-bold">$16.48<span className="text-[#23856D] font-bold">$6.48</span></p>
            <Image src={"/product-colors.png"} width={82} height={16} alt="" className="ml-20"/>
          </div>
</div>
      </section>





</section>
<section className="bg-[#23856D] h-[570px]  text-white flex justify-between ">
<div className="p-20 ml-28">
    <h5 className="font-semibold text-sm text-gray-300 mt-5">SUMMER 2020</h5>
            <h1 className="font-bold text-6xl mt-9">Vita Classic</h1>
            <h1 className="font-bold text-6xl mb-9">Product</h1>
            <h3 className="font-semibold text-lg text-gray-300 ">We Know how large objects will act,</h3>
            <h3 className="font-semibold text-lg mb-3 text-gray-300">but things on small scale</h3>
            <div className="flex justify-between text-xl">
            <h2 className=" rounded-sm py-[18px] text-white mr-4 font-bold ">$16.48</h2>
            <Button className="bg-green-500 rounded-sm py-5 mr-[200px] mt-3">ADD TO CART</Button>
            
            </div>
  </div>
<div className="md:mr-32">
  <Image 
  src={"/herosection3.png"}
  width={370}
  height={395}
  alt=""
  className="mt-[73px]"
  />
</div>
</section>
<section className="flex justify-between space-x-5">
  <div>
    <Image src={"/row.png"} width={600} height={682} alt="img"/>
  </div>
  <div className="p-20">
    <h5 className="font-bold text-sm text-[#BDBDBD] mt-16">SUMMER 2020</h5>
            <h1 className="font-bold text-5xl my-9">Part of the Neural Universe</h1>
            <h3 className="font-semibold text-lg text-[#737373] ">We Know how large objects will act,</h3>
            <h3 className="font-semibold text-lg mb-3 text-[#737373]">but things on small scale</h3>
            <div className="flex justify-between text-xl">
            <Button className="bg-green-500 text-white rounded-sm py-5 ">ADD TO CART</Button>
            <Button className="border-2 bg-white rounded-sm py-[18px] text-green-500 border-green-500 mr-[300px]">READ MORE</Button>
            </div>
  </div>
</section>

<section className="flex justify-center mt-28 flex-col text-center">
  <h5 className=" text-[#23A6F0] font-bold ">Practice Advice</h5>
  <h1 className="text-4xl font-bold mb-5">Featured Posts</h1>
  <p className="text-[#737373] ">Problems trying to resolve the conflict between</p>
  <p className="text-[#737373] ">the two major realms of Classical physics: Newtonisan mechanics</p>

<div className="flex justify-between space-x-3 p-28">
<Image src={"/hero1.png"} width={328} height={606} alt=""/>
<Image src={"/hero2.png"} width={328} height={606} alt="" />
<Image src={"/hero3.png"} width={328} height={606} alt=""/>
</div>
</section>

</main>
    )}