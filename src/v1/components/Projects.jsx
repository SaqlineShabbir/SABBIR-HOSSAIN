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
  { title: "Careers Hub",    description: "A job portal with roles for users, employers, and admins. Advanced job filtering, application tracking, and real-time notifications.", technologies: ["Next.js", "Tailwind", "MongoDB", "Node.js"], imgSrc: careershub, github: "https://github.com/SaqlineShabbir/Job-portal",             demo: "https://job-portal-kohl-six.vercel.app/", accent: "from-violet-600 to-blue-600" },
  { title: "Hotel Hunt",     description: "Seamless hotel booking platform for guests and admins. Browse, book, and manage reservations with a dedicated admin dashboard.",        technologies: ["Next.js", "Tailwind", "MongoDB", "Node.js"], imgSrc: hotelhunt, github: "https://github.com/SaqlineShabbir/HotelHunt-Full-Stack",   demo: "https://hotel-hunt.vercel.app/",          accent: "from-pink-600 to-purple-600" },
  { title: "OneQuiz",        description: "Quiz platform with user and admin roles. Attendees view results percentage-wise; admins publish quizzes and issue certificates.",       technologies: ["Next.js", "Tailwind", "MongoDB"],            imgSrc: img,       github: "https://github.com/SaqlineShabbir/OnQuiz",             demo: "https://on-quiz.vercel.app/",             accent: "from-cyan-600 to-blue-600" },
  { title: "Restaurant X",   description: "Food ordering platform with user and admin roles. Browse menus, place orders, and leave reviews with integrated payment gateway.",      technologies: ["React", "Tailwind", "Node.js", "MongoDB"],   imgSrc: img4,      frontendGithub: "https://github.com/SaqlineShabbir/restaurant-frontend", backendGithub: "https://github.com/SaqlineShabbir/restaurant-backend", demo: "https://restaurant-sage-theta.vercel.app/", accent: "from-orange-600 to-red-600" },
  { title: "Digital Village", description: "Team project (7 devs) with user & admin roles. Users access government-style services; admins manage and publish them.",             technologies: ["React", "Tailwind", "Node.js"],              imgSrc: img1,      github: "https://github.com/akhlakuzzalal/digital_village_front-end", demo: "https://digital-village.onrender.com/",   accent: "from-green-600 to-teal-600" },
  { title: "Dream Rainbow",  description: "Single-service website with online booking and integrated payment. Admins manage services and bookings through a dashboard.",           technologies: ["React", "Tailwind", "Firebase"],             imgSrc: img2,      github: "https://github.com/SaqlineShabbir/Dream-Rainbow-Ui",   demo: "https://wall-paint-886e7.web.app/",       accent: "from-fuchsia-600 to-violet-600" },
  { title: "Doctors Portal", description: "Dentist website. Users book appointments by service; admins manage services, appointments, and patient records.",                       technologies: ["React", "Firebase"],                         imgSrc: img3,      github: "https://github.com/SaqlineShabbir/doctors-portal-client-side", demo: "https://loquacious-fairy-bcf088.netlify.app/", accent: "from-sky-600 to-cyan-600" },
];

