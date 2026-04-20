"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import img2 from "../../../src/v1/assets/portfolioimg1.PNG";
import img from "../../../src/v1/assets/onequiz.PNG";
import careershub from "../../v1/assets/Capture.PNG";
import img1 from "../../v1/assets/digital  village.PNG";
import img3 from "../../v1/assets/doctors  portal.PNG";
import hotelhunt from "../../v1/assets/hotelhunt.PNG";
import img4 from "../../v1/assets/restaurent.PNG";

const projectData = [
  {
    title: "Careers Hub",
    description:
      "A job portal platform with roles for users, employers, and admins. Features advanced job filtering, application tracking, and real-time notifications.",
    technologies: ["Next.js", "Tailwind", "MongoDB", "Node.js"],
    imgSrc: careershub,
    github: "https://github.com/SaqlineShabbir/Job-portal",
    demo: "https://job-portal-kohl-six.vercel.app/",
    accent: "from-violet-600 to-blue-600",
  },
  {
    title: "Hotel Hunt",
    description:
      "Seamless hotel booking platform for guests and admins. Browse, book, and manage reservations with a dedicated admin dashboard.",
    technologies: ["Next.js", "Tailwind", "MongoDB", "NextAuth"],
    imgSrc: hotelhunt,
    github: "https://github.com/SaqlineShabbir/HotelHunt-Full-Stack",
    demo: "https://hotel-hunt.vercel.app/",
    accent: "from-pink-600 to-purple-600",
  },
  {
    title: "OneQuiz",
    description:
      "Quiz platform with user and admin roles. Attendees view results percentage-wise; admins publish quizzes and issue certificates.",
    technologies: ["Next.js", "Tailwind", "MongoDB"],
    imgSrc: img,
    github: "https://github.com/SaqlineShabbir/OnQuiz",
    demo: "https://on-quiz.vercel.app/",
    accent: "from-cyan-600 to-blue-600",
  },
  {
    title: "Restaurant X",
    description:
      "Food ordering platform with user and admin roles. Browse menus, place orders, and leave reviews. Integrated third-party payment gateways.",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    imgSrc: img4,
    frontendGithub: "https://github.com/SaqlineShabbir/restaurant-frontend",
    backendGithub: "https://github.com/SaqlineShabbir/restaurant-backend",
    demo: "https://restaurant-sage-theta.vercel.app/",
    accent: "from-orange-600 to-red-600",
  },
  {
    title: "Digital Village",
    description:
      "Team project (7 devs) with user & admin roles. Users access various government-style services; admins manage and publish them.",
    technologies: ["React", "Tailwind", "Node.js"],
    imgSrc: img1,
    github: "https://github.com/akhlakuzzalal/digital_village_front-end",
    demo: "https://digital-village.onrender.com/",
    accent: "from-green-600 to-teal-600",
  },
  {
    title: "Dream Rainbow",
    description:
      "Single-service website with online booking and integrated payment. Admins manage services and bookings through a dashboard.",
    technologies: ["React", "Tailwind", "Firebase"],
    imgSrc: img2,
    github: "https://github.com/SaqlineShabbir/Dream-Rainbow-Ui",
    demo: "https://wall-paint-886e7.web.app/",
    accent: "from-fuchsia-600 to-violet-600",
  },
  {
    title: "Doctors Portal",
    description:
      "Dentist organisation website. Users book appointments by service; admins manage services, appointments, and patient records.",
    technologies: ["React", "Material-UI", "Firebase"],
    imgSrc: img3,
    github: "https://github.com/SaqlineShabbir/doctors-portal-client-side",
    demo: "https://loquacious-fairy-bcf088.netlify.app/",
    accent: "from-sky-600 to-cyan-600",
  },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const ProjectCard = ({ project, index }) => {
  const [cardRef, visible] = useReveal();

  return (
    <div
      ref={cardRef}
      className={`project-card group transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
    >
      {/* Image */}
      <div className="project-img-wrapper h-[190px]">
        <Image
          className="w-full h-full object-cover"
          src={project.imgSrc}
          alt={project.title}
        />
        {/* Hover colour overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-75 transition-opacity duration-400`}
        />
        {/* Hover links centred on image */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/35 transition-colors"
            >
              <BsGithub size={18} />
            </Link>
          )}
          <Link
            href={project.demo}
            target="_blank"
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/35 transition-colors"
          >
            <GoLinkExternal size={17} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-bold text-base">{project.title}</h3>
          <div className="flex gap-1.5">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="text-white/30 hover:text-white/70 transition-colors p-1"
              >
                <BsGithub size={15} />
              </Link>
            )}
            {project.frontendGithub && (
              <>
                <Link href={project.frontendGithub} target="_blank" className="text-white/30 hover:text-white/70 transition-colors p-1 text-[11px] font-semibold">FE</Link>
                <Link href={project.backendGithub}  target="_blank" className="text-white/30 hover:text-white/70 transition-colors p-1 text-[11px] font-semibold">BE</Link>
              </>
            )}
            <Link
              href={project.demo}
              target="_blank"
              className="text-white/30 hover:text-purple-400 transition-colors p-1"
            >
              <GoLinkExternal size={15} />
            </Link>
          </div>
        </div>

        <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section id="projects" className="relative py-24 px-5 lg:px-20 overflow-hidden">
      <div className="blob-blue" style={{ top: "0%", left: "-8%" }} />

      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="font-bold text-3xl lg:text-5xl text-white mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="text-white/35 text-base mt-5 max-w-lg mx-auto">
            Each project is a story of a problem solved — crafted with care for performance and user experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
