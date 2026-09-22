import Navbar from "./components/Navbar";
import json from "../package.json"
import SectionOne from "./components/Home/SectionOne";

const page = () => {
  return(
    <main className="w-screen overflow-x-hidden flex flex-col items-center">
      
      <Navbar />

      <div className="homeSection w-full h-[100dvh] relative flex flex-col justify-center px-[4%] gap-6">

        <div className="hidden md:flex absolute right-0 bottom-[20%] justify-evenly items-center gap-3 rotate-90">
          <span className="text-[#a6a6a6] text-[clamp(0.5rem,4vw,0.8rem)]">scroll to explore</span>
          <div className="h-[1px] bg-[#a6a6a6] w-[4rem]"></div>
        </div>

      <div className="w-full flex flex-col justify-evenly items-start">
        <div className="flex gap-2 justify-around items-center">
          <div className="h-[2px] w-[4rem] bg-acent"></div>
          <p className="uppercase text-gray text-[0.8rem]">independent digital studio • est.2026</p>
        </div>

        <h2 className="text-[clamp(4rem,6vw,7rem)] leading-[1.3] font-mainfont text-[#fff]">
          We bring <br /> 
          <span className="italic text-acent">Ideas</span> <br />
          to <span className="italic text-acent">real</span> life!
        </h2>

        <div className="w-full">
          <p className="text-gray text-[1rem]">
            {json.name} is a creative technology studio for the brands <br /> 
            shaping what&apos;s next. Strategy, design and code all in <br />
            one sharp team.
          </p>
        </div>
      </div>

      <div className="flex justify-start gap-4 ">
        <button className="bg-acent text-[#000] p-[1%] md:px-[1%] md:py-[0.7%] ">
          Contact Us
        </button>

        <button className="bg-transparent border-gray border-[0.1em] text-gray p-[1%] md:px-[1%] md:py-[0.7%] ">
          Explore Our Work
        </button>
      </div>
      </div>

      <SectionOne />
    </main>
  );
}

export default page;
