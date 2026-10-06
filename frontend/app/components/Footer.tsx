import json from "../../package.json";

const Footer = () => {
  return (
    <div className="w-full px-[6%] pt-[8%] pb-[16%] md:p-[4%] grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-y-0 bg-background border-t-[0.1em] border-lightGray">

      <div className="col-span-2 md:col-span-1 w-full">
        <span className="text-gray uppercase tracking-widest">
          {json.name}
        </span>
      </div>

      <div className="col-span-2 md:col-span-1">
        <p className="text-lightGray text-[clamp(0.85rem,3.5vw,1rem)]">
          Independent digital studio <br className="hidden md:block" />for the next era.
        </p>
      </div>

      <div className="col-span-2 md:col-span-1 text-lightGray text-[clamp(0.85rem,3.5vw,1rem)] grid grid-cols-2 gap-y-3 md:flex md:flex-col md:gap-0">
        <a href="">Instagram</a>
        <a href="">Linkdin</a>
        <a href="">Facebook</a>
        <a href="">E-Mail</a>
      </div>

      <div className="col-span-2 md:col-span-1 pt-6 md:pt-0 border-t-[0.1em] md:border-t-0 border-darkGray">
        <p className="text-gray text-[clamp(0.7rem,3vw,0.9rem)] md:text-[1rem]">
          &copy; 2026 {json.name}
        </p>
      </div>
    </div>
  );
}

export default Footer;
