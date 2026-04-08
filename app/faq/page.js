"use client";

import Image from "next/image";
import { useState } from "react";

const faqJovenes = [
  {
    pregunta: "¿En qué se diferencia Job2Jump de un portal de empleo?",
    respuesta: "Un portal de empleo te da una lista de ofertas y te deja solo. Job2Jump te prepara para que destagues, te ayuda a construir tu candidatura y, si quieres, busca activamente en tu nombre. No somos una base de datos, somos tu apoyo en el proceso.",
  },
  {
    pregunta: "¿Qué incluye la sesión gratuita de 15 minutos?",
    respuesta: "Es una primera toma de contacto para entender tu situación: dónde estás, qué buscas y qué opciones tienes. Sin compromiso. Al final te diremos qué podemos hacer por ti y qué plan encaja mejor con tu caso.",
  },
  {
    pregunta: "¿Necesito tener el CV listo para empezar?",
    respuesta: "No. Trabajamos contigo desde donde estés. Si no tienes CV, lo construimos juntos. Si ya tienes uno, lo mejoramos. El punto de partida no importa.",
  },
  {
    pregunta: "¿Cuánto tiempo tarda el proceso?",
    respuesta: "Depende del plan que elijas. Con el Pack Medio, en una sesión de 60 minutos ya tienes un plan claro y tu candidatura mejorada. Con el Pack Premium, el proceso completo —incluyendo búsqueda activa— suele durar entre 2 y 6 semanas.",
  },
  {
    pregunta: "¿Garantizáis que voy a encontrar prácticas o empleo?",
    respuesta: "No podemos garantizar un resultado concreto porque depende de muchos factores externos. Lo que sí garantizamos es que vas a estar mucho mejor preparado que la mayoría de candidatos con tu mismo perfil.",
  },
  {
    pregunta: "¿Las sesiones son presenciales o por videollamada?",
    respuesta: "Todas las sesiones son por videollamada (Teams). Así podemos trabajar contigo sin importar dónde estés.",
  },
];

const faqEmpresas = [
  {
    pregunta: "¿Cuánto cuesta el proceso completo?",
    respuesta: "El proceso empieza con un retainer de 100€ + IVA al arrancar. Si hay contratación, ese importe se descuenta del success fee: 250€ adicionales por becario/prácticas o 400€ adicionales por contrato junior. Total: 350€ o 500€ según el perfil. Para perfiles senior, el success fee total es de 850€.",
  },
  {
    pregunta: "¿Qué pasa si el candidato no funciona?",
    respuesta: "Ofrecemos garantía de sustitución gratuita: 2 meses para perfiles en prácticas y 3 meses para contratos laborales. Si la incorporación no funciona en ese plazo, buscamos otro candidato sin coste adicional.",
  },
  {
    pregunta: "¿Cuánto tarda el proceso de selección?",
    respuesta: "Entre 2 y 4 semanas desde que arrancamos hasta que te presentamos los candidatos. Depende de la disponibilidad del perfil y de la agilidad en las entrevistas.",
  },
  {
    pregunta: "¿Cuántos candidatos me presentáis?",
    respuesta: "Entre 3 y 4 candidatos por proceso, previamente filtrados y entrevistados por nosotros. No recibirás un volcado de CVs — solo perfiles que realmente encajan.",
  },
  {
    pregunta: "¿Qué tipo de perfiles gestionáis?",
    respuesta: "Nos especializamos en talento joven: becarios, perfiles junior y primeros empleos. También gestionamos cambios de empleo para perfiles con experiencia que buscan un nuevo reto profesional.",
  },
  {
    pregunta: "¿Tengo que pagar si al final no contrato a nadie?",
    respuesta: "Solo pierdes el retainer inicial de 100€ si decides no continuar con el proceso o no contratas a ningún candidato. El success fee solo se paga al confirmar la incorporación.",
  },
  {
    pregunta: "¿Gestionáis también los convenios de prácticas?",
    respuesta: "Sí. Nos encargamos de toda la documentación: convenio de prácticas, papeles con el centro formativo y los trámites necesarios. Tú solo tienes que firmar la incorporación.",
  },
];

function Accordion({ items }) {
  const [abierto, setAbierto] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <button
            onClick={() => setAbierto(abierto === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <span className="text-sm font-semibold text-[#0F2B4A] pr-4">{item.pregunta}</span>
            <div className={`w-6 h-6 rounded-full bg-[#F0F4F8] flex items-center justify-center flex-shrink-0 transition-transform ${abierto === i ? "rotate-45" : ""}`}>
              <svg className="w-3 h-3 text-[#0F2B4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </button>
          {abierto === i && (
            <div className="px-6 pb-5">
              <p className="text-gray-500 text-sm leading-relaxed">{item.respuesta}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen font-sans bg-[#F0F4F8]">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <a href="/">
            <Image src="/logo.jpeg" alt="Job2Jump" width={150} height={38} priority />
          </a>
          <div className="hidden md:flex items-center gap-8 text-[#0F2B4A] font-medium text-sm">
            <a href="/quienes-somos" className="hover:text-[#3BB54A] transition">Quiénes somos</a>
            <a href="/#contacto" className="hover:text-[#3BB54A] transition">Contacto</a>
            <a href="/faq" className="hover:text-[#3BB54A] transition">Preguntas frecuentes</a>
          </div>
          <a href="mailto:hola@job2jump.es" className="bg-[#3BB54A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#2ea03c] transition">
            Sesión gratuita
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-16 bg-[#0F2B4A]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
            Preguntas frecuentes
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Resolvemos tus dudas
          </h1>
          <p className="text-white/70 text-lg">
            Si no encuentras lo que buscas, escríbenos a hola@job2jump.es.
          </p>
        </div>
      </section>

      {/* PREGUNTAS */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-8">

          {/* Jóvenes */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#3BB54A] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#0F2B4A]">Para jóvenes y candidatos</h2>
            </div>
            <Accordion items={faqJovenes} />
          </div>

          {/* Empresas */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#0F2B4A] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#0F2B4A]">Para empresas</h2>
            </div>
            <Accordion items={faqEmpresas} />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F2B4A] text-center">
        <div className="max-w-xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-white mb-4">¿Tienes más preguntas?</h2>
          <p className="text-blue-200 mb-8">Escríbenos y te respondemos en menos de 24 horas.</p>
          <a href="mailto:hola@job2jump.es" className="inline-block bg-[#3BB54A] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg">
            hola@job2jump.es
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#091e33] text-white py-12">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <Image src="/logo.jpeg" alt="Job2Jump" width={130} height={33} />
          <p className="text-blue-400 text-sm">© 2026 Job2Jump. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-sm text-blue-400">
            <a href="mailto:hola@job2jump.es" className="hover:text-white transition">hola@job2jump.es</a>
            <a href="https://instagram.com/job2jump" className="hover:text-white transition">Instagram</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
