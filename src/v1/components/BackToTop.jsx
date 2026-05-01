"use client";
import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center
        bg-gradient-to-br from-purple-600 to-blue-600
        shadow-lg shadow-purple-600/30
        transition-all duration-300
        hover:scale-110 hover:shadow-purple-600/50
        ${visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
        }`}
    >
      <HiArrowUp size={18} className="text-white" />
    </button>
  );
};

export default BackToTop;