const filters = ["All", "Next.js", "React", "Node.js", "Firebase"];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── Decorative SVG branch/leaf layer ── */
const NatureDecor = () => (
  <svg
    className="pointer-events-none absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ zIndex: 0 }}
  >
    <defs>
      <linearGradient id="branchGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.06" />
      </linearGradient>
      <linearGradient id="branchGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.05" />
      </linearGradient>
    </defs>

    {/* ── Top-left large branch ── */}
    <g stroke="url(#branchGrad1)" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Main trunk curve */}
      <path d="M -10 60 C 60 80, 120 40, 180 90 C 240 140, 200 200, 260 230" strokeWidth="1.8" />
      {/* Branch off main */}
      <path d="M 120 40 C 140 10, 180 5, 200 30" strokeWidth="1.2" />
      <path d="M 180 90 C 195 65, 225 60, 240 80" strokeWidth="1.1" />
      {/* Small twigs */}
      <path d="M 200 30 C 210 18, 228 15, 235 25" strokeWidth="0.8" />
      <path d="M 240 80 C 252 68, 268 65, 272 76" strokeWidth="0.7" />
      {/* Leaves on top-left branch */}
      <ellipse cx="205" cy="27" rx="9" ry="5" transform="rotate(-30 205 27)" strokeWidth="0.9" />
      <ellipse cx="238" cy="22" rx="7" ry="4" transform="rotate(-50 238 22)" strokeWidth="0.9" />
      <ellipse cx="275" cy="73" rx="8" ry="4.5" transform="rotate(20 275 73)" strokeWidth="0.9" />
      <ellipse cx="263" cy="228" rx="10" ry="5.5" transform="rotate(-15 263 228)" strokeWidth="0.9" />
    </g>

    {/* ── Bottom-right large branch ── */}
    <g stroke="url(#branchGrad2)" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 110% 90% C 85% 75%, 78% 60%, 88% 45%" strokeWidth="1.8"
        style={{ transform: "none" }}
      />
    </g>

    {/* Using % via a nested group with viewBox trick — use fixed coords scaled to right side */}
    <g stroke="url(#branchGrad2)" fill="none" strokeLinecap="round" strokeLinejoin="round"
      transform="translate(9999,0)" style={{ display: "none" }}
    />

    {/* Right side branch — absolute coords anchored right via transform */}
    <g stroke="url(#branchGrad2)" fill="none" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: "translateX(calc(100% - 320px))" }}
    >
      <path d="M 320 800 C 260 740, 240 670, 300 610 C 350 560, 330 490, 290 450" strokeWidth="1.8" />
      <path d="M 300 610 C 330 590, 360 595, 370 615" strokeWidth="1.2" />
      <path d="M 290 450 C 310 430, 340 428, 348 445" strokeWidth="1.1" />
      <ellipse cx="372" cy="612" rx="9" ry="5" transform="rotate(25 372 612)" strokeWidth="0.9" />
      <ellipse cx="350" cy="443" rx="8" ry="4.5" transform="rotate(-20 350 443)" strokeWidth="0.9" />
      <ellipse cx="288" cy="448" rx="7" ry="4" transform="rotate(40 288 448)" strokeWidth="0.9" />
    </g>

    {/* Scattered floating leaves */}
    <g fill="rgba(124,58,237,0.08)" stroke="rgba(124,58,237,0.15)" strokeWidth="0.7">
      <ellipse cx="55%" cy="12%" rx="14" ry="7" transform="rotate(-35, 0, 0)" style={{ transformOrigin: "55% 12%" }} />
      <ellipse cx="72%" cy="28%" rx="10" ry="5.5" transform="rotate(20, 0, 0)" style={{ transformOrigin: "72% 28%" }} />
      <ellipse cx="35%" cy="82%" rx="12" ry="6" transform="rotate(-55, 0, 0)" style={{ transformOrigin: "35% 82%" }} />
      <ellipse cx="88%" cy="65%" rx="11" ry="5" transform="rotate(15, 0, 0)" style={{ transformOrigin: "88% 65%" }} />
    </g>
    <g fill="rgba(59,130,246,0.07)" stroke="rgba(59,130,246,0.13)" strokeWidth="0.7">
      <ellipse cx="18%" cy="45%" rx="13" ry="6.5" transform="rotate(40, 0, 0)" style={{ transformOrigin: "18% 45%" }} />
      <ellipse cx="62%" cy="70%" rx="9" ry="4.5" transform="rotate(-25, 0, 0)" style={{ transformOrigin: "62% 70%" }} />
    </g>
    <g fill="rgba(236,72,153,0.06)" stroke="rgba(236,72,153,0.12)" strokeWidth="0.7">
      <ellipse cx="45%" cy="20%" rx="11" ry="5.5" transform="rotate(60, 0, 0)" style={{ transformOrigin: "45% 20%" }} />
      <ellipse cx="80%" cy="88%" rx="10" ry="5" transform="rotate(-40, 0, 0)" style={{ transformOrigin: "80% 88%" }} />
    </g>
  </svg>
);

/* ── Leaf vine divider under section title ── */
const LeafDivider = () => (
  <svg
    width="220" height="28" viewBox="0 0 220 28"
    className="mx-auto mt-4"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="vineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
        <stop offset="30%" stopColor="#7c3aed" stopOpacity="0.7" />
        <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
        <stop offset="70%" stopColor="#7c3aed" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Central vine line */}
    <path d="M 10 14 C 50 8, 80 20, 110 14 C 140 8, 170 20, 210 14"
      stroke="url(#vineGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Left leaf cluster */}
    <ellipse cx="42" cy="9" rx="8" ry="4" transform="rotate(-30 42 9)"
      fill="rgba(124,58,237,0.25)" stroke="rgba(124,58,237,0.5)" strokeWidth="0.8" />
    <ellipse cx="55" cy="19" rx="7" ry="3.5" transform="rotate(20 55 19)"
      fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.45)" strokeWidth="0.8" />
    {/* Center leaf */}
    <ellipse cx="110" cy="7" rx="9" ry="4.5" transform="rotate(-10 110 7)"
      fill="rgba(124,58,237,0.3)" stroke="rgba(124,58,237,0.6)" strokeWidth="0.9" />
    <line x1="110" y1="11" x2="110" y2="17" stroke="rgba(124,58,237,0.4)" strokeWidth="0.8" />
    {/* Right leaf cluster */}
    <ellipse cx="168" cy="9" rx="8" ry="4" transform="rotate(30 168 9)"
      fill="rgba(124,58,237,0.25)" stroke="rgba(124,58,237,0.5)" strokeWidth="0.8" />
    <ellipse cx="155" cy="19" rx="7" ry="3.5" transform="rotate(-20 155 19)"
      fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.45)" strokeWidth="0.8" />
    {/* Small dots along vine */}
    <circle cx="80" cy="14" r="2" fill="rgba(124,58,237,0.5)" />
    <circle cx="110" cy="14" r="2.5" fill="rgba(59,130,246,0.6)" />
    <circle cx="140" cy="14" r="2" fill="rgba(124,58,237,0.5)" />
  </svg>
);

