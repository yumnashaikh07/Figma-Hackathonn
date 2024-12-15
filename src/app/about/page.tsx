import { FaFacebook, FaTwitter ,FaInstagram,  FaPlay } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Headertype2 from "@/components/headertype2";
export default function About(){
    return(
        <main className="mx-auto">
            <Headertype2/>
    <section className="md:ml-32 grid md:grid-cols-2 grid-cols-1">
      <div className="md:mt-32 text-center md:text-left md:py-0 py-32">
            <h5 className="text-sm hidden md:flex font-bold mb-11">ABOUT COMPANY</h5>
            <h1 className="text-5xl font-bold text-gray-800 mb-5">ABOUT US</h1>
            <p className="text-gray-400 ">we know how large onjects will act,</p>
            <p className="text-gray-400 mb-5">but things on a small scale</p>     
            <Button className="  py-5 rounded-sm bg-[#23A6F0] text-white"><Link href={"/"}>Get Quote Now</Link></Button>
      </div>
        <Image
        src={"/abouttop.png"}
        height={429}
        width={600}
        alt=""
        />
    </section>


    <section className="grid grid-cols-1 md:grid-cols-2">
        <div className=" md:ml-40 text-center md:text-left md:py-0 py-32 md:mt-16">
        <h5 className="text-red-500 mb-5 font-bold text-sm">Problems trying</h5>
        <h1 className="text-2xl font-bold">Met minim Mollie non desert</h1>
        <h1 className="text-2xl font-bold">Alamo est sit cliwuhy dolor do</h1>
        <h1 className="text-2xl font-bold">met sent.</h1>
        </div>
        <div className="text-gray-500 font-semibold md:mt-28 md:px-0 px-7 md:mr-44 ">
            <h3>Problems trying to resolve the conflict between the two major realms of
            Classical physics: Newtonisan mechanics</h3>
        </div>
    </section>

    <section className="grid md:grid-cols-4 grid-cols-1 p-20 md:mt-16 mt-11 text-center md:mx-24">
        <div><h1 className="text-6xl font-bold">15K</h1><p className="text-gray-500 mt-3 font-semibold">Happy Customers</p></div>
        <div><h1 className="text-6xl md:mt-0 mt-24 font-bold">150K</h1><p className="text-gray-500 mt-3 ml-3 font-semibold">Monthly Visitors</p></div>
        <div><h1 className="text-6xl  md:mt-0 mt-24 font-bold">15</h1><p className="text-gray-500 mt-3 font-semibold">Countries Worldwide</p></div>
        <div><h1 className="text-6xl md:mt-0 mt-24 font-bold">100+</h1><p className="text-gray-500 mt-3  font-semibold">Top Partners</p></div>
    </section>

    <section className="relative mx-auto">
        <Image  src={"/abouttt.png"} width={1150} height={790} alt="" className="md:ml-16 md:w-[1150px] w-[635px] h-[316px] md:h-auto"/>
        <Button className="bg-blue-500 rounded-full md:px-[30px] px-3 py-1 md:py-9 text-white absolute top-1/2 left-1/2 ml-[1px] md:ml-[9px] transform -translate-x-1/2 -translate-y-1/2"><FaPlay size={1}/></Button>
    </section>


<div className="flex flex-col justify-center text-center">
<h1 className=" font-bold text-5xl mb-3">Meet Our Team</h1>
<h3 className="text-sm text-gray-500 font-semibold">Problems trying to resolve the conflict between</h3>
<h3 className="text-sm text-gray-500 font-semibold mb-32">the two major realms of Classical physics: Newtonisan mechanics</h3>
</div>
    <section className="md:flex md:justify-between grid grid-cols-1   md:space-x-5 md:p-20">
        <div className="text-center">
          <Image src={"/row (1).png"} width={327} height={230} alt="img"className="mx-11 md:mx-0"/>
          <h3 className="font-bold mt-7">Username</h3>
            <h3 className="text-gray-500 font-semibold mt-2">Profession</h3>
            <div className="flex gap-x-3  ml-40 md:ml-[115px] md:mb-0 mb-5 mt-2"><FaFacebook className="text-blue-500" size={24}/><FaInstagram className="md:text-blue-500 text-[#E51F5A]" size={24}/><FaTwitter className="text-blue-500" size={24}/></div> 
        </div>
    
    
        <div className="text-center">
        <Image src={"/row2.png"}  width={327} height={230} alt="img"className="mx-11 md:mx-0"/>
            <h3 className="font-bold mt-7">Username</h3>
            <h3 className="text-gray-500 font-semibold mt-2">Profession</h3>
            <div className="flex gap-x-3 ml-40  md:ml-[115px] md:mb-0 mb-5 mt-2"><FaFacebook className="text-blue-500" size={24}/><FaInstagram className="md:text-blue-500 text-[#E51F5A]"size={24}/><FaTwitter className="text-blue-500" size={24}/></div> 
        </div>
    
    
        <div className="text-center">
        <Image src={"/row3.png"} width={327} height={230} alt="img"className="mx-11 md:mx-0"/>
            <h3 className="font-bold mt-7">Username</h3>
            <h3 className="text-gray-500 font-semibold mt-2">Profession</h3>
            <div className="flex gap-x-3 ml-40 md:ml-[115px] md:mb-0 mb-5 mt-2"><FaFacebook className="text-blue-500" size={24}/><FaInstagram className="md:text-blue-500 text-[#E51F5A]" size={24}/><FaTwitter className="text-blue-500" size={24}/></div> 
        </div>
    </section>

    <section className=" bg-gray-50 p-20">
        <div className="flex justify-center text-center flex-col">
        <h1 className="text-gray-700 font-bold text-3xl mb-3">Big Companies Are Here</h1>
        <h3 className="text-sm text-gray-500 font-semibold">Problems trying to resolve the conflict between</h3>
        <h3 className="text-sm text-gray-500 font-semibold mb-20">the two major realms of Classical physics: Newtonisan mechanics</h3></div>
        <div className="grid md:grid-cols-6 grid-cols-1 ">
   
            <Image  src={"/stripe.png"} width={150} height={190} alt="" className="md:w-[150px] md:h-[190px] h-[290px] w-[250px]"/>
            <Image  src={"/aws.png"} width={150} height={190} alt="" className="md:w-[150px] md:h-[190px] h-[290px] w-[250px]"/>
            <Image  src={"/logo11.png"} width={150} height={190} alt="" className="md:w-[150px] md:h-[190px] h-[290px] w-[250px]"/>
            <Image  src={"/hooli2.png"} width={150} height={190} alt="" className="md:w-[150px] md:h-[190px] h-[290px] w-[250px]"/> 
            <Image  src={"/lyfttt.png"} width={150} height={190} alt="" className="md:w-[150px] md:h-[190px] h-[290px] w-[250px]"/>
            <Image  src={"/logo2.png"} width={150} height={190} alt="" className="md:w-[150px] md:h-[190px] h-[290px] w-[250px]"/> 
        </div>
    </section>


    <section className=" w-full bg-[#2A7CC7] flex justify-between">
        <div className=" text-white py-16 md:py-0 md:px-0 px-16 md:mt-36 md:ml-44 ">
            <h5 className="font-bold text-sm mb-5 md:ml-0 ml-20">WORK WITH US</h5>
            <h1 className="text-5xl font-bold text-center mb-9">Now Let&apos;s grow Yours</h1>
                <p className="md:text-left text-center">The gradual accumalation of information about atomic and</p>
                <p className=" mb-7 md:text-left text-center">small-scale behaviour during the first quarter of 20th</p>
        <Button className="bg-[#2A7CC7] md:ml-0 ml-[67px] border-2 px-10 text-lg rounded-sm py-6 border-white">Button</Button>
        </div>
        <Image
        src={"/about.png"}
        width={500}
        height={636}
        alt=""
        className="hidden md:flex"/>
    </section>
        </main>
    )
}