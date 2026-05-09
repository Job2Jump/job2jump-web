import Image from "next/image";
import Navbar from "./components/Navbar";

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
            <span className="hidden md:inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Para talento junior · Para pymes y startups
            </span>
            <h1 className="text-3xl md:text-7xl font-bold text-white mb-3 md:mb-6 leading-tight">
              Conectamos talento joven<br />
              <span className="text-[#3BB54A]">con empresas que lo necesitan.</span>
            </h1>
            <p className="text-sm md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-0 md:mb-10 hidden md:block">
              Si buscas prácticas o tu primer empleo, te preparamos y buscamos por ti. Si eres empresa, te traemos el perfil adecuado sin coste salarial ni papeleo.
            </p>
          </div>

          {/* 2 Tarjetas — joven primero, empresa segundo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto w-full">

            {/* Card joven */}
            <a href="/jovenes" className="group bg-[#3BB54A]/10 backdrop-blur-sm border-2 border-[#3BB54A]/50 rounded-3xl p-6 md:p-10 hover:bg-[#3BB54A] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-[#3BB54A] group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-colors">
                <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </div>
              <p className="text-[#3BB54A] group-hover:text-white/70 text-xs font-semibold uppercase tracking-widest mb-2 md:mb-3 transition-colors">Para jóvenes y profesionales</p>
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

            {/* Card empresa */}
            <a href="/empresas" className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-6 md:p-10 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 group-hover:bg-[#3BB54A] rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-colors">
                <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <p className="text-white/50 group-hover:text-[#3BB54A] text-xs font-semibold uppercase tracking-widest mb-2 md:mb-3 transition-colors">Para pymes y empresas</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#000000] mb-2 md:mb-4 leading-tight transition-colors">
                Quiero contratar<br />talento joven
              </h2>
              <p className="text-white/60 group-hover:text-gray-500 text-sm leading-relaxed mb-4 md:mb-8 flex-1 transition-colors">
                Buscamos, filtramos y te presentamos a las personas adecuadas.
              </p>
              <span className="inline-flex items-center gap-2 text-white group-hover:text-[#000000] font-semibold text-sm md:text-base transition-colors">
                Ver cómo funciona
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
              { valor: "99€", label: "sesión personalizada de orientación, CV y LinkedIn en vivo", fuente: "Job2Jump" },
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

      {/* PARA EMPRESAS — primera sección de contenido */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
              {[
                { titulo: "Sin coste salarial", desc: "Alumnos de FP en prácticas sin salario ni contrato. Tú solo firmas el convenio — nosotros lo tramitamos todo." },
                { titulo: "Sin papeleos ni trámites", desc: "Convenios, alta en la Seguridad Social, documentación con el instituto. Lo gestionamos nosotros de principio a fin." },
                { titulo: "Perfiles listos para trabajar", desc: "Informática, marketing, administración, comercial... Formados en lo que tu empresa necesita." },
                { titulo: "Con garantía de sustitución", desc: "Si el alumno no encaja, buscamos otro sin coste adicional. Sin excusas." },
              ].map((item, i) => (
                <div key={i} className="bg-[#F0F4F8] rounded-2xl p-5 border border-gray-100">
                  <div className="w-8 h-8 bg-[#000000]/5 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-sm font-bold text-[#000000] mb-1">{item.titulo}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Para pymes y startups</span>
              <h2 className="text-4xl font-bold text-[#000000] mt-3 mb-6 leading-tight">
                Talento joven en tu empresa.<br />Sin salario. Sin papeleo.
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Conectamos tu empresa con alumnos de FP que necesitan hacer prácticas. Sin coste salarial para ti — nosotros gestionamos todo el proceso. Tú solo recibes el perfil y decides.
              </p>
              <p className="text-gray-500 mb-10 leading-relaxed">
                100€ para arrancar + 250€ al incorporar al alumno. Solo pagas si hay resultado.
              </p>
              <a href="/empresas" className="inline-flex items-center gap-2 bg-[#000000] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#222222] transition">
                Ver cómo funciona para empresas
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARA TALENTO JUNIOR */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Para talento junior</span>
              <h2 className="text-4xl font-bold text-[#000000] mt-3 mb-6 leading-tight">
                Tu primer empleo o prácticas.<br />Te lo buscamos nosotros.
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Te preparamos, trabajamos tu CV y LinkedIn, y presentamos tu perfil a nuestra base de datos de más de 10.000 empresas. Tú solo tienes que prepararte para la entrevista.
              </p>
              <a href="/practicas" className="inline-flex items-center gap-2 bg-[#3BB54A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2ea03c] transition">
                Ver cómo te ayudamos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { titulo: "CV y LinkedIn optimizados", desc: "Los reclutadores tardan 6 segundos. Tu candidatura tiene que funcionar en ese tiempo." },
                { titulo: "Preparación de entrevistas", desc: "Role plays reales para que llegues con seguridad, no improvisando." },
                { titulo: "Acceso a +10.000 empresas", desc: "Presentamos tu perfil directamente. Sin que tengas que buscar tú." },
                { titulo: "Acompañamiento completo", desc: "Te guiamos en cada paso hasta cerrar tu siguiente oportunidad." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100">
                  <div className="w-8 h-8 bg-[#3BB54A]/10 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-[#3BB54A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-sm font-bold text-[#000000] mb-1">{item.titulo}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-[#000000] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3BB54A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#3BB54A] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¿Listo para dar el salto?</h2>
          <p className="text-gray-300 text-lg mb-10">Primera sesión gratuita de 15 min. Sin compromiso. Solo tú y nosotros.</p>
          <a href="/sesion-gratuita" className="inline-block bg-[#3BB54A] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg shadow-green-900/30">
            Reservar sesión gratuita
          </a>
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
