"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/memberships", label: "Memberships" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/shop", label: "Shop" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-light/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-3xl font-black text-gradient">VECTOR</span>
            <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="/memberships"
              className="btn-primary text-sm"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-6 space-y-4 bg-dark-light">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/memberships"
              onClick={() => setIsOpen(false)}
              className="block btn-primary text-center text-sm"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


