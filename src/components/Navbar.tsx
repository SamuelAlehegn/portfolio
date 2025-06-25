import React, { useState, useEffect } from "react";
import type { PersonalInfo } from "../types";
import { IconMenu, IconX } from "../components/icons";

interface NavbarProps {
  personalInfo: PersonalInfo;
}

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
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-light-navy shadow-lg py-4" : "py-6 bg-navy"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-12 md:px-16 flex justify-between items-center">
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="text-2xl font-bold text-green font-mono"
        >
          {personalInfo.name.split(" ")[0][0]}.
          {personalInfo.name.split(" ")[1][0]}.
        </a>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lightest-slate hover:text-green transition-colors duration-300 font-mono text-sm"
            >
              <span className="text-green mr-1">0{index + 1}.</span>
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-green text-green rounded hover:bg-green-tint transition-colors duration-300 text-sm font-mono"
          >
            Resume
          </a>
        </nav>
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
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-light-navy shadow-lg py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lightest-slate hover:text-green transition-colors duration-300 font-mono text-lg"
              >
                <span className="text-green mr-1">0{index + 1}.</span>
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-3 border border-green text-green rounded hover:bg-green-tint transition-colors duration-300 text-lg font-mono"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
