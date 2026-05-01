"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaCodeBranch, FaStar, FaUniversity, FaUserFriends } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

import useCountUp from "../hooks/useCountUp";
import ziarah from "../assets/ziarah.PNG";

const LANG_COLORS = {
  JavaScript: "#F7DF1E", TypeScript: "#3178C6", CSS: "#264DE4",
  HTML: "#E44D26", Python: "#3776AB", Java: "#ED8B00",
  PHP: "#777BB4", "C#": "#239120", Go: "#00ADD8",
  Rust: "#DEA584", Shell: "#89E051", Vue: "#41B883",
};

const Skeleton = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="h-36 rounded-xl bg-white/5 animate-pulse" />
    ))}
  </div>
);

const GitHubStats = () => {
  const [stats, setStats]   = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://api.github.com/users/SaqlineShabbir").then((r) => r.json()),
      fetch("https://api.github.com/users/SaqlineShabbir/repos?per_page=100").then((r) => r.json()),
    ])
      .then(([user, repos]) => {
        const totalStars = Array.isArray(repos)
          ? repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0) : 0;
        const langCount = {};
        if (Array.isArray(repos))
          repos.forEach((r) => { if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1; });
        const topLangs = Object.entries(langCount).sort((a, b) => b[1] - a[1]).slice(0, 8);
        const totalLangRepos = topLangs.reduce((s, [, c]) => s + c, 0);
        setStats({ repos: user.public_repos || 0, followers: user.followers || 0, stars: totalStars, topLangs, totalLangRepos });
      })
      .catch(() => setStats(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Skeleton />;
  if (!stats)  return null;

  const statItems = [
    { icon: BsGithub,      label: "Public Repos", value: stats.repos },
    { icon: FaStar,        label: "Total Stars",  value: stats.stars },
    { icon: FaUserFriends, label: "Followers",    value: stats.followers },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Card 1 — GitHub Stats */}
      <div className="rounded-xl border border-white/10 bg-[#0d1117] p-5 flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
          <BsGithub className="text-white" size={16} />
          <span className="text-white font-semibold text-sm">GitHub Stats</span>
        </div>
        {statItems.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/60 text-xs">
              <Icon size={13} className="text-purple-400" />
              {label}
            </div>
            <span className="text-white font-bold text-sm">{value}</span>
          </div>
        ))}
      </div>

      {/* Card 2 — Top Languages */}
      <div className="rounded-xl border border-white/10 bg-[#0d1117] p-5">
        <p className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
          <FaCodeBranch className="text-purple-400" size={14} /> Top Languages
        </p>
        <div className="space-y-2">
          {stats.topLangs.slice(0, 5).map(([lang, count]) => {
            const pct = Math.round((count / stats.totalLangRepos) * 100);
            return (
              <div key={lang}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/75">{lang}</span>
                  <span className="text-white/50">{pct}%</span>
                </div>
                <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, background: LANG_COLORS[lang] || "#a78bfa" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card 3 — Streak (image — demolab is reliable) */}
      <div className="rounded-xl border border-white/10 bg-[#0d1117] overflow-hidden sm:col-span-2 lg:col-span-1 flex items-center justify-center p-2">
        <img
          src="https://streak-stats.demolab.com/?user=SaqlineShabbir&theme=tokyonight&border_radius=10&hide_border=true"
          alt="GitHub Streak"
          className="w-full rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const experience = [
  { id: 1, title: "Full Stack Developer",          company: "Ziarah",                              date: "Oct 2024 – Present",     isCurrent: true,  type: "Work",      logo: ziarah },
  { id: 2, title: "Post Graduation Diploma (PGDIT)", company: "Noakhali Science & Technology University", date: "Feb 2024 – Present", isCurrent: true,  type: "Education", logo: null },
  { id: 3, title: "Think In a Redux Way",           company: "Learn With Sumit",                    date: "Aug 2022 – Feb 2023",    isCurrent: false, type: "Course",    logo: null },
  { id: 4, title: "Complete Web Development Course", company: "Programming Hero",                   date: "Jun 2021 – Jun 2022",    isCurrent: false, type: "Course",    logo: null },
];

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "ReactJs", "React Native", "NextJs", "NodeJs",
  "ExpressJs", "MongoDB", "MySQL", "Tailwind",
  "Bootstrap", "Mongoose", "Redux", "Firebase",
];

const tools = [
  { id: 1, name: "VS Code",   logo: "https://img.icons8.com/color/96/visual-studio-code-2019.png" },
  { id: 2, name: "GitHub",    logo: "https://cdn.prod.website-files.com/5f10ed4b2ae6bc09c03f5d7a/64959d5f65a257fb51a4259c_github.png" },
  { id: 3, name: "Figma",     logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png" },
  { id: 4, name: "Postman",   logo: "https://img.icons8.com/dusk/96/postman-api.png" },
  { id: 5, name: "MongoDB",   logo: "https://static.macupdate.com/products/62461/m/mongodb-compass-logo.png?v=1663508519" },
  { id: 6, name: "PgAdmin 4", logo: "https://dl2.macupdate.com/images/icons256/60968.png?time=1663919426" },
  { id: 7, name: "Trello",    logo: "https://assets.stickpng.com/images/58482beecef1014c0b5e4a36.png" },
  { id: 8, name: "Vercel",    logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/152x152.png" },
  { id: 9, name: "Swagger",   logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png" },
];

const typeBadge = {
  Work:      "bg-green-500/15 text-green-400 border border-green-500/25",
  Education: "bg-blue-500/15 text-blue-400 border border-blue-500/25",
  Course:    "bg-purple-500/15 text-purple-400 border border-purple-500/25",
};

const resumeStats = [
  { num: 2,  suffix: "+", label: "Years Exp." },
  { num: 80, suffix: "+", label: "Projects" },
  { num: 15, suffix: "+", label: "Skills" },
];

const StatItem = ({ num, suffix, label }) => {
  const [ref, count] = useCountUp(num);
  return (
    <div ref={ref} className="text-center">
      <p className="gradient-text font-black text-4xl leading-none">{count}{suffix}</p>
      <p className="text-white/60 text-xs mt-1">{label}</p>
    </div>
  );
};

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const Resume = () => {
  const [sectionRef, visible] = useReveal();

  return (
    <section
      id="resume"
      ref={sectionRef}
      className={`relative py-24 px-5 lg:px-20 overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <div className="blob-purple" style={{ top: "10%", right: "-8%" }} />

      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Background</p>
          <h2 className="font-bold text-3xl lg:text-5xl text-white mb-3">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="glass-card p-6 lg:p-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-white/8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Sabbir Hossain</h3>
              <p className="text-purple-400 font-medium mt-1">Software Developer</p>
              <p className="text-white/60 text-sm mt-1">sabbir0911hossain@gmail.com · Chattogram, Bangladesh</p>
            </div>
            <div className="flex gap-8">
              {resumeStats.map((s) => <StatItem key={s.label} {...s} />)}
            </div>
          </div>

          {/* Bio + Timeline */}
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10 py-8 border-b border-white/8">
            <div>
              <h4 className="text-white font-semibold text-base mb-4">About Me</h4>
              <p className="text-white/65 text-sm leading-relaxed">
                A dynamic Software Developer passionate about leveraging technology to create meaningful solutions.
                I thrive on learning new skills quickly and keeping pace with the latest industry trends.
                Excellent communicator who bridges the gap between developers and stakeholders — delivering solutions that exceed expectations.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-base mb-6">Experience &amp; Education</h4>
              <div className="relative space-y-5">
                <div className="absolute left-[5px] top-2 bottom-0 w-[1px] bg-gradient-to-b from-purple-600/60 via-blue-500/30 to-transparent" />
                {experience.map((exp) => (
                  <div key={exp.id} className="flex gap-4 pl-6 relative">
                    <div className="timeline-dot absolute left-0 top-[6px]" />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-1.5">
                        <div className="min-w-0">
                          <h5 className="text-white/90 font-medium text-sm truncate">{exp.title}</h5>
                          <p className="text-white/60 text-xs mt-0.5 flex items-center gap-1">
                            {exp.logo
                              ? <Image src={typeof exp.logo === "object" ? exp.logo.src || exp.logo : exp.logo} alt="" width={13} height={13} className="opacity-60 flex-shrink-0" />
                              : <FaUniversity size={11} className="text-white/50 flex-shrink-0" />
                            }
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${typeBadge[exp.type]}`}>{exp.type}</span>
                          {exp.isCurrent && <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/15 text-pink-400 border border-pink-500/25">Current</span>}
                        </div>
                      </div>
                      <p className="text-white/50 text-[11px] mt-1">{exp.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="py-8 border-b border-white/8">
            <h4 className="text-white font-semibold text-base mb-5">Skills</h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2">
              {skills.map((skill) => <div key={skill} className="skill-tag">{skill}</div>)}
            </div>
          </div>

          {/* GitHub Stats */}
          <div className="py-8 border-b border-white/8">
            <h4 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
              GitHub Stats
              <a
                href="https://github.com/SaqlineShabbir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-purple-400 hover:text-purple-300 transition-colors font-normal"
              >
                @SaqlineShabbir ↗
              </a>
            </h4>
            <GitHubStats />
          </div>

          {/* Tools */}
          <div className="pt-8">
            <h4 className="text-white font-semibold text-base mb-5">Tools I Use Daily</h4>
            <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-9 gap-3 lg:gap-4">
              {tools.map((tool) => (
                <div key={tool.id} className="group flex flex-col items-center gap-2">
                  <div className="w-12 h-12 glass-card flex items-center justify-center p-2 rounded-xl transition-all duration-300 group-hover:border-purple-500/40 group-hover:shadow-md group-hover:shadow-purple-500/15 group-hover:-translate-y-1.5">
                    <Image src={tool.logo} alt={tool.name} width={30} height={30} className="object-contain" />
                  </div>
                  <span className="text-[10px] text-white/50 text-center leading-tight group-hover:text-white/55 transition-colors">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
