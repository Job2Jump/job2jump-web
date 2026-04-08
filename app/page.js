import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Image src="/logo.jpeg" alt="Job2Jump" width={150} height={38} priority />
          <div className="hidden md:flex items-center gap-8 text-[#0F2B4A] font-medium text-sm">
            <a href="/quienes-somos" className="hover:text-[#3BB54A] transition">Quiénes somos</a>
            <a href="/faq" className="hover:text-[#3BB54A] transition">Preguntas frecuentes</a>
            <a href="/empresas" className="hover:text-[#3BB54A] transition">Soy empresa</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="/empresas" className="hidden md:inline-block border border-[#0F2B4A] text-[#0F2B4A] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#0F2B4A] hover:text-white transition">
              Incorporar talento
            </a>
            <a href="/sesion-gratuita" className="bg-[#3BB54A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#2ea03c] transition">
              Sesión gratuita
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="min-h-screen flex items-center relative"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-[#0F2B4A]/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 w-full">
          {/* Titular */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Selección de talento para pymes · Orientación profesional para jóvenes
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              El talento que necesita<br />
              <span className="text-[#3BB54A]">tu empresa, existe.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
              Conectamos pymes con personas con ganas de crecer. Sin procesos interminables, sin consultoras caras, sin perder el tiempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/empresas" className="inline-flex items-center justify-center gap-2 bg-[#3BB54A] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#2ea03c] transition shadow-lg">
                Soy empresa y busco talento
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </a>
              <a href="/sesion-gratuita" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/20 transition">
                Busco empleo o prácticas
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          {/* 4 Tarjetas: 3 personas izquierda + empresa derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* Columna izquierda: 3 tarjetas personas */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* Card 1 — Busco prácticas */}
              <a href="/practicas" className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="w-11 h-11 bg-[#3BB54A] rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 21H3a12.083 12.083 0 012.84-10.422L12 14z"/></svg>
                </div>
                <p className="text-[#3BB54A] text-xs font-semibold uppercase tracking-widest mb-2">Estudiantes y recién graduados</p>
                <h2 className="text-lg font-bold text-white group-hover:text-[#0F2B4A] transition-colors mb-3 leading-snug">
                  Busco prácticas
                </h2>
                <p className="text-white/60 group-hover:text-gray-500 transition-colors text-sm leading-relaxed mb-5 flex-1">
                  Te preparamos para destacar frente a otros candidatos y buscamos activamente las prácticas que encajan con tu perfil.
                </p>
                <div className="flex items-center gap-2 text-[#3BB54A] text-sm font-semibold">
                  <span>Ver más</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </div>
              </a>

              {/* Card 2 — Busco empleo */}
              <a href="/empleo" className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="w-11 h-11 bg-[#3BB54A] rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <p className="text-[#3BB54A] text-xs font-semibold uppercase tracking-widest mb-2">Con formación, sin experiencia</p>
                <h2 className="text-lg font-bold text-white group-hover:text-[#0F2B4A] transition-colors mb-3 leading-snug">
                  Busco mi primer empleo
                </h2>
                <p className="text-white/60 group-hover:text-gray-500 transition-colors text-sm leading-relaxed mb-5 flex-1">
                  Te ayudamos a diferenciarte del resto, prepararte para entrevistas y conseguir el primer contrato que mereces.
                </p>
                <div className="flex items-center gap-2 text-[#3BB54A] text-sm font-semibold">
                  <span>Ver más</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </div>
              </a>

              {/* Card 3 — Quiero cambiar de trabajo */}
              <a href="/cambio" className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="w-11 h-11 bg-[#3BB54A] rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                </div>
                <p className="text-[#3BB54A] text-xs font-semibold uppercase tracking-widest mb-2">Confidencial y con estrategia</p>
                <h2 className="text-lg font-bold text-white group-hover:text-[#0F2B4A] transition-colors mb-3 leading-snug">
                  Quiero cambiar de trabajo
                </h2>
                <p className="text-white/60 group-hover:text-gray-500 transition-colors text-sm leading-relaxed mb-5 flex-1">
                  Llevamos años en tu empresa y quieres dar el salto. Te acompañamos con total confidencialidad y buscamos en tu nombre.
                </p>
                <div className="flex items-center gap-2 text-[#3BB54A] text-sm font-semibold">
                  <span>Ver más</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </div>
              </a>

            </div>

            {/* Columna derecha: Soy empresa (alto completo) */}
            <a href="/empresas" className="group bg-white/10 backdrop-blur-sm border-2 border-[#3BB54A]/40 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-[#3BB54A]/20 border border-[#3BB54A]/40 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#3BB54A] transition-colors">
                  <svg className="w-5 h-5 text-[#3BB54A] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <p className="text-[#3BB54A] text-xs font-semibold uppercase tracking-widest mb-2">Para pymes y empresas</p>
                <h2 className="text-2xl font-bold text-white group-hover:text-[#0F2B4A] transition-colors mb-3 leading-snug">
                  Soy empresa y busco talento
                </h2>
                <p className="text-white/60 group-hover:text-gray-500 transition-colors text-sm leading-relaxed mb-6">
                  Tu empresa crece con las personas correctas. Nosotros las encontramos, filtramos y te las presentamos. Tú solo decides.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Solo pagas si contratas",
                    "Mínimo 3 candidatos filtrados",
                    "Proceso en 2-4 semanas",
                    "Garantía de sustitución incluida",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 group-hover:text-gray-600 text-sm">
                      <span className="w-4 h-4 bg-[#3BB54A] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="inline-flex items-center justify-center gap-2 bg-[#3BB54A] text-white text-sm font-semibold px-6 py-3.5 rounded-full text-center group-hover:bg-[#0F2B4A] transition-colors">
                Quiero incorporar talento
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* FRANJA DE DATOS — impacto inmediato para empresas */}
      <section className="py-10 bg-[#0F2B4A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { valor: "80%", label: "de las pymes no encuentran el perfil que buscan", fuente: "ManpowerGroup" },
              { valor: "26h", label: "pierde de media una pyme en cada proceso de selección", fuente: "InfoJobs" },
              { valor: "7.400€", label: "cuesta reemplazar a un empleado que no funciona", fuente: "Ricoh / CEBR" },
              { valor: "350€", label: "nuestro success fee por becario. Solo si contratas.", fuente: "Job2Jump" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <p className="text-3xl font-bold text-[#3BB54A] mb-1">{item.valor}</p>
                <p className="text-white/70 text-xs leading-snug mb-1">{item.label}</p>
                <p className="text-white/30 text-xs">{item.fuente}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA EMPRESAS */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
              {[
                { titulo: "Sin tiempo para seleccionar", desc: "Un proceso de selección interno consume entre 20 y 30 horas. Horas que tu empresa no tiene." },
                { titulo: "Sin candidatos de calidad", desc: "Los portales de empleo generan volumen. Nosotros generamos calidad. Hay diferencia." },
                { titulo: "Sin papeleos ni trámites", desc: "Convenios de prácticas, contratos, documentación con centros formativos. Nosotros lo gestionamos todo. Tú solo firmas." },
                { titulo: "Con garantía de resultado", desc: "Si la incorporación no funciona, buscamos un sustituto sin coste adicional. Sin excusas." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100">
                  <div className="w-8 h-8 bg-[#0F2B4A]/5 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-[#0F2B4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-sm font-bold text-[#0F2B4A] mb-1">{item.titulo}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Para pymes</span>
              <h2 className="text-4xl font-bold text-[#0F2B4A] mt-3 mb-6 leading-tight">
                Tu empresa crece<br />con las personas correctas.
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Encontrar a la persona adecuada no es cuestión de suerte ni de publicar una oferta. Es un proceso que requiere tiempo, criterio y experiencia — y que la mayoría de pymes no puede permitirse hacer bien por su cuenta.
              </p>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Nosotros lo hacemos por ti. Tú te dedicas a tu negocio.
              </p>
              <a href="/empresas" className="inline-flex items-center gap-2 bg-[#0F2B4A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a3d6b] transition">
                Quiero incorporar talento
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARA JÓVENES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Para jóvenes</span>
              <h2 className="text-4xl font-bold text-[#0F2B4A] mt-3 mb-6 leading-tight">
                No es lo que sabes.<br />Es cómo lo presentas.
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Miles de jóvenes con tu misma formación están mandando CVs a ciegas y no reciben respuesta. La diferencia no es el título — es saber presentarte, prepararte y llegar a las empresas que realmente encajan contigo.
              </p>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Eso es exactamente lo que hacemos. Te preparamos para destacar y, si quieres, buscamos activamente por ti.
              </p>
              <a href="/practicas" className="inline-flex items-center gap-2 bg-[#3BB54A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2ea03c] transition">
                Quiero empezar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { titulo: "Orientación personalizada", desc: "Analizamos tu perfil y te decimos exactamente qué hacer y hacia dónde ir." },
                { titulo: "CV y LinkedIn que destacan", desc: "Los reclutadores tardan 6 segundos. Tu candidatura tiene que funcionar en ese tiempo." },
                { titulo: "Preparación para entrevistas", desc: "Simulaciones reales para que llegues con seguridad, no improvisando." },
                { titulo: "Búsqueda activa por ti", desc: "Contactamos empresas en tu nombre y gestionamos el proceso de principio a fin." },
              ].map((item, i) => (
                <div key={i} className="bg-[#F0F4F8] rounded-2xl p-5 border border-gray-100">
                  <div className="w-8 h-8 bg-[#3BB54A]/10 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-[#3BB54A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-sm font-bold text-[#0F2B4A] mb-1">{item.titulo}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">El proceso</span>
            <h2 className="text-4xl font-bold text-[#0F2B4A] mt-3">Así de sencillo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              { num: "01", title: "Nos cuentas qué necesitas", desc: "Sesión inicial gratuita de 10-15 min para entender tu situación y objetivos." },
              { num: "02", title: "Trabajamos por ti", desc: "Preparamos tu perfil, buscamos activamente y filtramos para encontrar el mejor match." },
              { num: "03", title: "Das el salto", desc: "Te presentamos las mejores opciones y te acompañamos hasta que esté todo cerrado." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-[#F0F4F8] rounded-2xl p-10">
                <span className="text-6xl font-bold text-[#3BB54A]/20 mb-4 leading-none">{step.num}</span>
                <h3 className="text-lg font-bold text-[#0F2B4A] mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¿Cuál es tu próximo paso?</h2>
          <p className="text-blue-200 text-lg mb-10">Primera sesión gratuita de 15 min. Sin compromiso. Solo tú y nosotros.</p>
          <a href="mailto:hola@job2jump.es" className="inline-block bg-[#3BB54A] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg shadow-green-900/30">
            Cuéntanos tu situación
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
