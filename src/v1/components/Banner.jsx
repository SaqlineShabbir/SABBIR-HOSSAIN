"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { SiCss3, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import profile from "../../v1/assets/s.jpg";
import "./Banner.css";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["ou're here!"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2); // Speed up typing when deleting
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period); // Delay when full text is typed
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500); // Reset typing speed after deleting
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="bannerAndHeader ">
      {/* Banner */}
      <div className="min-h-[80vh] flex flex-col justify-center px-5 lg:px-[100px] pt-20 lg:pt-0">
        <div className="banner-container flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-[150px] w-full ">
          <div className="banner-text space-y-3 lg:w-[60%] text-center md:text-left">
            <h1 className="font-Raleway font-bold text-4xl md:text-5xl lg:text-7xl">
              I'm excited that
              <br /> y{text}
            </h1>

            <div>
              <div className="hr w-[80px] md:w-[100px] mx-auto"></div>
              <div>
                <p className="py-3 text-base lg:text-lg">
                  I understand that finding the perfect developer can be a
                  daunting task. But rest assured, your search is over! I'm
                  confident that you have found the ideal candidate for you.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mx-auto py-5 lg:pt-10 lg:w-[40%]">
            <Image
              className="animation w-[290px] h-[290px] lg:w-[310px] lg:h-[310px] animate-border-shape"
              src={profile}
              alt="Profile Picture"
            />
          </div>
        </div>

        {/* Styled Tech Stack Icons */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-start justify-center lg:space-x-5 space-x-1 space-y-5 lg:space-y-0 py-10 lg:py-0">
          <p className="text-lg lg:text-xl">Tech Stack</p>
          <p>|</p>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
            <div className="bg-gray-50 rounded p-3 flex items-center justify-center">
              <FaHtml5 className="icon" style={{ color: "red" }} size="28px" />
            </div>
            <div className="bg-gray-50 rounded p-3 flex items-center justify-center">
              <SiCss3 className="icon" style={{ color: "blue" }} size="28px" />
            </div>
            <div className="bg-gray-50 rounded p-3 flex items-center justify-center">
              <SiJavascript
                className="icon"
                style={{ color: "yellow" }}
                size="28px"
              />
            </div>
            <div className="bg-gray-50 rounded p-3 flex items-center justify-center">
              <FaReact
                className="icon"
                style={{ color: "skyblue" }}
                size="30px"
              />
            </div>
            <div className="bg-gray-50 rounded p-3 flex items-center justify-center">
              <TbBrandNextjs
                className="icon"
                style={{ color: "black" }}
                size="30px"
              />
            </div>
            <div className="bg-gray-50 rounded p-3 flex items-center justify-center">
              <FaNode className="icon" style={{ color: "green" }} size="28px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
