import { FaTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
export default function DaysOffer(){
    return(
        <main className="mx-auto">
            
<section className="flex flex-col md:mx-auto mx-12 text-center py-32">
  <h1 className="text-4xl text-[#252B42] font-bold mt-14 ">Start your 14 days free trail</h1>
  <p className="mt-3 text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey dolor </p>
  <p className="mb-11 text-[#737373]">do met sent. RELIT official consequent.</p>
  <Button className="text-white md:ml-[550px] ml-24 px-16 bg-[#23A6F0] w-[106px] h-[22px] py-5 rounded-sm">Try it free now</Button>
<div className="flex md:ml-[520px] ml-14 mt-10 space-x-5">
<a
  href="tel:+923132480307"
  aria-label="Twitter"
>
  <FaTwitter size={37} className=" text-blue-400" />
 
</a>
<a
  href="tel:+923132480307"
  aria-label="Phone"
>
  <FaFacebook size={37} className=" text-[#463976] " />
 
</a>

<a
  href="https://github.com/yumnashaikh07"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className=" text-black "
>
  <FaInstagram size={37}   />
</a>
<a
  href="https://www.linkedin.com/in/yumna-shaikh-b90191337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FaLinkedin size={35} className=" text-blue-600"/>
</a>
</div>
</section>
        </main>
    )
}