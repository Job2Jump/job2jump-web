import Image from "next/image";

export default function CambioEmpleo() {
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
        <Image
          src="/cambio-hero.jpg"
          alt="Profesional buscando cambio de trabajo"
          fill
          className="object-cover blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-[#0F2B4A]/75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 w-full">
          <div className="max-w-5xl">
            <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Quiero cambiar de trabajo
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Cambiar de trabajo con experiencia<br />
              <span className="text-[#3BB54A]">es un arte.</span><br />
              Nosotros te enseñamos a hacerlo.
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Cambiar de trabajo con años de experiencia no es lo mismo que buscar el primero. Preparamos tu candidatura, actualizamos tu perfil y buscamos activamente en tu nombre — con total confidencialidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:hola@job2jump.es" className="inline-block bg-[#3BB54A] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#2ea03c] transition shadow-lg text-center">
                Quiero mi sesión gratuita
              </a>
              <a href="#planes" className="inline-block border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:border-white transition text-center">
                Ver planes
              </a>
            </div>
            <p className="text-white/40 text-sm mt-4">Sesión inicial de 15 minutos. Sin compromiso. Total confidencialidad.</p>
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
              "Llevas años en la misma empresa y sientes que has tocado techo.",
              "Quieres buscar algo nuevo pero no sabes cómo hacerlo sin que tu empresa actual se entere.",
              "No sabes cómo actualizar tu CV ni tu LinkedIn después de tantos años sin buscar.",
              "Sientes que el mercado ha cambiado mucho desde la última vez que buscaste trabajo.",
              "No tienes claro cuánto vale tu perfil ahora ni qué tipo de empresa encaja contigo.",
              "No quieres mandar CVs a ciegas. Quieres hacerlo bien, con estrategia.",
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

      {/* CONFIDENCIALIDAD */}
      <section className="py-20 bg-[#0F2B4A]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Garantía de confidencialidad</span>
          <h2 className="text-3xl font-bold text-white mt-3 mb-6">Tu empresa actual nunca se va a enterar</h2>
          <p className="text-white/70 leading-relaxed text-lg">
            No tocamos tu LinkedIn personal. Aplicamos en tu nombre de forma anónima. Las empresas destino firman un contrato de confidencialidad antes de conocer tu identidad — con penalización legal si contactan contigo fuera de Job2Jump.
          </p>
        </div>
      </section>

      {/* QUÉ HACEMOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Lo que hacemos por ti</span>
            <h2 className="text-4xl font-bold text-[#0F2B4A] mt-3">Tu cambio, con estrategia</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                titulo: "Analizamos tu perfil y tu mercado",
                desc: "Evaluamos tu experiencia, tus puntos fuertes y qué tipo de empresa y rol encaja con tu momento profesional actual. Sin adivinanzas.",
              },
              {
                titulo: "Actualizamos tu candidatura",
                desc: "Rediseñamos tu CV y, si lo decides, tu LinkedIn — con cuidado de no activar alertas en tu empresa actual. Tu historia tiene mucho valor, hay que saber contarla.",
              },
              {
                titulo: "Te preparamos para volver a entrevistar",
                desc: "Después de años en la misma empresa, las entrevistas dan respeto. Hacemos simulaciones reales y te preparamos para hablar de ti con seguridad y convicción.",
              },
              {
                titulo: "Buscamos activamente y en tu nombre",
                desc: "Contactamos empresas, presentamos tu perfil de forma anónima y gestionamos todo el proceso. Tú solo apareces cuando hay un interés real y firmado.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 bg-[#F0F4F8] rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#3BB54A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F2B4A] mb-2">{item.titulo}</h3>
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
            <h2 className="text-4xl font-bold text-[#0F2B4A] mt-3">Elige tu modalidad</h2>
            <p className="text-gray-500 mt-4">Sesión inicial gratuita de 15 min para analizar tu caso y ofrecerte un plan personalizado.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                nombre: "Solo preparación",
                precio: "Desde 80€/sesión",
                desc: "Tú aplicas, nosotros te preparamos",
                bg: "bg-white",
                textP: "text-[#0F2B4A]",
                textS: "text-gray-500",
                btn: "bg-[#0F2B4A] text-white hover:bg-[#1a3d6b]",
                checkBg: "bg-[#3BB54A]",
                items: [
                  "Sesiones individuales de 60 min con orientadora",
                  "Revisión y actualización de CV",
                  "Estrategia de búsqueda personalizada",
                  "Simulación de entrevistas",
                  "Plan de acción concreto",
                ],
              },
              {
                nombre: "Preparación + Búsqueda activa",
                precio: "Plan personalizado",
                desc: "Nosotros buscamos en tu nombre",
                bg: "bg-[#0F2B4A]",
                textP: "text-white",
                textS: "text-blue-200",
                btn: "bg-[#3BB54A] text-white hover:bg-[#2ea03c]",
                checkBg: "bg-[#3BB54A]",
                items: [
                  "Todo lo del plan Solo preparación",
                  "Búsqueda activa anónima en tu nombre",
                  "Contacto directo con empresas destino",
                  "Contrato de confidencialidad con empresas",
                  "Soporte continuo por WhatsApp y email",
                ],
              },
            ].map((pack, i) => (
              <div key={i} className={`${pack.bg} rounded-2xl p-8 shadow-sm flex flex-col`}>
                <p className={`text-xs font-semibold uppercase tracking-widest ${pack.textS} mb-2`}>{pack.desc}</p>
                <h3 className={`text-xl font-bold ${pack.textP} mb-1`}>{pack.nombre}</h3>
                <p className={`text-2xl font-bold ${pack.textP} mb-6`}>{pack.precio}</p>
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
                  Quiero este plan
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
            El cambio que llevas tiempo pensando
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Empieza con una sesión gratuita de 15 minutos. Analizamos tu caso y te decimos qué podemos hacer por ti.
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
