import Image from "next/image";

const SectionThree = () => {

  return (
    <div className="w-full bg-background px-[4%] py-[8%] border-b-[0.1em] border-lightGray">

      <div>
        <div className="text-lightGray text-[clamp(0.5rem,4vw,0.8rem)] w-full">
          <span>made your mind yet?</span>
        </div>

        <div>
          <h2 className="text-gray text-[clamp(2rem,4vw,4rem)]">
            Let&apos;s make <br />
            <span className="text-acent">something matter.</span>
          </h2>
        </div>

        <div className="w-full py-[4%]">
          <button className="flex gap-4 bg-acent text-background px-[2%] py-[1%]">
            <span>hyperion@gmail.com</span>

            <Image
              src="arrow_outward.svg"
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

export default SectionThree;
