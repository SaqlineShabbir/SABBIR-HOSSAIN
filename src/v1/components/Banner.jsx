import { FaHtml5, FaNode, FaReact } from "react-icons/fa";
import profile from "../../v1/assets/me.jpg";

import Image from "next/image";
import { SiCss3, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
const Banner = () => {
  return (
    <div className="bannerAndHeader mt-10 ">
      {/* //banner */}
      <div className="min-h-[90vh] flex flex-col justify-center lg:px-[250px]  px-5 lg:pt-0 pt-20">
        <div className="banner-container lg:flex justify-between items-center  lg:px-0  md:px-[100px] lg:space-x-[150px]   w-[100%]">
          <div className="banner-text   space-y-3 lg:w-[60%]">
            <h1 className=" font-Raleway font-bold lg:text-7xl text-5xl">
              I'm excited that
              <br /> you're here
            </h1>

            <div>
              <div className="hr w-[100px]   "></div>
              <div>
                <p className="py-3 text-lg">
                  I understand that finding the perfect developer can be a
                  daunting task. But rest assured, your search is over! Im
                  confident that you have found the ideal candidate for you.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[40%] flex justify-center items-center  mx-auto py-10 lg:py-0">
            <Image
              className="max-w-[290px] max-h-[300px] rounded "
              src={profile}
              alt=""
            />
          </div>
        </div>

        {/* // all skills button */}

        <div className="flex lg:space-x-5 space-x-1 py-10 lg:py-0  ">
          <p>Tech Stack</p> <p>|</p>
          <div className="flex lg:space-x-10 space-x-3">
            <FaHtml5
              className="icon"
              style={{
                color: "red",
              }}
              size="30px"
              color="white"
            />
            <SiCss3
              className="icon"
              style={{
                color: "blue",
              }}
              size="30px"
              color="white"
            />
            <SiJavascript
              className="icon"
              style={{
                color: "yellow",
              }}
              size="30px"
              color="white"
            />
            <FaReact
              className="icon"
              style={{
                color: "skyblue",
              }}
              size="35px"
              color="white"
            />
            <TbBrandNextjs
              className="icon"
              style={{
                color: "black",
              }}
              size="35px"
              color="white"
            />
            <FaNode
              style={{
                color: "green",
              }}
              size="50px"
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
