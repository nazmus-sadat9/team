import Link from "next/link";

const NotFound = () => {
  return (
    <div className="linearBg min-h-screen w-screen flex flex-col justify-center px-[6%] relative">
      {/* small label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-[60px] h-[2px] bg-acent"></div>
        <span className="uppercase text-lightGray text-[clamp(0.6rem,3vw,0.9rem)]">
          Error · 404
        </span>
      </div>

      {/* heading */}
      <h1 className="text-white leading-[1.1] text-[clamp(2.5rem,9vw,6rem)]">
        This page got <br />
        <span className="italic font-serif text-acent">lost</span> in space.
      </h1>

      <p className="text-lightGray w-full md:w-[40%] py-[4%] md:py-[2%] text-[clamp(0.9rem,3vw,1.1rem)]">
        The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s
        get you back on track.
      </p>

      {/* buttons */}
      <div className="flex gap-3 flex-wrap">
        <Link
          href="/"
          className="px-[4%] md:px-[1.5%] py-[2%] md:py-[0.6%] bg-acent text-background"
        >
          Back Home ↗
        </Link>
        <Link
          href="/contact"
          className="px-[4%] md:px-[1.5%] py-[2%] md:py-[0.6%] text-gray bg-background border-darkGray border-[0.1em]"
        >
          Contact Us ↗
        </Link>
      </div>

      {/* big faded 404 */}
      <span className="absolute right-[6%] bottom-[8%] text-darkGray font-serif italic leading-none select-none text-[clamp(6rem,25vw,18rem)] opacity-40">
        404
      </span>
    </div>
  );
};

export default NotFound;
