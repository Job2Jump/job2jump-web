import Image from "next/image";

export default function Jovenes() {
  return (
    <div className="min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <a href="/">
            <Image src="/logo.png" alt="Job2Jump" width={150} height={38} priority />
          </a>
          <div className="hidden md:flex items-center gap-8 text-[#000000] font-medium text-sm">
            <a href="/quienes-somos" className="hover:text-[#3BB54A] transition">Quiénes somos</a>
            <a href="/faq" className="hover:text-[#3BB54A] transition">Preguntas frecuentes</a>
            <a href="/empresas" className="hover:text-[#3BB54A] transition">Soy empresa</a>
          </div>
          <a href="/sesion-gratuita" className="bg-[#3BB54A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#2ea03c] transition">
            Sesión gratuita
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center relative"
        style={{ backgroundImage: "url('/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#000000]/80"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-8 py-32 w-full">

          <div className="text-center mb-16">
            <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Para jóvenes y profesionales
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              ¿Cuál es tu<br />
              <span className="text-[#3BB54A]">próximo paso?</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
              Dinos en qué punto estás y te ayudamos a dar el salto que necesitas.
            </p>
          </div>

          {/* 3 tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Prácticas */}
            <a href="/practicas" className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="w-12 h-12 bg-[#3BB54A] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 21H3a12.083 12.083 0 012.84-10.422L12 14z"/>
                </svg>
              </div>
              <p className="text-[#3BB54A] text-xs font-semibold uppercase tracking-widest mb-2">Estudiantes y recién graduados</p>
              <h2 className="text-2xl font-bold text-white group-hover:text-[#000000] transition-colors mb-3 leading-snug">
                Busco prácticas
              </h2>
              <p className="text-white/60 group-hover:text-gray-500 transition-colors text-sm leading-relaxed mb-6 flex-1">
                Estás estudiando o acabas de terminar y quieres conseguir unas prácticas en una empresa que realmente merezca la pena. Te preparamos y buscamos activamente por ti.
              </p>
              <span className="inline-flex items-center gap-2 text-[#3BB54A] font-semibold text-sm">
                Ver más
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </span>
            </a>

            {/* Primer empleo */}
            <a href="/empleo" className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="w-12 h-12 bg-[#3BB54A] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <p className="text-[#3BB54A] text-xs font-semibold uppercase tracking-widest mb-2">Con formación, sin experiencia</p>
              <h2 className="text-2xl font-bold text-white group-hover:text-[#000000] transition-colors mb-3 leading-snug">
                Busco mi primer empleo
              </h2>
              <p className="text-white/60 group-hover:text-gray-500 transition-colors text-sm leading-relaxed mb-6 flex-1">
                Ya tienes la formación pero el mercado laboral es una jungla. Te ayudamos a diferenciarte, prepararte para entrevistas y conseguir el primer contrato que mereces.
              </p>
              <span className="inline-flex items-center gap-2 text-[#3BB54A] font-semibold text-sm">
                Ver más
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </span>
            </a>

            {/* Cambio de trabajo */}
            <a href="/cambio" className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="w-12 h-12 bg-[#3BB54A] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                </svg>
              </div>
              <p className="text-[#3BB54A] text-xs font-semibold uppercase tracking-widest mb-2">Confidencial y con estrategia</p>
              <h2 className="text-2xl font-bold text-white group-hover:text-[#000000] transition-colors mb-3 leading-snug">
                Quiero cambiar de trabajo
              </h2>
              <p className="text-white/60 group-hover:text-gray-500 transition-colors text-sm leading-relaxed mb-6 flex-1">
                Llevas tiempo en tu empresa y quieres dar el salto. Te acompañamos con total confidencialidad — buscamos en tu nombre sin que nadie se entere.
              </p>
              <span className="inline-flex items-center gap-2 text-[#3BB54A] font-semibold text-sm">
                Ver más
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] text-white py-12">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <Image src="/logo.png" alt="Job2Jump" width={130} height={33} />
          <p className="text-gray-400 text-sm">© 2026 Job2Jump. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="mailto:hola@job2jump.es" className="hover:text-white transition">hola@job2jump.es</a>
            <a href="https://instagram.com/job2jump" className="hover:text-white transition">Instagram</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
