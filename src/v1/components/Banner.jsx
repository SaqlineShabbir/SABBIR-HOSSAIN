import Image from "next/image";
import { FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { SiCss3, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import profile from "../../v1/assets/me.jpg";

const Banner = () => {
  return (
    <div className="bannerAndHeader mt-10">
      {/* Banner */}
      <div className="min-h-[90vh] flex flex-col justify-center px-5 lg:px-[250px] pt-20 lg:pt-0">
        <div className="banner-container flex flex-col lg:flex-row justify-between items-center lg:px-0 md:px-[100px] space-y-8 lg:space-y-0 lg:space-x-[150px] w-full">
          <div className="banner-text space-y-3 lg:w-[60%]">
            <h1 className="font-Raleway font-bold text-4xl lg:text-7xl">
              I'm excited that
              <br /> you're here
            </h1>

            <div>
              <div className="hr w-[100px]"></div>
              <div>
                <p className="py-3 text-base lg:text-lg">
                  I understand that finding the perfect developer can be a
                  daunting task. But rest assured, your search is over! I'm
                  confident that you have found the ideal candidate for you.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mx-auto py-5 lg:py-0 lg:w-[40%]">
            <Image
              className="w-[270px] h-[270px] lg:max-w-[290px] lg:max-h-[300px] rounded"
              src={profile}
              alt="Profile Picture"
            />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col lg:flex-row items-center  lg:justify-start justify-center lg:space-x-5 space-x-1 space-y-5 lg:space-y-0 py-10 lg:py-0">
          <p className="text-lg lg:text-xl">Tech Stack</p>
          <p>|</p>
          <div className="flex space-x-3 lg:space-x-6">
            <FaHtml5 className="icon" style={{ color: "red" }} size="28px" />
            <SiCss3 className="icon" style={{ color: "blue" }} size="25px" />
            <SiJavascript
              className="icon"
              style={{ color: "yellow" }}
              size="25px"
            />
            <FaReact
              className="icon"
              style={{ color: "skyblue" }}
              size="30px"
            />
            <TbBrandNextjs
              className="icon"
              style={{ color: "black" }}
              size="30px"
            />
            <FaNode className="icon" style={{ color: "green" }} size="40px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
