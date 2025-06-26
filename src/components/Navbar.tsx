import React, { useState, useEffect } from "react";
import type { PersonalInfo } from "../types";
import { IconMenu, IconX } from "../components/icons";

interface NavbarProps {
  personalInfo: PersonalInfo;
}

const Bolt = () => (
  <svg
    className="inline-block ml-1 animate-bounce"
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M11 1L3 10H9L8 19L17 7H11L11 1Z"
      fill="#34d399"
      stroke="#34d399"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ personalInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    if (isOpen) setIsOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-light-navy/90 shadow-lg" : "bg-navy/80"}
        backdrop-blur-md
        navbar-header
      `}
    >
      {/* Animated circuit line border */}
      <div className="relative">
        <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-green via-blue-400 to-green animate-circuit" />
      </div>
      <div className="relative container mx-auto px-6 sm:px-12 md:px-16 flex justify-between items-center py-4">
        {/* Logo with glow and bolt */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="text-2xl font-bold text-green font-mono drop-shadow-lg relative animate-power-glow"
          style={{
            textShadow: "0 0 8px #34d399, 0 0 16px #34d399",
            letterSpacing: "0.05em",
          }}
        >
          {personalInfo.name.split(" ")[0][0]}.
          {personalInfo.name.split(" ")[1][0]}.
          <Bolt />
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative font-mono text-sm px-2 py-1 text-lightest-slate hover:text-green transition-colors duration-300 group"
            >
              <span className="text-green mr-1">0{index + 1}.</span>
              {link.label}
              {/* Flowing current underline */}
              <span
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-green via-blue-400 to-green rounded opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300"
                style={{ transformOrigin: "left" }}
              />
            </a>
          ))}
          {/* Resume button as a glowing chip */}
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded font-mono text-sm text-navy bg-gradient-to-r from-green to-blue-400 shadow-lg border-2 border-green transition-transform duration-300 hover:scale-105 hover:shadow-green-glow"
            style={{
              boxShadow: "0 0 8px #34d399, 0 0 16px #60a5fa",
            }}
          >
            Resume
          </a>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green focus:outline-none"
          >
            {isOpen ? (
              <IconX className="h-7 w-7" />
            ) : (
              <IconMenu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy/95 backdrop-blur-md shadow-lg py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative font-mono text-lg px-2 py-1 text-lightest-slate hover:text-green transition-colors duration-300 group"
              >
                <span className="text-green mr-1">0{index + 1}.</span>
                {link.label}
                <span
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-green via-blue-400 to-green rounded opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300"
                  style={{ transformOrigin: "left" }}
                />
              </a>
            ))}
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-3 rounded font-mono text-lg text-navy bg-gradient-to-r from-green to-blue-400 shadow-lg border-2 border-green transition-transform duration-300 hover:scale-105 hover:shadow-green-glow"
              style={{
                boxShadow: "0 0 8px #34d399, 0 0 16px #60a5fa",
              }}
            >
              Resume
            </a>
          </nav>
        </div>
      )}
      {/* Custom styles for animation */}
      <style>{`
        .animate-circuit {
          background-size: 200% 100%;
          animation: circuit-x 3s linear infinite;
        }
        @keyframes circuit-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-power-glow {
          animation: power-glow 2s infinite alternate;
        }
        @keyframes power-glow {
          0% { text-shadow: 0 0 8px #34d399, 0 0 16px #34d399; }
          100% { text-shadow: 0 0 16px #34d399, 0 0 32px #60a5fa; }
        }
        .hover\\:shadow-green-glow:hover {
          box-shadow: 0 0 16px #34d399, 0 0 32px #60a5fa;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
