"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEnvelope, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { SiCss3, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import profile from "../../v1/assets/sab.jpg";

const techStack = [
  { icon: FaHtml5,      color: "#E44D26", label: "HTML5" },
  { icon: SiCss3,       color: "#264DE4", label: "CSS3" },
  { icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  { icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { icon: FaReact,      color: "#61DAFB", label: "React" },
  { icon: SiNextdotjs,  color: "#ffffff", label: "Next.js" },
  { icon: FaNode,       color: "#68A063", label: "Node.js" },
  { icon: SiMongodb,    color: "#4DB33D", label: "MongoDB" },
  { icon: SiMysql,            color: "#4479A1", label: "SQL" },
  { icon: TbBrandReactNative, color: "#61DAFB", label: "React Native" },
];

const toRotate = [
  "Full Stack Developer",
  "MERN Stack Expert",
  "Next.js Enthusiast",
  "UI/UX Lover",
];

const Banner = () => {
  const [loopNum, setLoopNum]       = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText]             = useState("");
  const [delta, setDelta]           = useState(150);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i        = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updated  = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updated);

    if (isDeleting) {
      setDelta(60);
    }
    if (!isDeleting && updated === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updated === "") {
      setIsDeleting(false);
      setLoopNum((n) => n + 1);
      setDelta(150);
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="blob-purple" style={{ top: "8%",    left: "-8%" }} />
      <div className="blob-blue"   style={{ bottom: "5%", right: "-5%" }} />

      {/* Star particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width:  Math.random() * 2.5 + 0.5 + "px",
              height: Math.random() * 2.5 + 0.5 + "px",
              top:    Math.random() * 100 + "%",
              left:   Math.random() * 100 + "%",
              animation: `twinkle ${2 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-screen-xl mx-auto w-full px-5 lg:px-20 pt-24 pb-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Left: Text ── */}
          <div className="space-y-6 lg:w-[55%] text-center lg:text-left animate-fade-up">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-purple-300">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new opportunities
            </div>

            {/* Heading */}
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Sabbir</span>
              <br />
              <span className="text-white/90">Hossain</span>
            </h1>

            {/* Typed role */}
            <div className="flex items-center justify-center lg:justify-start gap-3 h-8">
              <div className="accent-line" />
              <h2 className="text-lg lg:text-xl font-medium text-white/60">
                <span className="text-purple-400 font-semibold">{text}</span>
                <span className="text-purple-400 animate-pulse">|</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-white/50 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              A passionate developer crafting elegant full-stack web applications.
              I combine clean code with great design to deliver digital experiences
              that users love.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-1">
              <a href="#contact" className="btn-primary">
                <FaEnvelope size={14} />
                Hire Me
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
                <HiArrowDown size={14} />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 justify-center lg:justify-start pt-2">
              {[
                { value: "2+",  label: "Years Experience" },
                { value: "80+", label: "Projects Built" },
                { value: "10+", label: "Technologies" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="gradient-text font-black text-2xl lg:text-3xl">{value}</p>
                  <p className="text-white/30 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Profile Image ── */}
          <div className="lg:w-[40%] flex justify-center items-center">
            <div className="relative animate-float">
              {/* Outer glow */}
              <div className="absolute inset-[-16px] rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 opacity-25 blur-2xl animate-glow" />
              {/* Spinning ring */}
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 animate-spin-slow opacity-60" />
              {/* Photo */}
              <Image
                className="animation relative z-10 w-[250px] h-[250px] lg:w-[310px] lg:h-[310px]"
                src={profile}
                alt="Sabbir Hossain"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── Tech Stack ── */}
        <div className="mt-16 lg:mt-20 animate-fade-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <p className="text-white/30 text-xs font-semibold uppercase tracking-[4px] text-center mb-6">
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map(({ icon: Icon, color, label }) => (
              <div key={label} className="tech-icon-card">
                <Icon style={{ color }} size={20} />
                <span className="text-white/55 text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="flex justify-center mt-14">
          <a
            href="#resume"
            className="flex flex-col items-center gap-2 text-white/25 hover:text-white/50 transition-colors duration-300"
          >
            <span className="text-[10px] uppercase tracking-[3px]">Scroll Down</span>
            <div className="w-5 h-8 border border-white/15 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-white/35 rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
