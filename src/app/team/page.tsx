
import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

  import { FaFacebook, FaTwitter ,FaInstagram} from "react-icons/fa";
import DaysOffer from "@/components/14daysoffer";
import Headertype2 from "@/components/headertype2";

export default function Team(){
    return(
        <main className="mx-auto">
            <Headertype2/>
            <section className="bg-white flex flex-col text-center py-16 md:py-9">
            <h5 className="text-[#737373] font-bold mb-7 text-sm">WHAT WE DO</h5>
            <h1 className="text-[#252B42] font-bold text-5xl">Innovation tailored for you</h1>
            <Breadcrumb>
            <BreadcrumbList className="text-lg ml-36 md:ml-[570px] mt-7  mb-11">
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="font-semibold text-gray-900">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/team" className="font-semibold text-[#737373]">Team</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
            </section>
            <section className="md:flex md:justify-between sm:grid sm:grid-col- md:mx-9 md:space-x-3">
              <div>  <Image src={"/team1.png"} height={530} width={700} alt="img" className="hidden md:flex" /></div>
              <div>  <Image src={"/team01.png"} height={530} width={700} alt="img" className="md:hidden"/></div>
              <div className="flex justify-between md:mt-0 mt-3 md:flex-col md:space-x-0 space-x-3 md:space-y-3">
                    <Image src={"/team2a.png"} height={260} width={361} alt="img"className="hidden md:flex"/>
                    <Image src={"/team02a.png"} height={260} width={204} alt="img"className="md:hidden"/>
                    <Image src={"/team2b.png"} height={260} width={361} alt="img" className="hidden md:flex"/>
                    <Image src={"/team02b.png"} height={260} width={204} alt="img" className="md:hidden"/>
              </div>
              <div  className="flex justify-between md:mt-0 mt-3 md:flex-col md:space-x-0 space-x-3 md:space-y-3">
                    <Image src={"/team3a.png"} height={260} width={361} alt="img" className="hidden md:flex"/>
                    <Image src={"/team03a.png"} height={260} width={204} alt="img"className="md:hidden"/>
                    <Image src={"/team3b.png"} height={260} width={361} alt="img" className="hidden md:flex"/>
                    <Image src={"/team03b.png"} height={260} width={204} alt="img"className="md:hidden"/>
              </div>
            </section>


                    {/* TEAM USER SECTION */}
<section className="flex flex-col text-center md:p-32">
    <h1 className="text-[#252B42] md:p-0 p-20 text-4xl font-bold ">Meet Our Team</h1>

 
                       {/* 3 CARDS SECTION:01 */}
<section className="md:flex md:justify-between grid grid-cols-1 md:space-x-5 md:p-20">
 
    <div className="md:text-center">
    <Image src={"/teamuser1.jpg"} width={327} height={230} alt="img" className="mx-11 md:mx-0"/>
    <h3 className="font-bold mt-7">Username</h3>
        <h3 className="text-gray-500 font-semibold mt-2">Profession</h3>
        <div className="flex gap-x-3 ml-40 md:ml-[90px] md:mb-0 mb-5 mt-2"><FaFacebook className="text-blue-500" size={24}/><FaInstagram className="md:text-blue-500 text-[#E51F5A]" size={24}/><FaTwitter className="text-blue-500" size={24}/></div> 
    </div>


    <div className="text-center">
    <Image src={"/teamuser2.png"} width={327} height={230} alt="img"className="mx-11 md:mx-0"/>
    <h3 className="font-bold mt-7">Username</h3>
        <h3 className="text-gray-500 font-semibold mt-2">Profession</h3>
        <div className="flex gap-x-3 ml-40 md:ml-[90px] md:mb-0 mb-5 mt-2"><FaFacebook className="text-blue-500" size={24}/><FaInstagram className="md:text-blue-500 text-[#E51F5A]" size={24}/><FaTwitter className="text-blue-500" size={24}/></div> 
    </div>



    <div className="text-center">
    <Image src={"/teamuser3.jpg"} width={327} height={230} alt="img"className="mx-11 md:mx-0"/>
    <h3 className="font-bold mt-7">Username</h3>
        <h3 className="text-gray-500 font-semibold mt-2">Profession</h3>
        <div className="flex gap-x-3 ml-40 md:ml-[90px] md:mb-0 mb-5 mt-2"><FaFacebook className="text-blue-500" size={24}/><FaInstagram className="md:text-blue-500 text-[#E51F5A]" size={24}/><FaTwitter className="text-blue-500" size={24}/></div> 
    </div>

</section>
                                  {/* 3 CARDS SECTION:02 */}
<section className="md:flex md:justify-between grid grid-cols-1   md:space-x-5 md:p-20">
    <div className="text-center">
      <Image src={"/row3.png"} width={327} height={230} alt="img"className="mx-11 md:mx-0"/>
      <h3 className="font-bold mt-7">Username</h3>
        <h3 className="text-gray-500 font-semibold mt-2">Profession</h3>
        <div className="flex gap-x-3  ml-40 md:ml-[90px] md:mb-0 mb-5 mt-2"><FaFacebook className="text-blue-500" size={24}/><FaInstagram className="md:text-blue-500 text-[#E51F5A]" size={24}/><FaTwitter className="text-blue-500" size={24}/></div> 
    </div>


    <div className="text-center">
    <Image src={"/team2b.jpg"} width={327} height={230} alt="img"className="mx-11 md:mx-0"/>
        <h3 className="font-bold mt-7">Username</h3>
        <h3 className="text-gray-500 font-semibold mt-2">Profession</h3>
        <div className="flex gap-x-3 ml-40  md:ml-[90px] md:mb-0 mb-5 mt-2"><FaFacebook className="text-blue-500" size={24}/><FaInstagram className="md:text-blue-500 text-[#E51F5A]"size={24}/><FaTwitter className="text-blue-500" size={24}/></div> 
    </div>


    <div className="text-center">
    <Image src={"/row (1).png"} width={327} height={230} alt="img"className="mx-11 md:mx-0"/>
        <h3 className="font-bold mt-7">Username</h3>
        <h3 className="text-gray-500 font-semibold mt-2">Profession</h3>
        <div className="flex gap-x-3 ml-40 md:ml-[90px] md:mb-0 mb-5 mt-2"><FaFacebook className="text-blue-500" size={24}/><FaInstagram className="md:text-blue-500 text-[#E51F5A]" size={24}/><FaTwitter className="text-blue-500" size={24}/></div> 
    </div>
</section>

                                    {/* 3 CARDS SECTION:03 */}
<section className="md:flex md:justify-between grid grid-cols-1  md:space-x-5 md:p-20">
<div className="text-center">
    <Image src={"/row2.png"} width={327} height={230} alt="img"className="mx-11 md:mx-0"/>
    <h3 className="font-bold mt-7">Username</h3>
        <h3 className="text-gray-500 font-semibold mt-2">Profession</h3>
        <div className="flex gap-x-3 ml-40 md:ml-[90px] md:mb-0 mb-5 mt-2"><FaFacebook className="text-blue-500" size={24}/><FaInstagram className="md:text-blue-500 text-[#E51F5A]" size={24}/><FaTwitter className="text-blue-500" size={24}/></div> 
</div>
    

<div className="text-center">
    <Image src={"/teamuser8.jpg"} width={327} height={230} alt="img"className="mx-11 md:mx-0"/>
    <h3 className="font-bold mt-7">Username</h3>
        <h3 className="text-gray-500 font-semibold mt-2">Profession</h3>
        <div className="flex gap-x-3 ml-40 md:ml-[90px] md:mb-0 mb-5  mt-2"><FaFacebook className="text-blue-500" size={24}/><FaInstagram className="md:text-blue-500 text-[#E51F5A]" size={24}/><FaTwitter className="text-blue-500" size={24}/></div> 
</div>


<div className="text-center">
    <Image src={"/teamuser9.jpg"} width={327} height={230} alt="img"className="mx-11 md:mx-0"/>
    <h3 className="font-bold mt-7">Username</h3>
        <h3 className="text-gray-500 font-semibold mt-2">Profession</h3>
        <div className="flex gap-x-3 ml-40 md:ml-[90px] mt-2"><FaFacebook className="text-blue-500" size={24}/><FaInstagram className="md:text-blue-500 text-[#E51F5A]" size={24}/><FaTwitter className="text-blue-500" size={24}/></div> 
</div>
</section>
</section>
<DaysOffer/>
</main>
    )}