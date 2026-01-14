"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // --- Smart Scroll Logic ---
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Always show at the very top of the page
      if (currentScrollY < 50) {
        setIsVisible(true);
      } 
      // If scrolling down, hide. If scrolling up, show.
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "LISTINGS", href: "/listings" },
    { name: "LET'S MOVE", href: "/lets-move" },
    { name: "ABOUT US", href: "/about" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#161616]/5 transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/brand.png"
                  alt="The Ridge Realty Group"
                  width={180}
                  height={50}
                  className="w-auto h-10 object-contain brightness-0"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center h-full">
              {navLinks.map((link, index) => (
                <div key={link.name} className="flex items-center h-full">
                  {index !== 0 && <div className="w-px h-4 bg-[#161616]/10 mx-6" />}
                  <Link
                    href={link.href}
                    className="text-[11px] font-bold tracking-[0.3em] text-[#161616] hover:text-black/70 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-8">
              <div className="hidden lg:block">
                <Link href="/contact">
                  <button className="text-[11px] font-bold tracking-[0.3em] uppercase border border-[#161616] px-8 py-3 hover:bg-[#161616] hover:text-white transition-all duration-500">
                    Contact
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsOpen(true)}
                className="lg:hidden group flex flex-col gap-1.5 items-end p-2"
              >
                <span className="w-8 h-px bg-[#161616]"></span>
                <span className="w-5 h-px bg-[#161616] group-hover:w-8 transition-all"></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* --- Mobile Overlay Menu (Unchanged) --- */}
      <div 
        className={`fixed inset-0 z-[100] bg-white transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center h-24 px-6 border-b border-gray-100">
          <Image src="/brand.png" alt="Logo" width={140} height={40} className="brightness-0" />
          <button onClick={() => setIsOpen(false)} className="p-2 text-3xl text-[#161616]">
            <IoCloseOutline />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center h-[calc(100vh-120px)] space-y-10">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex flex-col items-center"
            >
              <span className="text-[10px] font-mono text-gray-400 mb-2">{`0${index + 1}`}</span>
              <span className="text-3xl font-bold tracking-[0.2em] text-[#161616] uppercase">
                {link.name}
              </span>
              <div className="w-0 h-px bg-[#161616] group-hover:w-full transition-all duration-500 mt-2"></div>
            </Link>
          ))}
          
          <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-8">
            <button className="text-[11px] font-bold tracking-[0.3em] uppercase bg-[#161616] text-white px-12 py-4">
              Get in Touch
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
}