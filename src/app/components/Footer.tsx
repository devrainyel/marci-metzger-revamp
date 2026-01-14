"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/">
              <Image
                src="/brand.png"
                alt="The Ridge Realty Group"
                width={200}
                height={60}
                className="w-auto h-10 invert brightness-0 hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light tracking-wide">
              Dedicated to delivering a bespoke real estate experience throughout Southern Nevada. 
              Precision, transparency, and a commitment to architectural excellence define our group.
            </p>
            <div className="flex gap-5">
              {[
                { icon: <FaFacebookF />, url: "#" },
                { icon: <FaInstagram />, url: "#" },
                { icon: <FaLinkedinIn />, url: "#" },
                { icon: <FaYelp />, url: "#" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-8 text-white/60">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: "Listings", href: "/listings" },
                { name: "Let's Move", href: "/lets-move" },
                { name: "Our Story", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-xs font-medium tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Compliance */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-8 text-white/60">Location</h4>
              <p className="text-xs font-medium tracking-[0.2em] leading-loose text-gray-400 uppercase">
                3190 HW-160, Suite F<br />
                Pahrump, Nevada 89048<br />
                (206) 919-6886
              </p>
            </div>
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center">
            <p className="text-[10px] font-mono tracking-widest text-gray-600 uppercase">
              © {currentYear} The Ridge Realty Group
            </p>
            <Link href="/privacy" className="text-[10px] font-mono tracking-widest text-gray-600 uppercase hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[9px] font-bold tracking-[0.4em] uppercase text-gray-500 hover:text-white transition-all"
          >
            <span>Top</span>
            <span className="w-8 h-px bg-gray-700 group-hover:bg-white group-hover:w-12 transition-all"></span>
          </button>
        </div>
      </div>
    </footer>
  );
}