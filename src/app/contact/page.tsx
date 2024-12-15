import { FaTwitter } from "react-icons/fa6";
import { FaEnvelope,  FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Headertype2 from "@/components/headertype2";
import Image from "next/image";
import {  MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact(){
    return(
        <main>
            <Headertype2/>
            <section>
                <div className=" bg-white flex justify-between">
                <div className=" ml-32 mt-32">
            <h5 className="text-sm   text-[#252B42] font-bold mb-11">CONTACT US</h5>
            <h1 className="text-5xl font-bold text-[#252B42] mb-5">Get in touch today!</h1>
            <p className="text-[#737373] ">we know how large onjects will act,</p>
            <p className="text-[#737373] mb-5">but things on a small scale</p>     
           <h3 className="text-[#252B42] mb-3 text-2xl font-bold">Phone ; +451 215 215 </h3>
           <h3 className="text-[#252B42] text-2xl font-bold">Fax : +451 215 215</h3>
           <div className="flex  mt-10 space-x-5">
<a
  href="tel:+923132480307"
  aria-label="Twitter"
>
  <FaTwitter size={27}  />
 
</a>
<a
  href="tel:+923132480307"
  aria-label="Phone"
>
  <FaFacebook size={27} />
 
</a>

<a
  href="https://github.com/yumnashaikh07"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className=" text-black "
>
  <FaInstagram size={27}   />
</a>
<a
  href="https://www.linkedin.com/in/yumna-shaikh-b90191337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FaLinkedin size={27} className=""/>
</a>
</div>
            </div>
            <Image src={"/contactbg.png"} width={603} height={609} alt="" className="ml-9"/>
                </div>

            </section>

            <section  className="bg-white flex flex-col text-center py-9">
            <h5 className="text-[#737373] font-bold mb-5 text-sm">VISIT OUR OFFICE</h5>
            <h1 className="text-[#252B42] font-bold text-3xl">We help small businesses</h1>
            <h1 className="text-[#252B42] font-bold text-3xl">with big ideas</h1>

            <div className="flex justify-between p-32">
                <div className="text-[#252B42]  h-[343px] w-[327px] p-10 flex flex-col">
                  <Phone className="text-[#23A6F0] ml-20 mb-9 " size={59}/>
                  <h6 className="text-[#252B42] font-semibold text-lg">georgia.young@example.com</h6>
                  <h6 className="text-[#252B42] font-semibold  text-lg mb-5">georgia.young@ple.com</h6>
                  <h5 className="text-[#252B42] font-semibold text-xl mb-3">Get Support</h5>
                  <Button className="border-[1px] border-[#23A6F0] bg-white text-[#23A6F0] rounded-3xl px-5 py-6">Submit Request</Button>
                </div>
            
                <div className="text-[#252B42] bg-[#252B42] h-[403px] w-[327px]  p-10 flex flex-col">
                  <MapPin className="text-[#23A6F0] ml-[85px] mb-9  mt-10" size={59}/>
                  <h6 className="text-white font-semibold text-lg">georgia.young@example.com</h6>
                  <h6 className="text-white font-semibold  text-lg mb-5">georgia.young@ple.com</h6>
                  <h5 className="text-white font-semibold text-xl mb-3">Get Support</h5>
                  <Button className="border-[1px] border-[#23A6F0] bg-[#252B42] text-[#23A6F0] rounded-3xl px-5 py-6">Submit Request</Button>
                </div>
            
                <div className="text-[#252B42]  h-[343px] w-[327px] p-10 flex flex-col">
                  <FaEnvelope className="text-[#23A6F0] ml-20 mb-9 " size={59}/>
                  <h6 className="text-[#252B42] font-semibold text-lg">georgia.young@example.com</h6>
                  <h6 className="text-[#252B42] font-semibold  text-lg mb-5">georgia.young@ple.com</h6>
                  <h5 className="text-[#252B42] font-semibold text-xl mb-3">Get Support</h5>
                  <Button className="border-[1px] border-[#23A6F0] bg-white text-[#23A6F0] rounded-3xl px-5 py-6">Submit Request</Button>
                </div>
            </div>
            </section>
            <section className="py-20 bg-white">
              <Image src={"/Arrow 2.png"} width={73} height={21} alt="" className="ml-[600px]"/>
              <h1 className="text-[#252B42] font-bold my-5 text-2xl flex justify-center">WE Can&apos;t WAIT TO MEET YOU</h1>
              <h1 className="text-[#252B42] font-bold my-5 text-6xl flex justify-center">Let&apos;s Talk</h1>
              <Button className="text-white ml-[559px] px-16 bg-[#23A6F0] w-[106px] h-[22px] py-5 rounded-sm">Try it free now</Button>
            </section>
        </main>
    )
}