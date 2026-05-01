"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const socials = [
  {
    icon: "https://cdn.prod.website-files.com/5f10ed4b2ae6bc09c03f5d7a/64959d5f65a257fb51a4259c_github.png",
    link: "https://github.com/SaqlineShabbir/",
    name: "GitHub",
    desc: "Check my code",
    gradient: "from-gray-700 to-gray-900",
    hoverBorder: "hover:border-gray-500/50",
    hoverShadow: "hover:shadow-gray-500/20",
  },
  {
    icon: "https://image.similarpng.com/very-thumbnail/2021/01/Black-linkedin-logo-design-on-transparent-background-PNG.png",
    link: "https://www.linkedin.com/in/sabbir0911/",
    name: "LinkedIn",
    desc: "Let's connect",
    gradient: "from-blue-600 to-blue-800",
    hoverBorder: "hover:border-blue-500/50",
    hoverShadow: "hover:shadow-blue-500/20",
  },
  {
    icon: "https://static.vecteezy.com/system/resources/previews/023/986/885/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png",
    link: "/",
    name: "Instagram",
    desc: "Follow me",
    gradient: "from-pink-600 to-purple-700",
    hoverBorder: "hover:border-pink-500/50",
    hoverShadow: "hover:shadow-pink-500/20",
  },
  {
    icon: "https://i.pinimg.com/originals/84/68/5b/84685ba9637a951591040426a46da70f.jpg",
    link: "https://www.facebook.com/SabbirHossain0911/",
    name: "Facebook",
    desc: "Stay in touch",
    gradient: "from-blue-500 to-blue-700",
    hoverBorder: "hover:border-blue-400/50",
    hoverShadow: "hover:shadow-blue-400/20",
  },
];

const Socials = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`py-16 px-5 lg:px-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Connect</p>
          <h2 className="font-bold text-3xl lg:text-4xl text-white mb-3">
            Find Me <span className="gradient-text">Online</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`social-card border border-white/8 ${social.hoverBorder} hover:shadow-xl ${social.hoverShadow}`}>
                {/* Icon container */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center p-2.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                {/* Label */}
                <div>
                  <h3 className="text-white font-semibold text-sm leading-tight">{social.name}</h3>
                  <p className="text-white/35 text-xs mt-0.5">{social.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
