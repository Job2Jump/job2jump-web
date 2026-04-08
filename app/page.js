import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Image src="/logo.png" alt="Job2Jump" width={150} height={38} priority />
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-8 md:py-32 w-full">
          {/* Titular */}
          <div className="text-center mb-6 md:mb-16">
            <span className="hidden md:inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Selección de talento para pymes · Orientación profesional para jóvenes
            </span>
            <h1 className="text-3xl md:text-7xl font-bold text-white mb-3 md:mb-6 leading-tight">
              El talento que necesita<br />
              <span className="text-[#3BB54A]">tu empresa, existe.</span>
            </h1>
            <p className="text-sm md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-0 md:mb-10 hidden md:block">
              Conectamos pymes con personas con ganas de crecer. Sin procesos interminables, sin consultoras caras, sin perder el tiempo.
            </p>
          </div>

          {/* 2 Tarjetas grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto w-full">

            {/* Card empresa */}
            <a href="/empresas" className="group bg-[#3BB54A]/10 backdrop-blur-sm border-2 border-[#3BB54A]/50 rounded-3xl p-6 md:p-10 hover:bg-[#3BB54A] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-[#3BB54A] group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-colors">
                <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <p className="text-[#3BB54A] group-hover:text-white/70 text-xs font-semibold uppercase tracking-widest mb-2 md:mb-3 transition-colors">Para pymes y empresas</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 leading-tight">
                Quiero contratar<br />a alguien
              </h2>
              <p className="text-white/60 group-hover:text-white/80 text-sm leading-relaxed mb-4 md:mb-8 flex-1 transition-colors">
                Buscamos, filtramos y te presentamos a las personas adecuadas. Tú solo decides a quién contratas.
              </p>
              <span className="inline-flex items-center gap-2 text-white font-semibold text-sm md:text-base">
                Ver cómo funciona
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </span>
            </a>

            {/* Card joven */}
            <a href="/jovenes" className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-6 md:p-10 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 group-hover:bg-[#3BB54A] rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-colors">
                <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </div>
              <p className="text-white/50 group-hover:text-[#3BB54A] text-xs font-semibold uppercase tracking-widest mb-2 md:mb-3 transition-colors">Para jóvenes y profesionales</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#0F2B4A] mb-2 md:mb-4 leading-tight transition-colors">
                Busco empleo<br />o prácticas
              </h2>
              <p className="text-white/60 group-hover:text-gray-500 text-sm leading-relaxed mb-4 md:mb-8 flex-1 transition-colors">
                Te preparamos para destacar y buscamos activamente las oportunidades que encajan con tu perfil.
              </p>
              <span className="inline-flex items-center gap-2 text-white group-hover:text-[#0F2B4A] font-semibold text-sm md:text-base transition-colors">
                Ver mis opciones
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
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
          <Image src="/logo.png" alt="Job2Jump" width={130} height={33} />
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
