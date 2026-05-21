import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Quiénes somos | Job2Jump — Agencia de talento joven para pymes",
  description: "Job2Jump es una agencia especializada en conectar talento joven con pymes y startups. Más de 10 años de experiencia en selección. +300 jóvenes y empresas conectados.",
  keywords: "agencia empleo jóvenes, agencia selección pymes, headhunting junior, orientación laboral España, empleo jóvenes España, talento FP pymes",
};

export default function QuienesSomos() {
  return (
    <div className="min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 bg-[#000000] relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#000000]/82"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#7A9E3B]/20 text-[#7A9E3B] border border-[#7A9E3B]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Quiénes somos
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              El puente entre<br />
              <span className="text-[#7A9E3B]">el talento joven y las empresas</span><br />
              que lo necesitan.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Somos un equipo con más de 10 años de experiencia en selección de talento en consultoras internacionales de headhunting, grandes multinacionales y escuelas de negocio de referencia. Conocemos el mercado laboral por dentro — y decidimos ponerlo al servicio de las pymes y del talento joven que merece una oportunidad real.
            </p>

            {/* Datos destacados */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-[#7A9E3B] font-semibold uppercase tracking-widest mb-2">Para empresas</p>
                <p className="text-4xl font-bold text-white">+150</p>
                <p className="text-white/50 text-xs mt-1">pymes y startups que han incorporado talento con nosotros</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-[#7A9E3B] font-semibold uppercase tracking-widest mb-2">Para empresas</p>
                <p className="text-4xl font-bold text-white">100%</p>
                <p className="text-white/50 text-xs mt-1">a éxito — no pagas si no incorporas</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-[#7A9E3B] font-semibold uppercase tracking-widest mb-2">Para talento joven</p>
                <p className="text-4xl font-bold text-white">+300</p>
                <p className="text-white/50 text-xs mt-1">jóvenes orientados y colocados en su primer empleo o prácticas</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-[#7A9E3B] font-semibold uppercase tracking-widest mb-2">Para talento joven</p>
                <p className="text-4xl font-bold text-white">10+</p>
                <p className="text-white/50 text-xs mt-1">años de experiencia en selección de alto nivel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ NACIMOS */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-4xl mx-auto px-8">

          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Nuestro propósito</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3 mb-4">Por qué nacimos</h2>
            <p className="text-xl font-semibold text-[#000000] max-w-xl mx-auto leading-snug">
              Vimos que el sistema estaba roto para los dos lados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              {
                num: "01",
                titulo: "El problema del joven",
                desc: "Tiene formación pero nadie le enseña las reglas del mercado laboral: cómo presentarse, cómo destacar, qué decir en una entrevista.",
              },
              {
                num: "02",
                titulo: "El problema de la pyme y startup",
                desc: "Necesitan talento pero no tienen RRHH, no tienen tiempo y no pueden pagar 2.000€ a una consultora por cada incorporación.",
              },
              {
                num: "03",
                titulo: "Nuestra respuesta",
                desc: "Conectar ambos lados con el conocimiento de las grandes firmas de headhunting, adaptado a su escala y a su bolsillo.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100">
                <p className="text-3xl font-bold text-[#7A9E3B] mb-4">{item.num}</p>
                <h3 className="font-bold text-[#000000] text-base mb-2">{item.titulo}</h3>
                <p className="text-[#000000] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#000000] rounded-3xl px-10 py-12 text-center">
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-4">
              "Job2Jump nació para que ningún joven con talento se quede sin oportunidad y ninguna pyme se quede sin el perfil que necesita."
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              {["100% servicio humano", "Sin portales de empleo", "Sin algoritmos"].map((tag, i) => (
                <span key={i} className="text-[#7A9E3B] text-xs font-semibold uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">A quién ayudamos</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Dos lados del mismo mercado</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Para empresas */}
            <div className="bg-[#000000] rounded-2xl p-10">
              <span className="inline-block bg-[#7A9E3B]/20 text-[#7A9E3B] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">Para pymes y startups</span>
              <h3 className="text-2xl font-bold text-white mb-4">Tu departamento de talento externo</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Sabemos lo que cuesta un proceso de selección mal hecho: tiempo perdido, candidatos que no encajan, frustraciones. Las pymes no tienen un departamento de RRHH dedicado — nosotros lo somos. Gestionamos todo el proceso para que tú solo tengas que tomar la decisión final.
              </p>
              <ul className="space-y-3">
                {[
                  "Alumnos de FP en prácticas sin coste salarial",
                  "Perfiles junior para contrato directo",
                  "Proceso completo gestionado por nosotros",
                  "Garantía de sustitución incluida",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-5 h-5 rounded-full bg-[#7A9E3B] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/empresas" className="inline-block mt-8 bg-[#7A9E3B] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#2ea03c] transition">
                Soy empresa →
              </a>
            </div>

            {/* Para talento */}
            <div className="bg-[#F0F4F8] rounded-2xl p-10">
              <span className="inline-block bg-[#7A9E3B]/20 text-[#7A9E3B] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">Para talento joven</span>
              <h3 className="text-2xl font-bold text-[#000000] mb-4">Tu apoyo para el primer salto profesional</h3>
              <p className="text-[#000000] text-sm leading-relaxed mb-6">
                Mandar CVs a ciegas no funciona. El mercado laboral tiene reglas que nadie te enseña: cómo presentarte, cómo destacar en LinkedIn, qué decir en una entrevista. Nosotros te preparamos y, si quieres, buscamos activamente por ti.
              </p>
              <ul className="space-y-3">
                {[
                  "Busco prácticas en empresa",
                  "Busco mi primer empleo",
                  "CV y LinkedIn que abren puertas",
                  "Te buscamos las entrevistas tú decides",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#000000]">
                    <div className="w-5 h-5 rounded-full bg-[#7A9E3B] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/practicas" className="inline-block mt-8 bg-[#000000] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#222222] transition">
                Soy talento joven →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Nuestra experiencia</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Conocemos el mercado por dentro</h2>
            <p className="text-[#000000] mt-4 max-w-xl mx-auto">Venimos de las consultoras de headhunting más exigentes del mercado. Sabemos exactamente cómo funciona la selección de talento — y cómo hacerlo bien.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "10+", label: "años en selección y headhunting de alto nivel" },
              { num: "#1", label: "consultoras internacionales de RRHH donde hemos trabajado" },
              { num: "Top", label: "escuelas de negocio y multinacionales en nuestra trayectoria" },
              { num: "100%", label: "servicio humano, sin portales de empleo ni algoritmos" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                <p className="text-2xl font-bold text-[#7A9E3B] mb-2">{item.num}</p>
                <p className="text-sm text-[#000000] leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Cómo trabajamos</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Lo que nos diferencia</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                titulo: "Personas, no CVs",
                desc: "No somos una base de datos. Nos reunimos con cada candidato y con cada empresa para entender qué buscan de verdad antes de empezar.",
              },
              {
                titulo: "Calidad sobre cantidad",
                desc: "No enviamos 20 candidatos para que tú los filtres. Enviamos 3 o 4, bien seleccionados. Tu tiempo vale.",
              },
              {
                titulo: "Servicio humano",
                desc: "Trato directo, sin intermediarios, sin bots. Siempre hay una persona al otro lado que conoce tu caso y da la cara.",
              },
              {
                titulo: "Proceso transparente",
                desc: "Sabes en todo momento en qué punto está el proceso. Sin humo, sin promesas vacías, sin semanas sin noticias.",
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
              <div key={i} className="bg-[#F0F4F8] rounded-2xl p-8 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#7A9E3B]/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#7A9E3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#000000] mb-2">{item.titulo}</h3>
                <p className="text-[#000000] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#000000] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#7A9E3B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#7A9E3B] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¿Hablamos?</h2>
          <p className="text-white/80 text-lg mb-3">Cuéntanos tu situación y vemos cómo podemos ayudarte.</p>
          <p className="text-[#7A9E3B] font-semibold text-base mb-10">Trabajamos a éxito. No pagas hasta que te encontramos el perfil.</p>
          <a href="/sesion-gratuita" className="inline-block bg-[#7A9E3B] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg">
            Sesión gratuita
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}
