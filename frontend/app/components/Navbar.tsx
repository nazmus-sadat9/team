import json from "../../package.json";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  return (
    <div className="w-full z-999 flex font-mainfont justify-between items-center pl-[4%] py-[1.5%] border-b-[0.1em] fixed left-0 top-0 border-[#737373] backdrop-blur-lg ">
      <div className="flex gap-3 items-center justify-start">
       <div className="w-[0.5rem] aspect-[1/1] bg-acent"></div> 
        <h2 className="uppercase text-[#fff]">{json.name}</h2>
      </div>

      <div className="hidden md:flex w-[50%] justify-evenly items-center text-gray">
        <Link className="navlink" href="/">Home</Link>
        <Link className="navlink" href="">Client Review</Link>
        <Link className="navlink" href="/team">Our Team</Link>
        <Link className="navlink" href="/about">About Us</Link>
        <Link href="" 
        className="contactButton md:p-[1%] border-[#737373] border-[0.1em] flex justify-evenly items-center">
        Let&apos;s Talk
          <Image
            src="/arrow_outward.svg"
            alt="Arrow icon"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
