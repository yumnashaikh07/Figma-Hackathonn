import { Phone } from "lucide-react"
import { FaFacebook, FaInstagram, FaPhone,  FaRegEnvelope,  FaTwitter, FaYoutube } from "react-icons/fa"  
export default function Herobanner (){
    return(
        <main className=" text-white hidden px-24 text-sm md:flex text-center justify-between h-[50px]">
              <div className="flex "><Phone className="mt-3 mr-1" size={17}/><h3 className="mt-3 font-thin">(225)555-0118</h3></div> 
              {/* ml-5 */}
              {/* ml-5 mr-20 */}
              <div className="flex  gap-x-1  "><FaRegEnvelope className="mt-[13px]" size={15}/><h3 className="mt-3 mr-7 font-thin">michelle.rivera@example.com</h3></div>
              {/* mr-16 */}
                <h3 className=" font-semibold  mt-3">Follow Us  and get a chance to win 80% off<span className="font-semibold hover:underline mr-20"> ShopNow</span></h3>
        <div className="flex gap-x-3 "><h3 className="mt-3">Follow Us  :</h3><FaInstagram className="mt-4"/><FaYoutube className="mt-4"/><FaFacebook className="mt-4"/><FaTwitter className="mt-4"/>
        {/* mr-9  */}
</div>
        </main>
    )
}