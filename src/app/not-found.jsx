import Image from "next/image";
import Link from "next/link";
import logo from "../v1/assets/shlogo.PNG";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#050816] flex flex-col items-center justify-center px-5 overflow-hidden">
      {/* Blobs */}
      <div className="blob-purple" style={{ top: "10%",    left: "-5%" }} />
      <div className="blob-blue"   style={{ bottom: "10%", right: "-5%" }} />

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-lg">
        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          width={64}
          height={64}
          className="animate-border-shape mb-2"
          style={{ mixBlendMode: "screen", filter: "drop-shadow(0 0 16px rgba(124,58,237,0.8))" }}
        />

        {/* 404 number */}
        <div className="relative">
          <p
            className="text-[120px] md:text-[160px] font-black leading-none select-none"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(59,130,246,0.08))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </p>
          <p className="absolute inset-0 flex items-center justify-center gradient-text text-[120px] md:text-[160px] font-black leading-none opacity-20 blur-sm select-none">
            404
          </p>
        </div>

        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-white -mt-6">
          Page Not Found
        </h1>
        <p className="text-white/45 text-base leading-relaxed">
          Looks like this page took a wrong turn. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Divider */}
        <div className="section-divider" />

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <Link href="/" className="btn-primary">
            ← Back to Home
          </Link>
          <Link href="/#contact" className="btn-outline">
            Contact Me
          </Link>
        </div>

        {/* Quick links */}
        <div className="flex gap-6 mt-2">
          {["/#about", "/#projects", "/#resume"].map((href) => {
            const label = href.replace("/#", "");
            return (
              <Link
                key={href}
                href={href}
                className="text-white/30 text-sm capitalize hover:text-purple-400 transition-colors"
              >
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
