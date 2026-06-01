import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">

      <Navbar />

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
        <div className="absolute inset-0 bg-[#000000]/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-8 md:py-32 w-full">
          {/* Titular */}
          <div className="text-center mb-6 md:mb-16">
            <span className="hidden md:inline-block bg-[#7A9E3B]/20 text-[#7A9E3B] border border-[#7A9E3B]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Para talento junior · Para pymes y startups
            </span>
            <h1 className="text-3xl md:text-7xl font-bold text-white mb-3 md:mb-6 leading-tight">
              Conectamos talento<br />
              <span className="text-[#7A9E3B]">con las empresas que lo necesitan.</span>
            </h1>
            <p className="text-sm md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-0 md:mb-10 hidden md:block">
              Si buscas <strong className="text-white">prácticas o tu primer empleo</strong>, te preparamos y buscamos por ti. Si eres empresa, te traemos el perfil adecuado <strong className="text-white">sin coste salarial ni papeleo</strong>.
            </p>
          </div>

          {/* 2 Tarjetas — joven primero, empresa segundo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto w-full">

            {/* Card empresa */}
            <a href="/empresas" className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-6 md:p-10 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 group-hover:bg-[#7A9E3B] rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-colors">
                <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <p className="text-white/50 group-hover:text-[#7A9E3B] text-xs font-semibold uppercase tracking-widest mb-2 md:mb-3 transition-colors">Para pymes y empresas</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#000000] mb-2 md:mb-4 leading-tight transition-colors">
                Busco talento<br />para mi empresa
              </h2>
              <p className="text-white/60 group-hover:text-[#000000] text-sm leading-relaxed mb-4 md:mb-6 flex-1 transition-colors">
                Becario en prácticas sin coste salarial, o selección de junior/senior para incorporar desde el día 1. Tú eliges.
              </p>
              <div className="flex flex-col gap-2 mb-4 md:mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-white/10 group-hover:bg-[#000000]/5 text-white group-hover:text-[#000000] px-2 py-1 rounded-full transition-colors">🎓 Busco becario/a</span>
                  <span className="text-xs bg-white/10 group-hover:bg-[#000000]/5 text-white group-hover:text-[#000000] px-2 py-1 rounded-full transition-colors">💼 Busco junior/senior</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-white group-hover:text-[#000000] font-semibold text-sm md:text-base transition-colors">
                Ver opciones para empresas
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </span>
            </a>

            {/* Card joven */}
            <a href="/jovenes" className="group bg-[#7A9E3B]/10 backdrop-blur-sm border-2 border-[#7A9E3B]/50 rounded-3xl p-6 md:p-10 hover:bg-[#7A9E3B] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-[#7A9E3B] group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-colors">
                <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </div>
              <p className="text-[#7A9E3B] group-hover:text-white/70 text-xs font-semibold uppercase tracking-widest mb-2 md:mb-3 transition-colors">Para jóvenes y profesionales</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 leading-tight">
                Busco prácticas<br />o primer empleo
              </h2>
              <p className="text-white/60 group-hover:text-white/80 text-sm leading-relaxed mb-4 md:mb-8 flex-1 transition-colors">
                Te orientamos, preparamos tu candidatura y buscamos activamente por ti. Tú céntrate en crecer.
              </p>
              <span className="inline-flex items-center gap-2 text-white font-semibold text-sm md:text-base">
                Ver mis opciones
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* FRANJA DE DATOS — enfocada al joven */}
      <section className="py-10 bg-[#000000] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { valor: "0€", label: "coste salarial para pymes que acogen alumnos de FP en prácticas", fuente: "Job2Jump" },
              { valor: "1 de 3", label: "alumnos en prácticas acaba contratado por la misma empresa", fuente: "Job2Jump" },
              { valor: "80%", label: "de pymes tiene dificultades para cubrir vacantes con perfiles adecuados", fuente: "ManpowerGroup 2024" },
              { valor: "75€", label: "sesión personalizada de orientación, CV y LinkedIn", fuente: "Job2Jump" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <p className="text-3xl font-bold text-[#7A9E3B] mb-1">{item.valor}</p>
                <p className="text-white/70 text-xs leading-snug mb-1">{item.label}</p>
                <p className="text-white/30 text-xs">{item.fuente}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA EMPRESAS */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Para pymes y startups</span>
          <h2 className="text-4xl font-bold text-[#000000] mt-3 mb-6 leading-tight">
            El talento que tu empresa necesita.<br />Sin riesgo. Sin papeleo.
          </h2>
          <p className="text-[#000000] mb-8 leading-relaxed">
            Tanto si buscas un <strong>becario de FP en prácticas</strong>, como si necesitas un <strong>perfil junior o senior</strong> para incorporar desde el día 1 — nosotros gestionamos todo el proceso. Tú solo decides.
          </p>
          <p className="text-[#000000] mb-10 leading-relaxed">
            Trabajamos a éxito. <strong>Solo pagas si incorporas.</strong> Sin exclusividad. <strong>Sin riesgo.</strong>
          </p>
          <a href="/empresas" className="inline-flex items-center gap-2 bg-[#000000] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#222222] transition">
            Ver cómo funciona para empresas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* PARA TALENTO */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Para talento joven</span>
          <h2 className="text-4xl font-bold text-[#000000] mt-3 mb-6 leading-tight">
            Tu primer empleo o prácticas.<br />Te lo buscamos nosotros.
          </h2>
          <p className="text-[#000000] mb-10 leading-relaxed">
            Te preparamos, trabajamos tu <strong>CV y LinkedIn</strong>, y presentamos tu perfil a nuestra base de datos de <strong>más de 10.000 empresas</strong>. Tú solo tienes que prepararte para <strong>la entrevista</strong>.
          </p>
          <a href="/practicas" className="inline-flex items-center gap-2 bg-[#7A9E3B] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2ea03c] transition">
            Ver cómo te ayudamos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-[#000000] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#7A9E3B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#7A9E3B] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¿Listo para dar el salto?</h2>
          <p className="text-white/80 text-lg mb-10">Primera sesión gratuita de 15 min. Sin compromiso. Solo tú y nosotros.</p>
          <a href="/sesion-gratuita" className="inline-block bg-[#7A9E3B] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg shadow-green-900/30">
            Reservar sesión gratuita
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}
