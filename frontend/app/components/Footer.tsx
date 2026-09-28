import json from "../../package.json";

const Footer = () => {
  return (
    <div className="w-full p-[4%] grid grid-cols-4 bg-background">

      <div className="w-full">
        <span className="text-gray uppercase">
          {json.name}
        </span>
      </div>

      <div>
        <p className="text-lightGray">
          Independent digital studio <br />for the next era.
        </p>
      </div>

      <div className="text-lightGray flex flex-col">
        <a href="">Instagram</a>
        <a href="">Linkdin</a>
        <a href="">Facebook</a>
        <a href="">E-Mail</a>
      </div>

      <div>
        <p className="text-gray">
          &copy; 2026 {json.name}
        </p>
      </div>
    </div>
  );
}

export default Footer;
