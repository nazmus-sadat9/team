import Navbar from "../components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <div className="linearBg w-full font-mainfont h-screen">
      <Navbar />

      <div className="py-[6%] px-[4%] w-full h-full flex flex-col">
        <div className="w-full">
          <h2 className="text-[clamp(2rem,6vw,5rem)] text-gray">About Us</h2>
        </div>

        <div className="text-gray">
          <h3 className="text-[clamp(1.8rem,4vw,3rem)] py-[3%]">
            Who We Are?
          </h3>

          <p>
            We are a full-service digital agency based in Bangladesh, partnering with brands worldwide to bring digital ideas to life. <br />
            From initial design and technical development to seamless deployment, we craft high-performing websites and digital products <br /> 
            tailored to your goals.
          </p>
        </div>

      <div className="text-gray">
        <h3 className="text-[clamp(1.8rem,4vw,3rem)] py-[3%]">
          What We Do?
        </h3>

        <ul className="list-disc w-full pl-[5%]">
          <li>Design &and; Experience: Modern, intuitive interfaces crafted to engage your audience.</li>
          <li>development &and; deployment : Clean, scalable code built for speed, security and reliability.</li>
          <li>Digital Strategy: End-to-end collaboration to built, launch and refine digital products.</li>
        </ul>
      </div>

      <div className="w-full text-gray">
          <h3 className="text-[clamp(1.8rem,4vw,3rem)] py-[3%]">
            Why Work With Us?
          </h3>

        <p>
          We don&apos;t just build websites, we act as your dedicated digital partner. Whether you are launching a new product or elevating an existing online presence, we work closely with your team to deliver results that make an impact.
        </p>
      </div>

      <div className="w-full py-[6%] text-lightGray uppercase">
        <button className="flex gap-2">
          <span>meet our team</span>
          <Image 
            src="/arrow_outward.svg"
            alt="arrow icon"
            width={20}
            height={20}
          />
        </button>
      </div>

      </div>
    </div>
  );
}

export default page;
