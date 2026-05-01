"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../assets/shlogo.PNG";

const navLinks = [
  { label: "About",    href: "#about",    id: "about" },
  { label: "Resume",   href: "#resume",   id: "resume" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact",  href: "#contact",  id: "contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers = navLinks.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0, rootMargin: "-72px 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-purple-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-5 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            className="h-9 w-9 animate-border-shape group-hover:scale-110 transition-transform duration-300"
            src={logo}
            alt="SH Logo"
          />
          <span className="hidden sm:block gradient-text font-bold text-lg">Sabbir</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href, id }) => (
            <Link
              key={label}
              href={href}
              className={`nav-link ${activeSection === id ? "nav-link-active" : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link href="#contact" className="btn-primary text-sm py-2 px-5">
            Hire Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#050816]/95 backdrop-blur-lg border-b border-white/5`}
      >
        <div className="px-5 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href, id }) => (
            <Link
              key={label}
              href={href}
              className={`nav-link text-base ${activeSection === id ? "nav-link-active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="btn-primary text-sm py-2 px-5 w-fit"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
