import Image from "next/image";
import { FaUniversity } from "react-icons/fa";

import { GoDotFill } from "react-icons/go";
const Resume = () => {
  const experience = [
    {
      id: 1,
      title: "Post Graduation Diploma (PGDIT)",
      company: "Noakhali Science and Technology",
      logo: <FaUniversity />,

      date: "February 2024 - Present",
      width: 35, // Use a number instead of a string
    },

    {
      id: 2,
      title: "Think In a Redux Way",
      company: "Learn With Sumit",
      logo: <FaUniversity />,
      date: "August 2022 - Feb 2023",
      width: 50,
    },
    {
      id: 3,
      title: "Complete Web Development Course",
      company: "Programming Hero",
      logo: <FaUniversity />,
      date: "June 2021 - June 2022",
      width: 55, // Use a number instead of a string
    },
  ];
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJs",
    "NextJs",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
    "MySQL",
    "Tailwind",
    "Bootstrap",
    "Mongoose",
    "Typescript",
    "Redux",
    "Firebase",
  ];
  const tools = [
    {
      id: 1,
      name: "VsCode",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    },
    {
      id: 2,
      name: "Github",
      logo: "https://cdn.prod.website-files.com/5f10ed4b2ae6bc09c03f5d7a/64959d5f65a257fb51a4259c_github.png",
    },
    {
      id: 3,
      name: "Figma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png",
    },
    {
      id: 4,
      name: "Postman",
      logo: "https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png",
    },
    {
      id: 5,
      name: "MongoDb Compass",
      logo: "https://static.macupdate.com/products/62461/m/mongodb-compass-logo.png?v=1663508519",
    },
    {
      id: 6,
      name: "PgAdmin 4",
      logo: "https://dl2.macupdate.com/images/icons256/60968.png?time=1663919426",
    },
    {
      id: 7,
      name: "Trello",
      logo: "https://assets.stickpng.com/images/58482beecef1014c0b5e4a36.png",
    },
    {
      id: 8,
      name: "Vercel",
      logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/152x152.png",
    },
    {
      id: 9,
      name: "Swagger",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="max-w-[1380px] mx-auto w-full"
    >
      <div className="lg:md:px-0  lg:md:py-30 py-20">
        <div className="blob2" style={{ filter: "blur(100px)" }}></div>
        <div
          className="rounded-xl px-6 py-12"
          style={{ background: "rgba(217, 217, 217, 0.1)" }}
        >
          {/* header */}
          <div className="flex items-center justify-between">
            <h2 className="font-Raleway font-semibold text-2xl ">Resume</h2>
            <div className="flex">
              <GoDotFill color="blue" size={25} />
              <GoDotFill color="green" size={25} />
              <GoDotFill color="red" size={25} />
            </div>
          </div>

          {/* content part 1 */}
          <div className="grid lg:md:grid-cols-2 lg:md:gap-x-28 py-8">
            <div>
              <div className="flex items-center justify-between pb-6">
                <h2 className="flex flex-col ">
                  <span className="lg:md:text-xl text-lg font-medium ">
                    Sabbir Hossain
                  </span>
                  <span className="lg:md:text-md text-[12px] ">
                    MERN Stack Developer
                  </span>
                </h2>
                <h2 className=" flex items-center gap-x-2">
                  <span className="text-[#EF4765] lg:md:text-6xl text-5xl font-bold">
                    1
                  </span>
                  <span className="flex flex-col text-[#C4C4C4] lg:md:text-md text-[12px]">
                    Years
                    <span className="text-[#fff]">Experience </span>
                  </span>
                </h2>
              </div>
              <hr className="w-42  border-t-2 border-gray-700" />
              <p className="pt-6 lg:md:text-[16px] text-[12px]">
                As a dynamic MERN Stack Developer, I am passionate about
                leveraging technology to create meaningful solutions. I thrive
                on learning new skills quickly and keeping pace with the latest
                industry trends. My goal is to make a positive impact through my
                work. I excel in communication, which enables me to collaborate
                seamlessly with diverse teams and bridge the gap between
                developers and stakeholders. My commitment is to deliver
                solutions that exceed user and client expectations, ultimately
                contributing to a transformative digital experience.
              </p>
            </div>
            <hr className="w-42  border-t-2 border-gray-700 mt-12 mb-6 lg:md:hidden block" />
            <div>
              {experience.map((exp) => (
                <div key={exp?.id}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="lg:md:text-lg text-md  font-medium  mb-2">
                        {exp?.title}
                      </h2>
                      <div className="flex items-center space-x-2 gap-2">
                        {exp.logo}
                        {exp.company}
                      </div>
                    </div>
                    <h2
                      className={`py-2 px-6 lg:md:text-[15px] text-[12px] font-medium rounded-lg ${
                        exp?.date.includes("Present")
                          ? "bg-[#EF4765] text-[#E0DEDE]"
                          : "bg-[#343957] text-[#E0DEDE]"
                      }`}
                    >
                      {exp?.date}
                    </h2>
                  </div>
                  <hr className="w-42  border-t-2 border-gray-700 mt-4 mb-6" />
                </div>
              ))}
            </div>
          </div>

          {/* content part 2 */}
          <div className="grid lg:md:grid-cols-2 lg:md:gap-x-28 py-8">
            <div>
              <h2 className="lg:md:text-xl text-lg font-medium   ">Skills</h2>
              <hr className="w-42  border-t-2 border-gray-700 mb-6 mt-4" />
              <div className="grid lg:md:grid-cols-5 grid-cols-3 lg:md:gap-4  gap-2 items-center justify-between pb-6">
                {skills.map((skill) => (
                  <div key={skill} className="rounded-lg border">
                    <h2 className="lg:md:text-md text-[12px]  font-medium  p-2 text-center">
                      {skill}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="lg:md:text-xl text-lg font-medium  ">
                Tools I use every day
              </h2>
              <hr className="w-42  border-t-2 border-gray-700 mb-6 mt-4" />
              <div className="grid lg:md:grid-cols-6 grid-cols-4 gap-4">
                {tools.map((tool) => (
                  <div key={tool?.id} className="rounded-lg">
                    <Image
                      src={tool?.logo}
                      alt={tool?.name}
                      width={50}
                      height={50}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* content part 3 */}
          <div>
            <hr className="w-42  border-t-2 border-gray-700 mb-6 mt-4" />

            <h2 className="lg:md:text-2xl text-xl font-Raleway  ">
              Loading...
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