/* ── Leaf accent on project card corner ── */
const CardLeafAccent = ({ accent }) => {
  const color = accent.includes("violet") || accent.includes("purple") ? "124,58,237"
    : accent.includes("pink") || accent.includes("fuchsia") ? "236,72,153"
    : accent.includes("cyan") || accent.includes("sky") ? "6,182,212"
    : accent.includes("green") || accent.includes("teal") ? "20,184,166"
    : accent.includes("orange") || accent.includes("red") ? "249,115,22"
    : "59,130,246";
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className="absolute bottom-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity duration-300" aria-hidden="true">
      <ellipse cx="34" cy="14" rx="13" ry="7" transform="rotate(-40 34 14)"
        fill={`rgba(${color},0.4)`} stroke={`rgba(${color},0.7)`} strokeWidth="1" />
      <ellipse cx="22" cy="30" rx="11" ry="5.5" transform="rotate(30 22 30)"
        fill={`rgba(${color},0.3)`} stroke={`rgba(${color},0.6)`} strokeWidth="1" />
      <path d="M 32 18 C 28 24, 24 28, 20 34" stroke={`rgba(${color},0.5)`} strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
};

const ProjectCard = ({ project, index }) => {
  const [ref, visible] = useReveal();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className={`project-card group relative transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="project-img-wrapper h-[190px]">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-white/5 animate-pulse z-10 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" />
          </div>
        )}
        <Image
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          src={project.imgSrc}
          alt={project.title}
          onLoad={() => setImgLoaded(true)}
        />
        {/* Live badge */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-green-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-[10px] font-semibold uppercase tracking-wide">Live</span>
        </div>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-75 transition-opacity duration-400`} />
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          {project.github && (
            <Link href={project.github} target="_blank" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/35 transition-colors">
              <BsGithub size={18} />
            </Link>
          )}
          <Link href={project.demo} target="_blank" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/35 transition-colors">
            <GoLinkExternal size={17} />
          </Link>
        </div>
      </div>

      <div className="p-5 relative">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-bold text-base">{project.title}</h3>
          <div className="flex gap-1.5">
            {project.github && <Link href={project.github} target="_blank" className="text-white/30 hover:text-white/70 p-1"><BsGithub size={15} /></Link>}
            {project.frontendGithub && <>
              <Link href={project.frontendGithub} target="_blank" className="text-white/30 hover:text-white/70 p-1 text-[11px] font-semibold">FE</Link>
              <Link href={project.backendGithub}  target="_blank" className="text-white/30 hover:text-white/70 p-1 text-[11px] font-semibold">BE</Link>
            </>}
            <Link href={project.demo} target="_blank" className="text-white/30 hover:text-purple-400 p-1"><GoLinkExternal size={15} /></Link>
          </div>
        </div>
        <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}
        </div>
        {/* Leaf accent corner */}
        <CardLeafAccent accent={project.accent} />
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [headerRef, headerVisible] = useReveal();

  const filtered = activeFilter === "All"
    ? projectData
    : projectData.filter((p) => p.technologies.includes(activeFilter));

  return (
    <section id="projects" className="relative py-24 px-5 lg:px-20 overflow-hidden">
      {/* Ambient blobs */}
      <div className="blob-blue" style={{ top: "0%", left: "-8%" }} />
      <div className="blob-purple" style={{ bottom: "10%", right: "-5%" }} />

      {/* Nature decorative layer */}
      <NatureDecor />

      <div className="max-w-screen-xl mx-auto relative" style={{ zIndex: 1 }}>
        <div
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="font-bold text-3xl lg:text-5xl text-white mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          {/* Leaf vine divider replaces plain section-divider */}
          <LeafDivider />
          <p className="text-white/35 text-base mt-4 max-w-lg mx-auto">
            Each project is a story of a problem solved — crafted with care for performance and user experience.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/30"
                  : "glass-card text-white/50 hover:text-white hover:border-purple-500/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
