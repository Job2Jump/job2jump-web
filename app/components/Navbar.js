"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="Job2Jump" width={150} height={38} priority />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-[#000000] font-medium text-sm">
            <a href="/quienes-somos" className="hover:text-[#7A9E3B] transition">Quiénes somos</a>
            <a href="/practicas" className="hover:text-[#7A9E3B] transition">Soy talento joven</a>
            <a href="/empresas" className="hover:text-[#7A9E3B] transition">Soy empresa</a>
            <a href="/faq" className="hover:text-[#7A9E3B] transition">Preguntas frecuentes</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="/contacto" className="bg-[#7A9E3B] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#2ea03c] transition">
              Contáctanos
            </a>
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
              onClick={() => setOpen(!open)}
              aria-label="Menú"
            >
              <span className={`block w-6 h-0.5 bg-[#000000] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-[#000000] transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-[#000000] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white pt-20 md:hidden">
          <div className="flex flex-col px-8 py-8 gap-8 text-[#000000] font-semibold text-xl">
            <a href="/quienes-somos" onClick={() => setOpen(false)} className="border-b border-gray-100 pb-6 hover:text-[#7A9E3B] transition">Quiénes somos</a>
            <a href="/practicas" onClick={() => setOpen(false)} className="border-b border-gray-100 pb-6 hover:text-[#7A9E3B] transition">Soy talento joven</a>
            <a href="/empresas" onClick={() => setOpen(false)} className="border-b border-gray-100 pb-6 hover:text-[#7A9E3B] transition">Soy empresa</a>
            <a href="/faq" onClick={() => setOpen(false)} className="border-b border-gray-100 pb-6 hover:text-[#7A9E3B] transition">Preguntas frecuentes</a>
            <a href="/contacto" onClick={() => setOpen(false)} className="mt-2 bg-[#7A9E3B] text-white px-8 py-4 rounded-full font-semibold text-base text-center hover:bg-[#2ea03c] transition">
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </>
  );
}
