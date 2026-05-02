"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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
  { title: "Careers Hub",    description: "A job portal with roles for users, employers, and admins. Advanced job filtering, application tracking, and real-time notifications.", technologies: ["Next.js", "Tailwind", "MongoDB", "Node.js"], imgSrc: careershub, github: "https://github.com/SaqlineShabbir/Job-portal",                       demo: "https://job-portal-kohl-six.vercel.app/",          accent: "from-violet-600 to-blue-600" },
  { title: "Hotel Hunt",     description: "Seamless hotel booking platform for guests and admins. Browse, book, and manage reservations with a dedicated admin dashboard.",        technologies: ["Next.js", "Tailwind", "MongoDB", "Node.js"], imgSrc: hotelhunt, github: "https://github.com/SaqlineShabbir/HotelHunt-Full-Stack",           demo: "https://hotel-hunt.vercel.app/",                   accent: "from-pink-600 to-purple-600" },
  { title: "OneQuiz",        description: "Quiz platform with user and admin roles. Attendees view results percentage-wise; admins publish quizzes and issue certificates.",       technologies: ["Next.js", "Tailwind", "MongoDB"],            imgSrc: img,       github: "https://github.com/SaqlineShabbir/OnQuiz",                   demo: "https://on-quiz.vercel.app/",                      accent: "from-cyan-600 to-blue-600" },
  { title: "Restaurant X",   description: "Food ordering platform with user and admin roles. Browse menus, place orders, and leave reviews with integrated payment gateway.",      technologies: ["React", "Tailwind", "Node.js", "MongoDB"],   imgSrc: img4,      frontendGithub: "https://github.com/SaqlineShabbir/restaurant-frontend", backendGithub: "https://github.com/SaqlineShabbir/restaurant-backend", demo: "https://restaurant-sage-theta.vercel.app/", accent: "from-orange-600 to-red-600" },
  { title: "Digital Village", description: "Team project (7 devs) with user & admin roles. Users access government-style services; admins manage and publish them.",             technologies: ["React", "Tailwind", "Node.js"],              imgSrc: img1,      github: "https://github.com/akhlakuzzalal/digital_village_front-end", demo: "https://digital-village.onrender.com/",            accent: "from-green-600 to-teal-600" },
  { title: "Dream Rainbow",  description: "Single-service website with online booking and integrated payment. Admins manage services and bookings through a dashboard.",           technologies: ["React", "Tailwind", "Firebase"],             imgSrc: img2,      github: "https://github.com/SaqlineShabbir/Dream-Rainbow-Ui",         demo: "https://wall-paint-886e7.web.app/",                accent: "from-fuchsia-600 to-violet-600" },
  { title: "Doctors Portal", description: "Dentist website. Users book appointments by service; admins manage services, appointments, and patient records.",                       technologies: ["React", "Firebase"],                         imgSrc: img3,      github: "https://github.com/SaqlineShabbir/doctors-portal-client-side", demo: "https://loquacious-fairy-bcf088.netlify.app/",   accent: "from-sky-600 to-cyan-600" },
];

const filters = ["All", "Next.js", "React", "Node.js", "Firebase"];

const STICK_TOP = 88;   // px below viewport top (clears the navbar)
const SCROLL_GAP = 240; // px to scroll between consecutive card stacks

const LeafDivider = () => (
  <svg width="220" height="28" viewBox="0 0 220 28" className="mx-auto mt-4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="pvg" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0"/>
        <stop offset="30%"  stopColor="#7c3aed" stopOpacity="0.7"/>
        <stop offset="50%"  stopColor="#3b82f6" stopOpacity="1"/>
        <stop offset="70%"  stopColor="#7c3aed" stopOpacity="0.7"/>
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <path d="M 10 14 C 50 8, 80 20, 110 14 C 140 8, 170 20, 210 14" stroke="url(#pvg)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <ellipse cx="42"  cy="9"  rx="8" ry="4"   transform="rotate(-30 42 9)"    fill="rgba(124,58,237,0.25)" stroke="rgba(124,58,237,0.5)"  strokeWidth="0.8"/>
    <ellipse cx="55"  cy="19" rx="7" ry="3.5"  transform="rotate(20 55 19)"   fill="rgba(59,130,246,0.2)"  stroke="rgba(59,130,246,0.45)" strokeWidth="0.8"/>
    <ellipse cx="110" cy="7"  rx="9" ry="4.5"  transform="rotate(-10 110 7)"  fill="rgba(124,58,237,0.3)"  stroke="rgba(124,58,237,0.6)"  strokeWidth="0.9"/>
    <line x1="110" y1="11" x2="110" y2="17" stroke="rgba(124,58,237,0.4)" strokeWidth="0.8"/>
    <ellipse cx="168" cy="9"  rx="8" ry="4"   transform="rotate(30 168 9)"    fill="rgba(124,58,237,0.25)" stroke="rgba(124,58,237,0.5)"  strokeWidth="0.8"/>
    <ellipse cx="155" cy="19" rx="7" ry="3.5"  transform="rotate(-20 155 19)" fill="rgba(59,130,246,0.2)"  stroke="rgba(59,130,246,0.45)" strokeWidth="0.8"/>
    <circle cx="80"  cy="14" r="2"   fill="rgba(124,58,237,0.5)"/>
    <circle cx="110" cy="14" r="2.5" fill="rgba(59,130,246,0.6)"/>
    <circle cx="140" cy="14" r="2"   fill="rgba(124,58,237,0.5)"/>
  </svg>
);

