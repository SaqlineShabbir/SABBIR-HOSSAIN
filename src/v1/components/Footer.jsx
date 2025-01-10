import { BsLightning } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <hr />

      <div className="lg:flex justify-between py-5 lg:px-20  px-3">
        <span className="flex items-center">
          <BsLightning />
          Developed by Sabbir..
        </span>
        <span className="flex items-center gap-1">
          <FaRegClock /> Updated: 10 Jan 2025
        </span>
      </div>
    </div>
  );
};

export default Footer;
