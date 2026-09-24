import Image from "next/image";

const SectionOne = () => {
  return (
    <div className="w-full bg-background py-[3%] border-lightGray flex flex-col justify-between items-center">

      <div className="w-full">
      <div className="w-full p-[4%] flex flex-col md:flex-row justify-between items-center ">

      <div className="flex justify-around items-center">
         <div>
           <h2 className="text-[clamp(4rem,4vw,6rem)] leading-[1.3] font-mainfont text-[#fff]">
            Ideas with <br />
            <span className="italic text-acent">gravity</span>.
          </h2>
         </div>
      </div>

      <div className="">
        <div className="text-gray">
          <p>
            We create brands and digital products that earn <br />
            attention. Create feeling and hold under a <br />
            Closer look. Just ldeas that matter. <br />
            From thought to final pixel, we bring the full <br />
            picture into focus.
          </p>
        </div>

        <div className="uppercase text-lightGray grid grid-cols-4 gap-2 pt-[6%] pb-[8%]">
          <div className="py-[5%] border-[0.1em] border-lightGray flex justify-center items-center">
            Web
          </div>
          <div className="py-[5%] border-[0.1em] border-lightGray flex justify-center items-center">
            brand
          </div>
          <div className="py-[5%] border-[0.1em] border-lightGray flex justify-center items-center">
            identity
          </div>
          <div className="py-[5%] border-[0.1em] border-lightGray flex justify-center items-center">
            design
          </div>
        </div>

        <div className="flex gap-2">
              <span className="text-gray">get your site today</span>
              
              <Image 
                src="/arrow_outward.svg"
                alt="arrow icon"
                width={20}
                height={20}
              />
        </div>
      </div>

      </div>

      {/* Grid boxes */}

      <div className="grid grid-cols-1 md:grid-cols-4 py-[4%]">
        
        <div className="w-full px-[3%] border-t-[0.1em] border-lightGray flex gap-4 flex-col items-start ">
          {/* card topbar */}
          <div className="w-full flex justify-between items-center">
            <div className="text-lightGray">01</div>
            <div className="text-acent">icon</div>
          </div>

          {/* card header */}
          <h2 className="text-gray">Development</h2>

          {/* card description */}
          <p className="text-lightGray text-[0.9rem]">
            First, fexible systems built for <br />
            ambitious teams and the next <br />
            chapter for your business.
          </p>

        </div>

        <div className="w-full border-lightGray border-t-[0.1em] border-l-[0.1em] flex flex-col items-start gap-4 px-[3%]">
          
          <div className="w-full flex justify-between items-center">
            <div className="text-lightGray">02</div>
            <div className="text-acent">icon</div>
          </div>

          <h2 className="text-gray">Web Design</h2>

          <p className="text-lightGray text-[0.9rem]">
            Digital experience with a point <br />
            of view, crafted to make <br />
            brands impossible to ignore.
          </p>
        </div>

        <div className="w-full px-[3%] border-t-[0.1em] border-l-[0.1em] border-lightGray flex gap-4 flex-col items-start">
          
          <div className="w-full flex justify-between items-center">
            <div className="text-lightGray">03</div>
            <div className="text-acent">icon</div>
          </div>

          <h2 className="text-gray">Identity</h2>

          <p className="text-lightGray text-[0.9rem]">
            Strategic identities crafted to <br />
            make brands memorable, meaningful <br />
            and unmistakably yours.
          </p>
        </div>

        <div className="w-full px-[3%] border-t-[0.1em] border-l-[0.1em] border-lightGray flex gap-4 flex-col items-start">

          <div className="w-full flex justify-between items-center">
            <div className="text-lightGray">04</div>
            <div className="text-acent">icon</div>
          </div>

          <h2 className="text-gray">Strategy</h2>

          <p className="text-lightGray text-[0.9rem]">
            Clear direction that turns <br />
            ambitious ideas into focused, <br />
            meaningful brands.
          </p>

        </div>

      </div>
      </div>

      {/* projects */}
      <div className="w-full flex flex-col">
        
        <div className="w-full flex justify-between items-center text-lightGray">
          
          <span>Selected work</span>
          
          <div className="flex gap-2">
            <span>View all projects</span>
            <Image
              src="/arrow_outward.svg"
              alt="arrow icon"
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-5 h-64 p-[4%]">
          <div className="bg-acent w-full h-full col-span-1 row-span-2"></div>
          <div className="bg-acent w-full h-full col-span-1"></div>
          <div className="bg-acent w-full h-full col-span-1"></div>
        </div>
      </div>

    </div>
  );
}

export default SectionOne;
