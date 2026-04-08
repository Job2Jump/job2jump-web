import Image from "next/image";

export default function Empleo() {
  return (
    <div className="min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <a href="/">
            <Image src="/logo.jpeg" alt="Job2Jump" width={150} height={38} priority />
          </a>
          <div className="hidden md:flex items-center gap-8 text-[#0F2B4A] font-medium text-sm">
            <a href="/#quienes-somos" className="hover:text-[#3BB54A] transition">Quiénes somos</a>
            <a href="/#contacto" className="hover:text-[#3BB54A] transition">Contacto</a>
            <a href="/faq" className="hover:text-[#3BB54A] transition">Preguntas frecuentes</a>
            <a href="#planes" className="hover:text-[#3BB54A] transition">Planes</a>
          </div>
          <a href="mailto:hola@job2jump.es" className="bg-[#3BB54A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#2ea03c] transition">
            Sesión gratuita
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center relative">
        {/* Foto de fondo */}
        <Image
          src="/empleo-hero.jpg"
          alt="Joven buscando su primer empleo"
          fill
          className="object-cover blur-[2px]"
          priority
        />
        {/* Overlay oscuro azul */}
        <div className="absolute inset-0 bg-[#0F2B4A]/75"></div>

        {/* Texto encima */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 w-full">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Busco mi primer empleo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Tu primer empleo<br />
              <span className="text-[#3BB54A]">empieza por estar preparado.</span><br />
              Nosotros te preparamos<br />y lo buscamos por ti.
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Estás listo para dar el salto al mundo laboral y conseguir tu primer contrato. Te ayudamos con la preparación y la estrategia que necesitas para destacar frente a otros candidatos con tu mismo perfil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:hola@job2jump.es" className="inline-block bg-[#3BB54A] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#2ea03c] transition shadow-lg text-center">
                Quiero mi sesión gratuita
              </a>
              <a href="#planes" className="inline-block border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:border-white transition text-center">
                Ver planes
              </a>
            </div>
            <p className="text-white/40 text-sm mt-4">15 minutos. Sin compromiso. Solo tú y nosotros.</p>
          </div>
        </div>
      </section>

      {/* ¿TE IDENTIFICAS? */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Sabemos cómo te sientes</span>
            <h2 className="text-4xl font-bold text-[#0F2B4A] mt-3">¿Te suena esto?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Tienes la formación pero no la experiencia. Y todas las ofertas piden los dos.",
              "Mandas solicitudes y no recibes respuesta. O te llaman, pero no pasas la entrevista.",
              "No sabes cómo presentarte ni qué decir cuando te preguntan '¿por qué deberíamos contratarte?'.",
              "Tu LinkedIn está a medias y tu CV no transmite todo lo que puedes aportar.",
              "Sientes que todos los candidatos tienen el mismo perfil que tú. No sabes cómo diferenciarte.",
              "No tienes contactos ni red profesional. Estás empezando desde cero.",
            ].map((text, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#0F2B4A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#0F2B4A] font-semibold text-lg mt-10">
            Si te identificas con alguno de estos, estás en el sitio correcto.
          </p>
        </div>
      </section>

      {/* QUÉ HACEMOS POR TI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Lo que hacemos por ti</span>
            <h2 className="text-4xl font-bold text-[#0F2B4A] mt-3">Así te ayudamos a conseguirlo</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">No somos una bolsa de empleo. Somos el apoyo que necesitas para que cuando llegues a una entrevista, seas el candidato que recuerdan.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Convertimos tu potencial en tu mayor argumento",
                desc: "Sin experiencia previa, lo que te diferencia es cómo te presentas. Te ayudamos a identificar tus puntos fuertes y a comunicarlos con seguridad.",
              },
              {
                title: "CV y LinkedIn que te diferencian",
                desc: "Optimizamos tu perfil para que no seas uno más entre cientos de candidatos con el mismo título. Tu historia importa — hay que saber contarla.",
              },
              {
                title: "Entrenamiento real para entrevistas",
                desc: "Simulamos entrevistas reales, trabajamos tus respuestas y te preparamos para las preguntas difíciles. Para que llegues seguro, no improvisando.",
              },
              {
                title: "Buscamos activamente por ti",
                desc: "En el Pack Premium, contactamos empresas en tu nombre, presentamos tu perfil y gestionamos todo el proceso. Tú solo tienes que prepararte para brillar.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 bg-[#F0F4F8] rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#3BB54A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F2B4A] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Planes</span>
            <h2 className="text-4xl font-bold text-[#0F2B4A] mt-3">Elige cómo quieres empezar</h2>
            <p className="text-gray-500 mt-4">Todos incluyen sesión inicial gratuita de 15 min.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                nombre: "Pack Básico",
                precio: "29,90€",
                desc: "Para empezar con buen pie",
                bg: "bg-white",
                textP: "text-[#0F2B4A]",
                textS: "text-gray-500",
                btn: "bg-[#0F2B4A] text-white hover:bg-[#1a3d6b]",
                checkBg: "bg-[#3BB54A]",
                badge: null,
                items: [
                  "Vídeo: cómo hacer un CV que destaque",
                  "Cómo optimizar tu LinkedIn paso a paso",
                  "Plantilla de CV profesional descargable",
                ],
              },
              {
                nombre: "Pack Medio",
                precio: "99,90€",
                desc: "El más popular",
                bg: "bg-[#0F2B4A]",
                textP: "text-white",
                textS: "text-blue-200",
                btn: "bg-[#3BB54A] text-white hover:bg-[#2ea03c]",
                checkBg: "bg-[#3BB54A]",
                badge: "Más popular",
                items: [
                  "1 sesión de 60 min con orientadora",
                  "Cómo presentar tu experiencia de prácticas",
                  "LinkedIn en vivo durante la sesión",
                  "Informe personalizado con plan de acción",
                ],
              },
              {
                nombre: "Pack Premium",
                precio: "199€",
                desc: "Resultados garantizados",
                bg: "bg-[#3BB54A]",
                textP: "text-white",
                textS: "text-white/80",
                btn: "bg-white text-[#0F2B4A] hover:bg-gray-100",
                checkBg: "bg-white/30",
                badge: "Más completo",
                items: [
                  "3 sesiones de 60 min con orientadora",
                  "Simulación real de entrevistas",
                  "Búsqueda activa de empleo incluida",
                  "Soporte por WhatsApp y email",
                ],
              },
            ].map((pack, i) => (
              <div key={i} className={`${pack.bg} rounded-2xl p-8 shadow-sm flex flex-col relative`}>
                {pack.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#0F2B4A] text-xs font-bold px-4 py-1 rounded-full shadow">
                    {pack.badge}
                  </span>
                )}
                <p className={`text-xs font-semibold uppercase tracking-widest ${pack.textS} mb-2`}>{pack.desc}</p>
                <h3 className={`text-xl font-bold ${pack.textP} mb-1`}>{pack.nombre}</h3>
                <p className={`text-4xl font-bold ${pack.textP} mb-6`}>{pack.precio}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pack.items.map((item, j) => (
                    <li key={j} className={`flex items-start gap-3 text-sm ${pack.textS}`}>
                      <div className={`w-5 h-5 rounded-full ${pack.checkBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="mailto:hola@job2jump.es" className={`block text-center py-3.5 rounded-full font-semibold text-sm transition ${pack.btn}`}>
                  Quiero este pack
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-[#0F2B4A] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3BB54A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#3BB54A] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tu primer empleo está más cerca de lo que crees
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Empieza con una sesión gratuita de 15 minutos. Sin compromiso.
          </p>
          <a href="mailto:hola@job2jump.es" className="inline-block bg-[#3BB54A] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg">
            Quiero mi sesión gratuita
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