const ProjectCard = ({ project, index, cardRef }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const isEven = index % 2 === 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} glass-card overflow-hidden`}
      style={{
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), filter 0.4s ease, background-color 0.4s ease",
        transformOrigin: "top center",
        willChange: "transform, filter",
      }}
    >
      {/* Image panel */}
      <div className="relative lg:w-[45%] h-[230px] lg:h-auto flex-shrink-0 overflow-hidden">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-white/5 animate-pulse z-10 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" />
          </div>
        )}
        <Image
          src={project.imgSrc}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className={`object-cover transition-all duration-700 ${imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"} group-hover:scale-110`}
          onLoad={() => setImgLoaded(true)}
        />
        
        {/* Hover overlay — dark vignette with subtle accent tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
        {/* Hover action buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
          {project.github && (
            <Link href={project.github} target="_blank"
              className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all">
              <BsGithub size={19} />
            </Link>
          )}
          {project.frontendGithub && (
            <>
              <Link href={project.frontendGithub} target="_blank"
                className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xs font-bold hover:bg-white/40 transition-all">FE</Link>
              <Link href={project.backendGithub} target="_blank"
                className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xs font-bold hover:bg-white/40 transition-all">BE</Link>
            </>
          )}
          <Link href={project.demo} target="_blank"
            className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all">
            <GoLinkExternal size={18} />
          </Link>
        </div>
      </div>

      {/* Content panel */}
      <div className="relative lg:w-[55%] p-7 lg:p-10 flex flex-col justify-center overflow-hidden">
        {/* Giant faded project number */}
        <span className="absolute -bottom-4 right-4 text-[9rem] font-black leading-none select-none pointer-events-none text-white/[0.03]">
          {num}
        </span>

        {/* Top row */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-white/20 text-xs font-mono font-bold tracking-widest">#{num}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.accent}`}>
            {project.technologies[0]}
          </span>
          <span className="flex items-center gap-1.5 text-green-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Live
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white font-black text-2xl lg:text-3xl mb-3 leading-tight group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/45 text-sm lg:text-[15px] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-7">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          <Link href={project.demo} target="_blank"
            className={`btn-primary text-sm py-2.5 px-6 bg-gradient-to-r ${project.accent} border-0`}>
            <GoLinkExternal size={14} /> View Live
          </Link>
          {project.github && (
            <Link href={project.github} target="_blank" className="btn-outline text-sm py-2.5 px-5">
              <BsGithub size={14} /> Code
            </Link>
          )}
          {project.frontendGithub && (
            <>
              <Link href={project.frontendGithub} target="_blank" className="btn-outline text-sm py-2 px-4">
                <BsGithub size={13} /> FE
              </Link>
              <Link href={project.backendGithub} target="_blank" className="btn-outline text-sm py-2 px-4">
                <BsGithub size={13} /> BE
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const stickyRefs = useRef([]);
  const cardRefs = useRef([]);
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const filteredLenRef = useRef(0);

  const filtered = activeFilter === "All"
    ? projectData
    : projectData.filter((p) => p.technologies.includes(activeFilter));

  filteredLenRef.current = filtered.length;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeaderVisible(true); },
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const len = filteredLenRef.current;
      for (let i = 0; i < len; i++) {
        const cardEl = cardRefs.current[i];
        const stickyEl = stickyRefs.current[i];
        if (!cardEl || !stickyEl) continue;

        // Cards with higher index (j > i) that are stuck — sitting ON TOP of card i
        let above = 0;
        for (let j = i + 1; j < len; j++) {
          const el = stickyRefs.current[j];
          if (el && el.getBoundingClientRect().top <= STICK_TOP + 4) above++;
        }

        // Cards with lower index (j < i) that are stuck — card i is sitting ON TOP of them
        let below = 0;
        for (let j = 0; j < i; j++) {
          const el = stickyRefs.current[j];
          if (el && el.getBoundingClientRect().top <= STICK_TOP + 4) below++;
        }

        // Buried cards: scale down + darken
        const scale = Math.max(0.78, 1 - above * 0.04);
        const bright = Math.max(0.3, 1 - above * 0.14);
        cardEl.style.transform = `scale(${scale})`;
        cardEl.style.filter = `brightness(${bright})`;

        // Elevated cards (sitting on top of others): opaque dark background so text is readable
        cardEl.style.backgroundColor = below > 0 ? "rgba(5,8,22,0.82)" : "";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-24 px-5 lg:px-20"
    >
      <div className="blob-blue"   style={{ top: "0%",    left: "-8%" }} />
      <div className="blob-purple" style={{ bottom: "10%", right: "-5%" }} />

      <div className="max-w-screen-xl mx-auto relative" style={{ zIndex: 1 }}>

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="font-bold text-3xl lg:text-5xl text-white mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <LeafDivider />
          <p className="text-white/35 text-base mt-4 max-w-lg mx-auto">
            Each project is a story of a problem solved — crafted with care for performance and user experience.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/30 scale-105"
                  : "glass-card text-white/50 hover:text-white hover:scale-105"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/*
          Stacking cards: all sticky elements must share ONE parent so each
          card remains stuck for the full duration while later cards pile on top.
          React.Fragment keeps the DOM flat (no extra wrapper per card).
        */}
        <div>
          {filtered.map((project, index) => (
            <React.Fragment key={project.title}>
              {/* Spacer between cards — controls how much you scroll before the next card slides over */}
              {index > 0 && (
                <div aria-hidden="true" style={{ height: `${SCROLL_GAP}px` }} />
              )}
              <div
                ref={el => { stickyRefs.current[index] = el; }}
                style={{
                  position: "sticky",
                  top: `${STICK_TOP}px`,
                  zIndex: index + 10,
                }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  cardRef={el => { cardRefs.current[index] = el; }}
                />
              </div>
            </React.Fragment>
          ))}
          {/* Extra space so the last card doesn't immediately unstick at section end */}
          <div aria-hidden="true" style={{ height: "200px" }} />
        </div>

      </div>
    </section>
  );
};

export default Projects;
