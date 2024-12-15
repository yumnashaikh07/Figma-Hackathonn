import { Button } from "@/components/ui/button"
import { Check } from "lucide-react";
import Image from "next/image";
import { ChevronRight} from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
import { Switch } from "@/components/ui/switch"
import DaysOffer from "@/components/14daysoffer";
import Headertype2 from "@/components/headertype2";

export default function Pricing (){
    return(
            <main className="mx-auto">
              <section  className=" bg-[#FAFAFA] md:p-32">
                 <Headertype2/>
            <section className="bg-white flex flex-col text-center py-9">
            <h5 className="text-[#737373] font-bold mb-7 text-sm">PRICING</h5>
            <h1 className="text-[#252B42] font-bold text-5xl">SIMPLE PRICING</h1>
            <Breadcrumb>
            <BreadcrumbList className="text-lg ml-36 md:ml-[450px] mt-7  mb-11">
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="font-semibold text-gray-900">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/pricing" className="font-semibold text-[#737373]">Pricing</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
            </section>


            <section className="flex flex-col text-center">
              <h1 className="text-[#252B42] text-4xl mt-16 mb-3 font-bold ">Pricing</h1>
              <p className=" font-semibold text-[#737373]">Problems trying to resolve the conflict between</p> 
             <p className="font-semibold text-[#737373]"> the two major realms of Classical physics: Newtonian mechanics </p>
            <div className="flex justify-between md:px-96 md:mx-auto mx-20 space-x-2 mt-14">
              <h1 className="text-[#252B42] text-lg font-bold">Monthly</h1>
            <Switch className="border-[#23A6F0] border-[1px] w-[45px] h-[25px] px-1"/>
              <h1 className="text-[#252B42] text-lg font-bold">Yearly</h1>
              <Button className="bg-[#B2E3FF] text-[#23A6F0]  text-sm  font-semibold rounded-3xl">Save 25%</Button>
            </div>
            </section>
<section className="grid md:grid-cols-3 grid-cols-1 mx-10 md:mx-3">
              <div className="flex flex-col  text-center mt-16 md:mt-32 md:py-0 py-3 md:px-0 px-11 rounded-t-md w-[327px] h-[664px] bg-white border-[1px] border-[#23A6F0]">
                <h1 className="text-3xl font-bold my-9">FREE</h1>
                <h3 className="text-[#737373] font-bold text-xl md:text-2xl md:px-7 mb-5">Organize accross all apps by hand</h3>
                <div className="flex justify-between  mb-14"><h1 className="text-[#23A6F0] text-4xl font-bold mt-5 ml-28">0</h1><h1 className="text-[#23A6F0] md:mr-3 mt-2 text-2xl font-bold">$</h1><h1 className="text-[#8EC2F2] font-bold mt-10 md:mr-20">Per Month</h1></div>
              <div className="flex flex-col md:px-10">
                <div className="flex justify-between my-3"><Check className= " text-white bg-[#2DC071] rounded-full"/><h1 className="font-bold ">Unlimited product updates</h1></div>
                <div className="flex justify-between"><Check className="text-white bg-[#2DC071] rounded-full"/><h1  className="font-bold ">Unlimited product updates</h1></div>
                <div className="flex justify-between my-3"><Check className="text-white bg-[#2DC071] rounded-full"/><h1 className="font-bold ">Unlimited product updates</h1></div>
                <div className="flex justify-between"><Check className="text-white bg-[#BDBDBD] rounded-full"/><h1 className="font-bold  mr-14">1GB Cloud storaage</h1></div>
                <div className="flex justify-between my-3"><Check className="text-white bg-[#BDBDBD] rounded-full"/><h1 className="font-bold mr-1">Email and community support</h1>
              </div>
                <Button className="bg-[#252B42] mt-9 py-6 rounded-md">Try for Free</Button>
                </div>
                </div>




                <div className="flex flex-col  text-center mt-16 md:mt-14 md:py-0 py-3 md:px-0 px-11  rounded-t-md w-[327px] h-[737px] bg-[#252B42] border-[1px] border-[#23A6F0]">
                <h1 className="text-3xl text-white font-bold my-9">STANDARD</h1>
                <h3 className="text-white font-bold text-xl md:text-2xl md:px-7 mb-5">Organize accross all apps by hand</h3>
                <div className="flex justify-between  mb-14"><h1 className="text-[#23A6F0] text-4xl font-bold mt-5 ml-14 md:ml-28">9.99</h1><h1 className="text-[#23A6F0] md:mr-3 mt-2 text-2xl font-bold">$</h1><h1 className="text-[#8EC2F2] font-bold mt-10 md:mr-7">Per Month</h1></div>
              <div className="flex flex-col md:px-10">
                <div className="flex justify-between my-3"><Check className= " text-white bg-[#2DC071] rounded-full"/><h1 className="font-bold text-white ">Unlimited product updates</h1></div>
                <div className="flex justify-between"><Check className="text-white bg-[#2DC071] rounded-full"/><h1  className="font-bold text-white">Unlimited product updates</h1></div>
                <div className="flex justify-between my-3"><Check className="text-white bg-[#2DC071] rounded-full"/><h1 className="font-bold text-white ">Unlimited product updates</h1></div>
                <div className="flex justify-between"><Check className="text-white bg-[#BDBDBD] rounded-full"/><h1 className="font-bold text-white mr-14 ">1GB Cloud storaage</h1></div>
                <div className="flex justify-between my-3"><Check className="text-white bg-[#BDBDBD] rounded-full"/><h1 className="font-bold text-white mr-1">Email and community support</h1>
              </div>
                <Button className="bg-[#23A6F0] mt-9 py-6 text-white rounded-md">Try for Free</Button>
                </div>
                </div>



                <div className="flex flex-col  text-center mt-16 md:mt-32 md:py-0 py-3 md:px-0 px-11 rounded-t-md w-[327px] h-[664px] bg-white border-[1px] border-[#23A6F0]">
                <h1 className="text-3xl font-bold my-9">PREMIUM</h1>
                <h3 className="text-[#737373] font-bold text-xl md:text-2xl md:px-7 mb-5">Organize accross all apps by hand</h3>
                <div className="flex justify-between  mb-14"><h1 className="text-[#23A6F0] text-4xl font-bold mt-5 ml-10 md:ml-28">19.99</h1><h1 className="text-[#23A6F0]  mt-2 text-2xl font-bold">$</h1><h1 className="text-[#8EC2F2] font-bold mt-10 md:mr-5">Per Month</h1></div>
              <div className="flex flex-col md:px-10">
                <div className="flex justify-between my-3"><Check className= " text-white bg-[#2DC071] rounded-full"/><h1 className="font-bold ">Unlimited product updates</h1></div>
                <div className="flex justify-between"><Check className="text-white bg-[#2DC071] rounded-full"/><h1  className="font-bold ">Unlimited product updates</h1></div>
                <div className="flex justify-between my-3"><Check className="text-white bg-[#2DC071] rounded-full"/><h1 className="font-bold ">Unlimited product updates</h1></div>
                <div className="flex justify-between"><Check className="text-white bg-[#BDBDBD] rounded-full"/><h1 className="font-bold  mr-14">1GB Cloud storaage</h1></div>
                <div className="flex justify-between my-3"><Check className="text-white bg-[#BDBDBD] rounded-full"/><h1 className="font-bold mr-1">Email and community support</h1>
              </div>
                <Button className="bg-[#252B42] mt-9 py-6 rounded-md">Try for Free</Button>
                </div>
                </div>
            </section>
            <h1 className=" flex md:justify-center text-center md:mx-0 mx-5 text-2xl font-semibold mt-14 ">Tursted By Over 4000 Big Companies</h1>


            <section className=" bg-[#FAFAFA] py-7 md:px-0 px-20">
   <div className="grid md:grid-cols-6 grid-cols-1 ">
   
            <Image  src={"/stripe.png"} width={150} height={190} alt="" className="md:w-[150px] md:h-[190px] h-[290px] w-[250px]"/>
            <Image  src={"/aws.png"} width={150} height={190} alt="" className="md:w-[150px] md:h-[190px] h-[290px] w-[250px]"/>
            <Image  src={"/logo11.png"} width={150} height={190} alt="" className="md:w-[150px] md:h-[190px] h-[290px] w-[250px]"/>
            <Image  src={"/hooli2.png"} width={150} height={190} alt="" className="md:w-[150px] md:h-[190px] h-[290px] w-[250px]"/> 
            <Image  src={"/lyfttt.png"} width={150} height={190} alt="" className="md:w-[150px] md:h-[190px] h-[290px] w-[250px]"/>
            <Image  src={"/logo2.png"} width={150} height={190} alt="" className="md:w-[150px] md:h-[190px] h-[290px] w-[250px]"/> 
        </div>
</section>
</section>




<section>
<section className="bg-white flex flex-col text-center  py-9">
<h1 className="text-[#252B42] text-3xl font-bold mt-7 ">PRICING FAQs</h1>
<p className="text-[#737373] font-semibold">Problems trying to resolve the conflict between</p> 
<p className="text-[#737373] font-semibold mb-11">the two major realms of Classical physics</p></section>
</section>

<section className=" grid md:grid-cols-2 grid-cols-1 md:px-48 md:mx-auto mx-11 md:space-x-10 py-9 ">
  <section>
  <div className="flex flex-col mb-16">
  <div className="text-[#737373] flex justify-between">
  <ChevronRight className="text-[#23A6F0] " size={24}/>
    <h1 className="text-[#252B42] text-xl font-bold">the quick fox jumps over the lazy dog</h1></div>
    <div className="text-[#737373] ">
    <p>Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.</p></div>
  </div>

  <div className="flex flex-col mb-16">
  <div className="text-[#737373] flex justify-between">
  <ChevronRight className="text-[#23A6F0] " size={24}/>
    <h1 className="text-[#252B42] text-xl font-bold">the quick fox jumps over the lazy dog</h1></div>
    <div className="text-[#737373] ">
    <p>Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.</p></div>
  </div>


  <div className="flex flex-col mb-16">
  <div className="text-[#737373] flex justify-between">
  <ChevronRight className="text-[#23A6F0] " size={24}/>
    <h1 className="text-[#252B42] text-xl font-bold">the quick fox jumps over the lazy dog</h1></div>
    <div className="text-[#737373] ">
    <p>Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.</p></div>
  </div>
</section>

<section>
<div className="flex flex-col mb-16">
  <div className="text-[#737373] flex justify-between">
  <ChevronRight className="text-[#23A6F0] " size={24}/>
    <h1 className="text-[#252B42] text-xl font-bold">the quick fox jumps over the lazy dog</h1></div>
    <div className="text-[#737373] ">
    <p>Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.</p></div>
  </div>


  <div className="flex flex-col mb-16">
  <div className="text-[#737373] flex justify-between">
  <ChevronRight className="text-[#23A6F0] " size={24}/>
    <h1 className="text-[#252B42] text-xl font-bold">the quick fox jumps over the lazy dog</h1></div>
    <div className="text-[#737373] ">
    <p>Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.</p></div>
  </div>

 
  <div className="flex flex-col mb-16">
  <div className="text-[#737373] flex justify-between">
  <ChevronRight className="text-[#23A6F0] " size={24}/>
    <h1 className="text-[#252B42] text-xl font-bold">the quick fox jumps over the lazy dog</h1></div>
    <div className="text-[#737373] ">
    <p>Met minim Mollie non desert Alamo est sit cliquey 
dolor do met sent. RELIT official consequent door ENIM 
RELIT Mollie. Excitation venial consequent sent 
nostrum met.</p></div>
  </div>
</section>
</section>
<h1 className="text-[#737373] md:text-xl text-2xl flex justify-center md:mx-auto mx-12 font-semibold">Haven&apos;t got your answer? Contact our support</h1>


<DaysOffer/>


            </main>
    )
}    
