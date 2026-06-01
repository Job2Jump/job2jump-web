"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [empresasOpen, setEmpresasOpen] = useState(false);

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

            {/* Soy empresa con dropdown */}
            <div className="relative group">
              <a href="/empresas" className="flex items-center gap-1 hover:text-[#7A9E3B] transition">
                Soy empresa
                <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/empresas/becario" className="flex items-center gap-3 px-4 py-3 hover:bg-[#F0F4F8] transition">
                  <span className="w-7 h-7 rounded-full bg-[#000000] flex items-center justify-center text-xs">🎓</span>
                  <p className="text-xs font-bold text-[#000000]">Busco becario/a</p>
                </a>
                <div className="h-px bg-gray-100 mx-4"></div>
                <a href="/empresas/talento" className="flex items-center gap-3 px-4 py-3 hover:bg-[#F0F4F8] transition">
                  <span className="w-7 h-7 rounded-full bg-[#7A9E3B] flex items-center justify-center text-xs">💼</span>
                  <p className="text-xs font-bold text-[#000000]">Busco talento junior/senior</p>
                </a>
              </div>
            </div>

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
        <div className="fixed inset-0 z-40 bg-white pt-20 md:hidden overflow-y-auto">
          <div className="flex flex-col px-8 py-8 gap-6 text-[#000000] font-semibold text-xl">
            <a href="/quienes-somos" onClick={() => setOpen(false)} className="border-b border-gray-100 pb-6 hover:text-[#7A9E3B] transition">Quiénes somos</a>
            <a href="/practicas" onClick={() => setOpen(false)} className="border-b border-gray-100 pb-6 hover:text-[#7A9E3B] transition">Soy talento joven</a>

            {/* Soy empresa expandible en mobile */}
            <div className="border-b border-gray-100 pb-6">
              <button
                className="w-full flex items-center justify-between hover:text-[#7A9E3B] transition"
                onClick={() => setEmpresasOpen(!empresasOpen)}
              >
                <span>Soy empresa</span>
                <svg className={`w-5 h-5 transition-transform ${empresasOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {empresasOpen && (
                <div className="mt-4 flex flex-col gap-3 pl-2">
                  <a href="/empresas/becario" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2 hover:text-[#7A9E3B] transition">
                    <span className="w-8 h-8 rounded-full bg-[#000000] flex items-center justify-center text-sm flex-shrink-0">🎓</span>
                    <p className="text-base font-bold">Busco becario/a</p>
                  </a>
                  <a href="/empresas/talento" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2 hover:text-[#7A9E3B] transition">
                    <span className="w-8 h-8 rounded-full bg-[#7A9E3B] flex items-center justify-center text-sm flex-shrink-0">💼</span>
                    <p className="text-base font-bold">Busco talento junior/senior</p>
                  </a>
                </div>
              )}
            </div>

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
