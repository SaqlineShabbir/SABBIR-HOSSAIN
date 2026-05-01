"use client";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi";

const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    value: "+88 (0171-0547636)",
    href: "tel:+8801710547636",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    value: "sabbir0911hossain@gmail.com",
    href: "mailto:sabbir0911hossain@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Bashundhara R/A, Chattogram",
    href: "#",
  },
];

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const contactData = {
        name:    formData.get("name"),
        email:   formData.get("email"),
        subject: formData.get("subject"),
        phone:   formData.get("phone"),
        message: formData.get("message"),
      };
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(contactData),
      });
      if (!response.ok) throw new Error(`Status: ${response.status}`);
      toast.success("Message sent! I'll be in touch soon.");
      e.currentTarget.reset();
    } catch {
      toast.error("Something went wrong — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-24 px-5 lg:px-20 overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <div className="blob-purple" style={{ bottom: "0%", left: "-5%" }} />

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1a1030",
            color: "#e2e8f0",
            border: "1px solid rgba(124,58,237,0.35)",
          },
        }}
      />

      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="font-bold text-3xl lg:text-5xl text-white mb-3">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
          <p className="text-white/35 text-base mt-5 max-w-lg mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* ── Form ── */}
          <div className="lg:col-span-3">
            <div className="glass-card p-6 lg:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input-glow"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input-glow"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="input-glow"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone (optional)"
                    className="input-glow"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Write your message…"
                  rows={5}
                  className="input-glow resize-none"
                  required
                />
                <div className="flex gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                  <button type="reset" className="btn-outline">
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ── Info ── */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-5">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, title, value, href }) => (
                  <a key={title} href={href} className="flex items-start gap-4 group">
                    <div className="contact-icon-card">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-white/35 text-[11px] uppercase tracking-wider mb-0.5">
                        {title}
                      </p>
                      <p className="text-white/75 text-sm group-hover:text-purple-400 transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="text-white font-semibold mb-3 text-sm">Availability</h4>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-green-400 text-sm font-medium">Open to opportunities</span>
              </div>
              <p className="text-white/35 text-xs leading-relaxed">
                Currently available for freelance projects and full-time positions.
                Usually responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
