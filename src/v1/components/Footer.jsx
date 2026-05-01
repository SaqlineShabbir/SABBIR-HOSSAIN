import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaHeart } from "react-icons/fa";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Resume",   href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

const socialLinks = [
  { icon: BsGithub,   href: "https://github.com/SaqlineShabbir/",          label: "GitHub" },
  { icon: BsLinkedin, href: "https://www.linkedin.com/in/sabbir0911/",      label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/SabbirHossain0911/", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/6 pt-10 pb-6 px-5 lg:px-20 overflow-hidden">
      {/* Top row */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="gradient-text font-black text-2xl">Sabbir Hossain</h3>
          <p className="text-white/30 text-sm mt-1">Software Developer · Chattogram, BD</p>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/40 text-sm hover:text-white/80 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2.5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 glass-card flex items-center justify-center text-white/40 hover:text-white hover:border-purple-500/40 transition-all duration-300 hover:scale-110"
            >
              <Icon size={16} />
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 pt-5 text-white/20 text-xs">
        <p>© 2025 Sabbir Hossain. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with <FaHeart size={10} className="text-pink-400" /> using Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
