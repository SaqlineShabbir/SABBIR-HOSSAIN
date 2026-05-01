"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../assets/shlogo.PNG";

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden]   = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 2300);
    const t2 = setTimeout(() => setHidden(true),  2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#050816] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Ambient blobs */}
      <div className="blob-purple" style={{ top: "15%", left: "5%" }} />
      <div className="blob-blue"   style={{ bottom: "15%", right: "5%" }} />

      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Animated ring + logo */}
        <div className="relative w-28 h-28 mb-2 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-ping" style={{ animationDuration: "1.5s" }} />
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: "#7c3aed",
              borderRightColor: "#3b82f6",
              animation: "spin-slow 1.2s linear infinite",
            }}
          />
          <Image
            src={logo}
            alt="Logo"
            width={72}
            height={72}
            className="object-contain relative z-10 animate-border-shape"
            style={{
              mixBlendMode: "screen",
              filter: "drop-shadow(0 0 14px rgba(124, 58, 237, 0.8)) drop-shadow(0 0 30px rgba(59, 130, 246, 0.4))",
            }}
          />
        </div>

        <h1
          className="gradient-text font-black text-3xl md:text-4xl animate-fade-up"
          style={{ animationFillMode: "both" }}
        >
          Sabbir Hossain
        </h1>
        <p
          className="text-white/35 text-xs tracking-[5px] uppercase animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Software Developer
        </p>

        {/* Progress bar */}
        <div className="mt-8 w-48 h-[2px] bg-white/8 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full loading-bar" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
