import Image from "next/image";

export default function QuienesSomos() {
  return (
    <div className="min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <a href="/">
            <Image src="/logo.png" alt="Job2Jump" width={150} height={38} priority />
          </a>
          <div className="hidden md:flex items-center gap-8 text-[#000000] font-medium text-sm">
            <a href="/#quienes-somos" className="hover:text-[#3BB54A] transition">Quiénes somos</a>
            <a href="/#contacto" className="hover:text-[#3BB54A] transition">Contacto</a>
            <a href="/faq" className="hover:text-[#3BB54A] transition">Preguntas frecuentes</a>
          </div>
          <a href="mailto:hola@job2jump.es" className="bg-[#3BB54A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#2ea03c] transition">
            Sesión gratuita
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Quiénes somos
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Más de 10 años<br />
              <span className="text-[#3BB54A]">en selección de talento.</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Hemos trabajado en algunas de las empresas más exigentes del sector: Hays, thePower MBA, Ferrovial. Conocemos el mercado laboral por dentro. Y decidimos ponerlo al servicio de las pymes y de los jóvenes que merecen una oportunidad real.
            </p>
          </div>
        </div>
      </section>

      {/* CELIA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">El equipo</span>
              <h2 className="text-3xl font-bold text-[#000000] mt-3 mb-2">Celia Salgado Mena</h2>
              <p className="text-[#3BB54A] font-semibold mb-6">Fundadora y directora de talento</p>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Más de 10 años dedicada a la selección de personal y el headhunting. Ha trabajado en Hays —una de las consultoras de RRHH más grandes del mundo—, en thePower MBA y en Ferrovial, gestionando procesos de selección para equipos de todos los tamaños.
                </p>
                <p>
                  Esa experiencia le dio una visión muy clara del problema: por un lado, jóvenes con formación pero sin orientación. Por otro, pymes con necesidades reales pero sin tiempo ni recursos para cubrirlas bien.
                </p>
                <p>
                  Job2Jump es la respuesta a ese problema. Un servicio humano, especializado y accesible, que conecta a los dos lados del mercado con el rigor de una gran consultora y el trato de un equipo pequeño.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://instagram.com/job2jump" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#F0F4F8] text-[#000000] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#3BB54A] hover:text-white transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @job2jump
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "10+", label: "años en selección y headhunting" },
                { num: "Hays", label: "consultora global de RRHH" },
                { num: "thePower", label: "MBA de referencia en España" },
                { num: "Ferrovial", label: "empresa líder en infraestructuras" },
              ].map((item, i) => (
                <div key={i} className="bg-[#F0F4F8] rounded-2xl p-6 text-center">
                  <p className="text-2xl font-bold text-[#3BB54A] mb-2">{item.num}</p>
                  <p className="text-sm text-gray-500 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RRSS */}
      <section className="py-20 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Síguenos</span>
          <h2 className="text-3xl font-bold text-[#000000] mt-3 mb-4">Mucho contenido gratuito en redes</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-10">
            Consejos de CV, entrevistas, LinkedIn, orientación profesional y mucho más. Todo gratis, todo los días, en Instagram y TikTok.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://instagram.com/job2jump" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#000000] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#222222] transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram · @job2jump
            </a>
            <a href="https://tiktok.com/@job2jump" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-900 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
              </svg>
              TikTok · @job2jump
            </a>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Cómo trabajamos</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Lo que nos diferencia</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                titulo: "Personas, no CVs",
                desc: "No somos una base de datos. Nos reunimos con cada candidato y con cada empresa. Entendemos qué buscan de verdad antes de empezar.",
              },
              {
                titulo: "Calidad sobre cantidad",
                desc: "No enviamos 20 candidatos para que tú los filtres. Enviamos 3 o 4, bien seleccionados. Tu tiempo vale.",
              },
              {
                titulo: "Precio justo",
                desc: "3 a 5 veces más barato que una consultora tradicional, con el mismo nivel de servicio. Porque el tamaño de tu empresa no debería determinar el acceso a buen talento.",
              },
              {
                titulo: "Proceso transparente",
                desc: "Sabes en todo momento en qué punto está el proceso. Sin humo, sin promesas vacías, sin esperar semanas sin noticias.",
              },
              {
                titulo: "Experiencia real",
                desc: "Hemos trabajado en empresas líderes en selección. Conocemos los errores más comunes y sabemos cómo evitarlos.",
              },
              {
                titulo: "Garantía de resultado",
                desc: "Si la incorporación no funciona, buscamos un sustituto sin coste adicional. Nos importa que funcione, no solo que ocurra.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#3BB54A]/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#3BB54A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#000000] mb-2">{item.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#000000] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3BB54A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#3BB54A] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Hablamos?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Cuéntanos tu situación y vemos cómo podemos ayudarte.
          </p>
          <a href="mailto:hola@job2jump.es" className="inline-block bg-[#3BB54A] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg">
            Contactar
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
