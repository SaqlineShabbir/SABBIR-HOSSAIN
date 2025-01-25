import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";

import Image from "next/image";
import Link from "next/link";
import img2 from "../../../src/v1/assets/portfolioimg1.PNG";
import img from "../../../src/v1/assets/q.PNG";
import careershub from "../../v1/assets/Capture.PNG";
import img1 from "../../v1/assets/digital  village.PNG";
import img3 from "../../v1/assets/doctors  portal.PNG";
import hotelhunt from "../../v1/assets/hotelhunt.PNG";
import img4 from "../../v1/assets/restaurent.PNG";

const projectData = [
  {
    title: "Careers Hub",
    description:
      "Built a job portal platform with roles for users, employers, and admins.",
    technologies: ["Next.js", "Tailwind"],
    imgSrc: careershub,
    github: "https://github.com/SaqlineShabbir/Job-portal",
    demo: "https://job-portal-kohl-six.vercel.app/",
  },
  {
    title: "Hotel Hunt",
    description:
      "This website offers a seamless experience for both guests and administrators. Users can browse, book, and manage their hotel reservations with ease, while admins have dedicated tools to oversee hotel listings, manage bookings, and ensure a smooth service.",
    technologies: ["Next.js", "Tailwind"],
    imgSrc: hotelhunt,
    github: "https://github.com/SaqlineShabbir/HotelHunt-Full-Stack",
    demo: "https://hotel-hunt.vercel.app/",
  },
  {
    title: "OneQuiz",
    description:
      "It's A website which have two roles, one is user and the other is admin. A user can attend various types of quizzes and see their results percentage-wise. Admins can publish various types of quizzes and certificates.",
    technologies: ["Next.js", "Tailwind"],
    imgSrc: img,
    github: "https://github.com/SaqlineShabbir/OnQuiz",
    demo: "https://on-quiz.vercel.app/",
  },
  {
    title: "Restaurant X",
    description:
      "Developed a responsive food ordering platform with user and admin roles. Users can browse menus, place orders, and leave reviews, while admins manage menus and orders. Integrated third-party payment gateways.",
    technologies: ["React", "Tailwind"],
    imgSrc: img4,
    frontendGithub: "https://github.com/SaqlineShabbir/restaurant-frontend",
    backendGithub: "https://github.com/SaqlineShabbir/restaurant-backend",
    demo: "https://restaurant-sage-theta.vercel.app/",
  },
  {
    title: "Digital Village",
    description:
      "It's a team project where seven people worked on two roles, user and admin. Users can access various services depending on their needs. Admins can publish and edit services.",
    technologies: ["React", "Tailwind"],
    imgSrc: img1,
    github: "https://github.com/akhlakuzzalal/digital_village_front-end",
    demo: "https://digital-village.onrender.com/",
  },
  {
    title: "Dream Rainbow",
    description:
      "It's a single service-providing website. Users can book services and pay online, while admins can manage services and bookings.",
    technologies: ["React", "Tailwind"],
    imgSrc: img2,
    github: "https://github.com/SaqlineShabbir/Dream-Rainbow-Ui",
    demo: "https://wall-paint-886e7.web.app/",
  },
  {
    title: "Doctors Portal",
    description:
      "It's a website for a dentist organization. Users can select services and book appointments, while admins manage services and appointments.",
    technologies: ["React", "Material-UI"],
    imgSrc: img3,
    github: "https://github.com/SaqlineShabbir/doctors-portal-client-side",
    demo: "https://loquacious-fairy-bcf088.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="px-5 lg:px-[100px]">
      <div className=" my-[60px] ">
        <div className="py-20 lg:flex lg:justify-between ">
          <h1 className="font-Raleway font-bold lg:md:text-5xl text-2xl lg:w-[50%]">
            Check Out My Skills Through Projects!
          </h1>
          <p className="text-xl pt-2 font-Raleway lg:w-[50%]">
            Explore my diverse web projects, a showcase of innovation that
            reflects my commitment to quality and user experience. Each project
            demonstrates my ability to leverage the latest trends.
          </p>
        </div>
        <div className="pMain space-y-20">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`lg:flex lg:w-[100%] border py-5 px-5 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="lg:w-[50%] flex justify-center">
                <Image
                  className="lg:w-[500px] h-[250px] border rounded-xl"
                  src={project?.imgSrc}
                  alt={project?.title}
                />
              </div>
              <div className="lg:w-[50%] pt-6">
                <h1 className="font-bold">{project.title}</h1>
                <p>{project.description}</p>
                <div className="flex font-bold my-5 text-sm text-gray-800">
                  {project.technologies.map((tech, i) => (
                    <p key={i} className={i > 0 ? "px-2" : ""}>
                      {tech}
                    </p>
                  ))}
                </div>
                <div className="flex font-bold text-sm text-gray-800">
                  {project?.github && (
                    <Link href={`${project?.github}`}>
                      <p className="flex">
                        Code <BsGithub className="mt-1 ml-1" />
                      </p>
                    </Link>
                  )}
                  <Link href={`${project?.demo}`}>
                    <p className="px-2 flex">
                      Live Demo <GoLinkExternal className="mt-1 ml-1" />
                    </p>
                  </Link>
                  {project.frontendGithub && (
                    <>
                      <Link href={`${project.frontendGithub}`}>
                        <p className="px-2 flex">
                          Frontend <BsGithub className="mt-1 ml-1" />
                        </p>
                      </Link>
                      <Link href={`${project.backendGithub}`}>
                        <p className="px-2 flex">
                          Backend <BsGithub className="mt-1 ml-1" />
                        </p>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
