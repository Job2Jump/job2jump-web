"use client";

import Image from "next/image";
import { useState } from "react";

const preguntas = [
  {
    id: 1,
    pregunta: "¿Cuál es tu edad?",
    tipo: "opciones",
    opciones: ["Menos de 18 años", "18 a 22 años", "23 a 26 años", "27 a 30 años", "Más de 30 años"],
  },
  {
    id: 2,
    pregunta: "¿Qué estudias o has estudiado?",
    tipo: "texto",
    placeholder: "Ej: ADE, Ingeniería Informática, Marketing...",
  },
  {
    id: 3,
    pregunta: "¿Qué estás buscando?",
    tipo: "opciones",
    opciones: [
      "Prácticas en una empresa",
      "Mi primer empleo",
      "Cambiar de trabajo",
    ],
  },
  {
    id: 4,
    pregunta: "¿Cuándo querrías empezar a trabajar?",
    tipo: "opciones",
    opciones: [
      "En el próximo mes",
      "De 1 a 3 meses",
      "De 3 a 6 meses",
      "Más de 6 meses",
    ],
  },
];

export default function SesionGratuita() {
  const [paso, setPaso] = useState(0); // 0 = presentación, 1-5 = preguntas, 6 = resultado
  const [respuestas, setRespuestas] = useState({});
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const preguntaActual = preguntas[paso - 1];

  const responder = (valor) => {
    const nuevasRespuestas = { ...respuestas, [paso]: valor };
    setRespuestas(nuevasRespuestas);
    if (paso < preguntas.length) {
      setPaso(paso + 1);
    } else {
      setPaso(5); // resultado
    }
  };

  // Lógica de cualificación — preguntas ahora son 4
  const estaListoAhora = () => {
    const cuando = respuestas[4];
    return cuando === "En el próximo mes" || cuando === "De 1 a 3 meses";
  };

  return (
    <div className="min-h-screen font-sans bg-[#F0F4F8]">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <a href="/">
            <Image src="/logo.png" alt="Job2Jump" width={150} height={38} priority />
          </a>
          <a href="/practicas" className="text-[#000000] text-sm font-medium hover:text-[#3BB54A] transition">
            ← Volver
          </a>
        </div>
      </nav>

      <div className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-6 w-full">

          {/* PASO 0 — Presentación */}
          {paso === 0 && (
            <div className="bg-white rounded-3xl shadow-sm p-10 text-center">
              <span className="inline-block bg-[#3BB54A]/10 text-[#3BB54A] border border-[#3BB54A]/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
                Sesión gratuita · 15 minutos
              </span>
              <h1 className="text-3xl font-bold text-[#000000] mb-4 leading-tight">
                Tu sesión de orientación gratuita
              </h1>
              <p className="text-gray-500 mb-8 leading-relaxed">
                En 15 minutos vamos a ver juntos dónde estás, a dónde quieres llegar y cuál es el mejor camino para conseguirlo.
              </p>

              {/* Qué veremos */}
              <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                {[
                  { titulo: "Diagnóstico", desc: "Evaluamos tu situación actual y tu perfil" },
                  { titulo: "Plan de acción", desc: "Definimos los pasos concretos a seguir" },
                  { titulo: "Oportunidades", desc: "Analizamos qué sectores y empresas encajan contigo" },
                  { titulo: "Orientación", desc: "Te damos claridad sobre tu próximo paso profesional" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#F0F4F8] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-4 h-4 rounded-full bg-[#3BB54A] flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-[#000000] font-semibold text-sm">{item.titulo}</p>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-400 text-sm mb-6">Antes de reservar, necesitamos hacerte 5 preguntas rápidas para preparar bien tu sesión.</p>

              {/* Nombre y email */}
              <div className="flex flex-col gap-3 mb-6">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3BB54A] focus:ring-1 focus:ring-[#3BB54A]"
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3BB54A] focus:ring-1 focus:ring-[#3BB54A]"
                />
              </div>

              <button
                onClick={() => nombre && email && setPaso(1)}
                className={`w-full py-4 rounded-full font-semibold text-base transition ${nombre && email ? "bg-[#3BB54A] text-white hover:bg-[#2ea03c]" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
              >
                Empezar el cuestionario
              </button>
            </div>
          )}

          {/* PASOS 1-4 — Preguntas */}
          {paso >= 1 && paso <= 4 && (
            <div className="bg-white rounded-3xl shadow-sm p-10">
              {/* Barra de progreso */}
              <div className="flex gap-1.5 mb-8">
                {preguntas.map((_, i) => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${i < paso ? "bg-[#3BB54A]" : "bg-gray-200"}`}></div>
                ))}
              </div>

              <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-3">Pregunta {paso} de {preguntas.length}</p>
              <h2 className="text-2xl font-bold text-[#000000] mb-8">{preguntaActual.pregunta}</h2>

              {preguntaActual.tipo === "texto" && (
                <div>
                  <input
                    type="text"
                    placeholder={preguntaActual.placeholder}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3BB54A] focus:ring-1 focus:ring-[#3BB54A] mb-4"
                    onKeyDown={(e) => e.key === "Enter" && e.target.value && responder(e.target.value)}
                    id="respuesta-texto"
                  />
                  <button
                    onClick={() => {
                      const val = document.getElementById("respuesta-texto").value;
                      if (val) responder(val);
                    }}
                    className="w-full bg-[#000000] text-white py-3.5 rounded-full font-semibold text-sm hover:bg-[#222222] transition"
                  >
                    Siguiente →
                  </button>
                </div>
              )}

              {preguntaActual.tipo === "opciones" && (
                <div className="flex flex-col gap-3">
                  {preguntaActual.opciones.map((opcion, i) => (
                    <button
                      key={i}
                      onClick={() => responder(opcion)}
                      className="text-left border border-gray-200 rounded-xl px-5 py-4 text-sm text-gray-700 hover:border-[#3BB54A] hover:bg-[#3BB54A]/5 hover:text-[#000000] transition font-medium"
                    >
                      {opcion}
                    </button>
                  ))}
                </div>
              )}

              {paso > 1 && (
                <button onClick={() => setPaso(paso - 1)} className="mt-6 text-gray-400 text-sm hover:text-gray-600 transition">
                  ← Volver
                </button>
              )}
            </div>
          )}

          {/* PASO 5 — Resultado */}
          {paso === 5 && (
            <div className="bg-white rounded-3xl shadow-sm p-10 text-center">
              {estaListoAhora() ? (
                <>
                  <div className="w-16 h-16 bg-[#3BB54A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#3BB54A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#000000] mb-3">¡Perfecto, {nombre}!</h2>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    Todo listo para reservar tu sesión gratuita de 15 minutos con Celia. Elige el día y la hora que mejor te vengan.
                  </p>
                  <div className="bg-[#F0F4F8] rounded-2xl p-6 mb-6">
                    <p className="text-sm text-gray-500 mb-1">Lo que veremos en tu sesión:</p>
                    <ul className="text-sm text-[#000000] font-medium space-y-1 text-left">
                      <li className="flex items-center gap-2"><span className="text-[#3BB54A]">✓</span> Diagnóstico de tu situación actual</li>
                      <li className="flex items-center gap-2"><span className="text-[#3BB54A]">✓</span> Plan de acción concreto</li>
                      <li className="flex items-center gap-2"><span className="text-[#3BB54A]">✓</span> Análisis de oportunidades que encajan contigo</li>
                      <li className="flex items-center gap-2"><span className="text-[#3BB54A]">✓</span> Orientación sobre tu próximo paso</li>
                    </ul>
                  </div>
                  {/* Botón Calendly — desactivado hasta mañana */}
                  <div className="relative">
                    <button
                      disabled
                      className="w-full bg-[#3BB54A] text-white py-4 rounded-full font-semibold text-base opacity-50 cursor-not-allowed"
                    >
                      Reservar mi sesión gratuita
                    </button>
                    <p className="text-xs text-gray-400 mt-2">Disponible en breve</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 bg-[#000000]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#000000] mb-3">Hola, {nombre}</h2>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    Parece que todavía no es el momento exacto, pero nos encantaría ayudarte cuando llegue. Te avisamos con tiempo para que puedas prepararte bien y dar el salto en el momento adecuado.
                  </p>
                  <div className="bg-[#F0F4F8] rounded-2xl p-6 mb-6 text-left">
                    <p className="text-sm font-semibold text-[#000000] mb-2">Mientras tanto, te enviaremos:</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li className="flex items-center gap-2"><span className="text-[#3BB54A]">✓</span> Consejos para preparar tu búsqueda</li>
                      <li className="flex items-center gap-2"><span className="text-[#3BB54A]">✓</span> Recursos gratuitos para mejorar tu CV y LinkedIn</li>
                      <li className="flex items-center gap-2"><span className="text-[#3BB54A]">✓</span> Información sobre empresas que buscan perfiles como el tuyo</li>
                    </ul>
                  </div>
                  <button
                    disabled
                    className="w-full bg-[#000000] text-white py-4 rounded-full font-semibold text-base opacity-50 cursor-not-allowed"
                  >
                    Avísame cuando sea el momento
                  </button>
                  <p className="text-xs text-gray-400 mt-2">Email marketing — disponible en breve</p>
                </>
              )}
            </div>
          )}

        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] text-white py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <Image src="/logo.png" alt="Job2Jump" width={130} height={33} />
          <p className="text-gray-400 text-sm">© 2026 Job2Jump. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="mailto:hola@job2jump.es" className="hover:text-white transition">hola@job2jump.es</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
