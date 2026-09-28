"use client";
import { useState } from "react";

const page = () => {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");


  return (
    <div className="linearBg h-screen w-screen flex flex-col justify-evenly items-center py-[6%]">

      {/* level one */}
      <div className="w-[70%] bg-[#0D0D0D9F] md:w-[50%] p-[4%] border-[0.1em] border-darkGray">
        <div className="w-full flex gap-2">
          <span className="uppercase text-lightGray text-[clamp(0.5rem,4vw,0.8)]">step 1/3</span>
          <div className="w-full h-[3px] bg-lightGray">
            <div className="w-[33%] h-full bg-acent"></div>
          </div>
        </div>

        <div className="w-full py-[6%] text-gray text-[clamp(1.5rem,4vw,2rem)]">
          <h3>What do you need?</h3>
        </div>

        <div className="w-full grid grid-cols-2 gap-4">
          <div className="px-[4%] bg-background py-[3%] border-darkGray border-[0.1em] text-lightGray">Static Page</div>
          <div className="px-[4%] bg-background py-[3%] border-darkGray border-[0.1em] text-lightGray">Web Service</div>
          <div className="px-[4%] bg-background py-[3%] border-darkGray border-[0.1em] text-lightGray">Landing Page</div>
          <div className="px-[4%] bg-background py-[3%] border-darkGray border-[0.1em] text-lightGray">Design</div>
          <div className="px-[4%] bg-background py-[3%] border-darkGray border-[0.1em] text-lightGray">Others</div>
        </div>

        <div className="w-full flex justify-end pt-[8%]">
          <button className="px-[4%] py-[2%] bg-acent text-background">Continue</button>
        </div>

      </div>

      {/* level two */}
      <div className="w-[70%] bg-[#0D0D0D9F] md:w-[50%] p-[4%] border-[0.1em] border-darkGray">
        <div className="w-full flex gap-2">
          <span className="uppercase text-lightGray text-[clamp(0.5rem,4vw,0.8)]">step 2/3</span>
          <div className="w-full h-[3px] bg-lightGray">
            <div className="w-[66%] h-full bg-acent"></div>
          </div>
        </div>

        <div className="w-full py-[6%] text-gray text-[clamp(1.5rem,4vw,2rem)]">
          <h3>What&apos;s your budget?</h3>
        </div>

        <div className="w-full grid grid-cols-2 gap-4">
          <div className="px-[4%] bg-background py-[3%] border-darkGray border-[0.1em] text-lightGray">500 $</div>
          <div className="px-[4%] bg-background py-[3%] border-darkGray border-[0.1em] text-lightGray">500-1000 $</div>
          <div className="px-[4%] bg-background py-[3%] border-darkGray border-[0.1em] text-lightGray">1000-2000 $</div>
          <div className="px-[4%] bg-background py-[3%] border-darkGray border-[0.1em] text-lightGray">Others</div>
        </div>

        <div className="w-full flex justify-between pt-[8%]">
          <button className="px-[4%] py-[2%] text-gray bg-background border-darkGray border-[0.1em]">Back</button>
          <button className="px-[4%] py-[2%] bg-acent text-background">Continue</button>
        </div>

      </div>

      {/* level three */}
      <div className="w-[70%] bg-[#0D0D0D9F] md:w-[50%] p-[4%] border-[0.1em] border-darkGray">
        <div className="w-full flex gap-2">
          <span className="uppercase text-lightGray text-[clamp(0.5rem,4vw,0.8)]">step 3/3</span>
          <div className="w-full h-[3px] bg-lightGray">
            <div className="w-full h-full bg-acent"></div>
          </div>
        </div>

        <div className="w-full py-[6%] text-gray text-[clamp(1.5rem,4vw,2rem)]">
          <h3>How do you contact us?</h3>
        </div>

        <form className="w-full grid grid-cols-2 grid-rows-7 gap-4">
          <div className="flex flex-col gap-2 text-lightGray col-span-1 row-span-1">
            <label>NAME</label>
            <input
              type="text"
              name="name"
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="border-darkGray bg-background border-[0.1em] p-[4%]"
            />
          </div>

          <div className="flex flex-col gap-2 text-lightGray col-span-1 row-span-1">
            <label>EMAIL</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-darkGray bg-background border-[0.1em] p-[4%]"
            />
          </div>

          <div className="flex flex-col gap-2 text-lightGray col-span-1 row-span-1">
            <label>COMPANY(optional)</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="border-darkGray bg-background border-[0.1em] p-[4%]"
            />
          </div>

          <div className="flex flex-col gap-2 text-lightGray col-span-2 row-span-3">
            <label>DESCRIPTION</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-darkGray bg-background border-[0.1em] p-[4%]"
            ></textarea>
          </div>

          <div className="col-span-2 row-span-1">
            <button className="px-[4%] py-[2%] bg-acent text-background">Continue</button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default page;
