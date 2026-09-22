
const SectionOne = () => {
  return (
    <div className="w-full p-[4%] bg-background">

      <div className="w-full flex justify-between items-center ">

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

        <div>
          <span className="text-gray">get your site today</span>
        </div>
      </div>

      </div>

    </div>
  );
}

export default SectionOne;
