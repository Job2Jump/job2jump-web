import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Image src="/logo.jpeg" alt="Job2Jump" width={150} height={38} priority />
          <div className="hidden md:flex items-center gap-8 text-[#0F2B4A] font-medium text-sm">
            <a href="#quienes-somos" className="hover:text-[#3BB54A] transition">Quiénes somos</a>
            <a href="#contacto" className="hover:text-[#3BB54A] transition">Contacto</a>
            <a href="#faq" className="hover:text-[#3BB54A] transition">Preguntas frecuentes</a>
            <a href="#precios" className="hover:text-[#3BB54A] transition">Planes</a>
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
              Orientación y búsqueda de empleo personalizada
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Encuentra la empresa que está<br />
              <span className="text-[#3BB54A]">buscando a alguien como tú</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Te preparamos, potenciamos tu perfil y te conectamos con las empresas que encajan con tu talento y tu potencial.
            </p>
          </div>

          {/* 4 Tarjetas: 3 personas izquierda + empresa derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* Columna izquierda: 3 tarjetas personas */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* Card 1 — Busco prácticas */}
              <a href="/practicas" className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#3BB54A] rounded-xl flex items-center justify-center mb-5">
                  <span className="text-2xl">🎓</span>
                </div>
                <h2 className="text-lg font-bold text-white group-hover:text-[#0F2B4A] transition-colors mb-2">
                  Busco prácticas
                </h2>
                <p className="text-white/60 group-hover:text-gray-500 transition-colors text-sm leading-relaxed mb-4">
                  Da tu primer paso profesional con las prácticas que encajan contigo.
                </p>
                <span className="text-[#3BB54A] text-sm font-semibold">Ver más →</span>
              </a>

              {/* Card 2 — Busco empleo */}
              <a href="/empleo" className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#3BB54A] rounded-xl flex items-center justify-center mb-5">
                  <span className="text-2xl">🚀</span>
                </div>
                <h2 className="text-lg font-bold text-white group-hover:text-[#0F2B4A] transition-colors mb-2">
                  Busco mi primer empleo
                </h2>
                <p className="text-white/60 group-hover:text-gray-500 transition-colors text-sm leading-relaxed mb-4">
                  Prepárate y consigue tu primer empleo con orientación y búsqueda activa.
                </p>
                <span className="text-[#3BB54A] text-sm font-semibold">Ver más →</span>
              </a>

              {/* Card 3 — Quiero cambiar de trabajo */}
              <a href="/cambio" className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#3BB54A] rounded-xl flex items-center justify-center mb-5">
                  <span className="text-2xl">💼</span>
                </div>
                <h2 className="text-lg font-bold text-white group-hover:text-[#0F2B4A] transition-colors mb-2">
                  Quiero cambiar de trabajo
                </h2>
                <p className="text-white/60 group-hover:text-gray-500 transition-colors text-sm leading-relaxed mb-4">
                  Años en tu empresa y quieres un cambio. Total confidencialidad garantizada.
                </p>
                <span className="text-[#3BB54A] text-sm font-semibold">Ver más →</span>
              </a>

            </div>

            {/* Columna derecha: Soy empresa (alto completo) */}
            <a href="/empresas" className="group bg-white/10 backdrop-blur-sm border-2 border-[#3BB54A]/50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="w-14 h-14 bg-[#0F2B4A] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3BB54A] transition-colors">
                  <span className="text-3xl">🏢</span>
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-[#0F2B4A] transition-colors mb-3">
                  Soy empresa
                </h2>
                <p className="text-white/60 group-hover:text-gray-500 transition-colors text-sm leading-relaxed mb-6">
                  Encuentra talento junior filtrado y listo para incorporarse. Sin perder tiempo, con garantía de sustitución.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Ahorra 20-30h por proceso", "Candidatos filtrados de verdad", "Desde 350€ por colocación"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 group-hover:text-gray-500 text-sm">
                      <span className="text-[#3BB54A] font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="inline-block bg-[#3BB54A] text-white text-sm font-semibold px-6 py-3 rounded-full text-center group-hover:bg-[#0F2B4A] transition-colors">
                Quiero incorporar talento →
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* PARA EMPRESAS */}
      <section id="empresas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Para empresas</span>
              <h2 className="text-4xl font-bold text-[#0F2B4A] mt-3 mb-6 leading-tight">
                Tu departamento de<br />talento joven externo
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Las pymes no tienen tiempo ni recursos para buscar talento junior. Nosotros lo hacemos por ti — publicamos, filtramos y hacemos las primeras entrevistas. Tú solo eliges.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Ahorra 20-30h por proceso de selección",
                  "3-4 candidatos filtrados y preparados",
                  "Desde 350€ — 3x más barato que consultoras",
                  "Garantía de sustitución incluida",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <span className="w-5 h-5 bg-[#3BB54A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/empresas" className="inline-block bg-[#0F2B4A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a3d6b] transition">
                Quiero incorporar talento
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "350€", label: "por colocación de becario", color: "bg-[#0F2B4A] text-white" },
                { num: "2-4 sem.", label: "duración media del proceso", color: "bg-[#3BB54A] text-white" },
                { num: "3-4", label: "candidatos presentados por proceso", color: "bg-[#F0F4F8] text-[#0F2B4A]" },
                { num: "100%", label: "garantía de sustitución", color: "bg-[#F0F4F8] text-[#0F2B4A]" },
              ].map((stat, i) => (
                <div key={i} className={`${stat.color} rounded-2xl p-6 flex flex-col justify-center`}>
                  <p className="text-3xl font-bold mb-1">{stat.num}</p>
                  <p className="text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARA JÓVENES */}
      <section id="jovenes" className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Para jóvenes</span>
            <h2 className="text-4xl font-bold text-[#0F2B4A] mt-3">Tu primer empleo, con ayuda real</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Te preparamos, optimizamos tu perfil y buscamos activamente por ti. Sin humo, sin cursos genéricos.</p>
          </div>

          <div id="precios" className="grid md:grid-cols-3 gap-6">
            {[
              {
                nombre: "Pack Básico",
                precio: "29,90€",
                desc: "Para empezar con buen pie",
                bg: "bg-white",
                textP: "text-[#0F2B4A]",
                textS: "text-gray-500",
                btn: "bg-[#0F2B4A] text-white hover:bg-[#1a3d6b]",
                check: "text-[#3BB54A]",
                badge: null,
                items: ["Vídeo: cómo hacer un buen CV", "Cómo optimizar tu LinkedIn", "Plantilla de CV profesional descargable"],
              },
              {
                nombre: "Pack Medio",
                precio: "99,90€",
                desc: "El más popular",
                bg: "bg-[#0F2B4A]",
                textP: "text-white",
                textS: "text-blue-200",
                btn: "bg-[#3BB54A] text-white hover:bg-[#2ea03c]",
                check: "text-[#3BB54A]",
                badge: "Más popular",
                items: ["1 sesión de 60 min con orientadora", "Autoconocimiento y salidas profesionales", "LinkedIn en vivo durante la sesión", "Informe personalizado con plan de acción"],
              },
              {
                nombre: "Pack Premium",
                precio: "199€",
                desc: "Resultados garantizados",
                bg: "bg-[#3BB54A]",
                textP: "text-white",
                textS: "text-white/80",
                btn: "bg-white text-[#0F2B4A] hover:bg-gray-100",
                check: "text-white",
                badge: "Más completo",
                items: ["3 sesiones de 60 min con orientadora", "Rol play de entrevistas reales", "Búsqueda activa de empleo incluida", "Soporte por WhatsApp y email"],
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
                    <li key={j} className={`flex items-start gap-2 text-sm ${pack.textS}`}>
                      <span className={`mt-0.5 font-bold text-lg leading-none ${pack.check}`}>✓</span>
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
