import { Phone } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaRegEnvelope,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
export default function Herobanner() {
  return (
    <main className=" text-white hidden px-24 text-sm md:flex text-center justify-between h-[50px]">
      <div className="flex ">
        <Phone className="mt-[15px] mr-1" size={17} />
        <h3 className="mt-3 font-thin">(225)555-0118</h3>
      </div>

      <div className="flex  gap-x-1  ">
        <FaRegEnvelope className="mt-[15px]" size={15} />
        <h3 className="mt-3 mr-7 font-thin">michelle.rivera@example.com</h3>
      </div>

      <h3 className=" font-semibold  mt-3">
        Follow Us and get a chance to win 80% off
        <span className="font-semibold hover:underline mr-20"> ShopNow</span>
      </h3>
      <div className="flex gap-x-3 ">
        <h3 className="mt-3">Follow Us :</h3>
        <Link href={"https://github.com/yumnashaikh07"}><FaInstagram className="mt-4" /></Link>
        <Link href={"https://github.com/yumnashaikh07/NEXTJS-DESIGN-JAM-2025"}><FaYoutube className="mt-4" /></Link>
        <Link href={"https://github.com/yumnashaikh07/NEXTJS-DESIGN-JAM-2025-market-place"}><FaFacebook className="mt-4" /></Link>
        <Link href={"https://www.linkedin.com/in/yumna-shaikh-b90191337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><FaTwitter className="mt-4" /></Link>
      </div>
    </main>
  );
}
