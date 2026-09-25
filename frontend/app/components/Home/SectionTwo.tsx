import Image from "next/image";

const SectionTwo = () => {
  return (
    <div className="w-full flex flex-col bg-background p-[4%] border-b-[0.1em] border-lightGray">
      
      {/* part one */}
      <div>

        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-gray text-[clamp(2rem,4vw,5rem)]">
              Small Team.<br />
              <span className="text-acent">Big signal.</span>
            </h2>
          </div>

          <div>
            <p className="text-gray py-[5%]">
              Our incridible of passioniate developers and designers will <br />
              help you bring your idea to life.
            </p>

            <span className="text-lightGray flex gap-2 uppercase text-[clamp(0.5rem,4vw,0.8rem)]">
              meet with our team 

              <Image
                src="arrow_outward.svg"
                alt="arrow icon"
                width={20}
                height={20}
                className="w-auto"
              />
            </span>
          </div>
        </div>

      </div>

      {/* part two */}
      <div>

        <div className="text-gray uppercase text-[clamp(0.5rem,4vw,0.8rem)] py-[5%] flex justify-between">
          <span>client reviews</span>

          <div className="flex gap-4">
            <span>read all reviews</span>
            <span>review our service</span>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-4 h-30">
          <div className="bg-gray w-full h-full"></div>
          <div className="bg-gray w-full h-full"></div>
          <div className="bg-gray w-full h-full"></div>
          <div className="bg-gray w-full h-full"></div>
        </div>

      </div>
    </div>
  );
}

export default SectionTwo;
