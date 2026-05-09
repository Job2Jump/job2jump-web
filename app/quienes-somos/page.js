import Image from "next/image";
import Navbar from "../components/Navbar";

export default function QuienesSomos() {
  return (
    <div className="min-h-screen font-sans">

      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Quiénes somos
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              El puente entre<br />
              <span className="text-[#3BB54A]">el talento joven y las empresas</span><br />
              que lo necesitan.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Somos un equipo con más de 10 años de experiencia en selección de talento en consultoras internacionales de headhunting, grandes multinacionales y escuelas de negocio de referencia. Conocemos el mercado laboral por dentro — y decidimos ponerlo al servicio de las pymes y del talento joven que merece una oportunidad real.
            </p>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">A quién ayudamos</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Dos lados del mismo mercado</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Para empresas */}
            <div className="bg-[#000000] rounded-2xl p-10">
              <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">Para pymes y startups</span>
              <h3 className="text-2xl font-bold text-white mb-4">Tu departamento de talento externo</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Sabemos lo que cuesta un proceso de selección mal hecho: tiempo perdido, candidatos que no encajan, frustraciones. Las pymes no tienen un departamento de RRHH dedicado — nosotros lo somos. Gestionamos todo el proceso para que tú solo tengas que tomar la decisión final.
              </p>
              <ul className="space-y-3">
                {[
                  "Alumnos de FP en prácticas sin coste salarial",
                  "Perfiles junior para contrato directo",
                  "Proceso completo gestionado por nosotros",
                  "Garantía de sustitución incluida",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-[#3BB54A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/empresas" className="inline-block mt-8 bg-[#3BB54A] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#2ea03c] transition">
                Soy empresa →
              </a>
            </div>

            {/* Para talento */}
            <div className="bg-[#F0F4F8] rounded-2xl p-10">
              <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">Para talento joven</span>
              <h3 className="text-2xl font-bold text-[#000000] mb-4">Tu apoyo para el primer salto profesional</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Mandar CVs a ciegas no funciona. El mercado laboral tiene reglas que nadie te enseña: cómo presentarte, cómo destacar en LinkedIn, qué decir en una entrevista. Nosotros te preparamos y, si quieres, buscamos activamente por ti.
              </p>
              <ul className="space-y-3">
                {[
                  "Busco prácticas en empresa",
                  "Busco mi primer empleo",
                  "CV y LinkedIn que abren puertas",
                  "Te buscamos las entrevistas tú decides",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#3BB54A] flex items-center justify-center flex-shrink-0">
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
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Nuestra experiencia</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Conocemos el mercado por dentro</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Venimos de las consultoras de headhunting más exigentes del mercado. Sabemos exactamente cómo funciona la selección de talento — y cómo hacerlo bien.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "10+", label: "años en selección y headhunting de alto nivel" },
              { num: "#1", label: "consultoras internacionales de RRHH donde hemos trabajado" },
              { num: "Top", label: "escuelas de negocio y multinacionales en nuestra trayectoria" },
              { num: "100%", label: "servicio humano, sin bots ni automatismos" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                <p className="text-2xl font-bold text-[#3BB54A] mb-2">{item.num}</p>
                <p className="text-sm text-gray-500 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Cómo trabajamos</span>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¿Hablamos?</h2>
          <p className="text-gray-300 text-lg mb-3">Cuéntanos tu situación y vemos cómo podemos ayudarte.</p>
          <p className="text-[#3BB54A] font-semibold text-base mb-10">Trabajamos a éxito. No pagas hasta que te encontramos el perfil.</p>
          <a href="/sesion-gratuita" className="inline-block bg-[#3BB54A] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg">
            Sesión gratuita
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
