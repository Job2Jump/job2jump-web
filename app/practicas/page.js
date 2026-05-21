import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Busco prácticas o primer empleo | Orientación laboral para jóvenes | Job2Jump",
  description: "Te ayudamos a conseguir prácticas en empresa o tu primer empleo. CV, LinkedIn, entrevistas y búsqueda activa. Orientación laboral personalizada para jóvenes y recién titulados.",
  keywords: "buscar prácticas empresa, cómo conseguir prácticas, primer empleo joven, orientación laboral jóvenes, prácticas remuneradas, CV para prácticas, LinkedIn jóvenes, entrevista de trabajo joven, recién titulado trabajo, FP prácticas cómo conseguir",
};

export default function Practicas() {
  return (
    <div className="min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex items-center relative">
        {/* Foto de fondo */}
        <Image
          src="/practicas-hero.jpg"
          alt="Joven en entrevista de prácticas"
          fill
          className="object-cover blur-[2px]"
          priority
        />
        {/* Overlay oscuro azul */}
        <div className="absolute inset-0 bg-[#000000]/75"></div>

        {/* Texto encima */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 w-full">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#7A9E3B]/20 text-[#7A9E3B] border border-[#7A9E3B]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Busco prácticas · Busco mi primer empleo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Tu primer paso profesional<br />
              <span className="text-[#7A9E3B]">empieza aquí.</span><br />
              Nosotros te preparamos<br />y buscamos por ti.
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Tanto si buscas <strong className="text-white">prácticas</strong> como tu <strong className="text-white">primer empleo</strong>, te preparamos para que <strong className="text-white">destaques frente a otros candidatos</strong>. Y si quieres, también buscamos activamente por ti — contactamos empresas, presentamos tu perfil y gestionamos el proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/sesion-gratuita" className="inline-block bg-[#7A9E3B] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#2ea03c] transition shadow-lg text-center">
                Quiero mi sesión gratuita
              </a>
              <a href="#planes" className="inline-block border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:border-white transition text-center">
                Ver planes
              </a>
            </div>
            <p className="text-white/40 text-sm mt-4">15 minutos. Sin compromiso. Solo tú y nosotros.</p>
          </div>
        </div>
      </section>

      {/* ELIGE TU SITUACIÓN */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7A9E3B] mb-3">¿Cuál es tu situación?</p>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="#planes" className="block bg-[#F0F4F8] hover:bg-[#7A9E3B]/10 border-2 border-transparent hover:border-[#7A9E3B] rounded-2xl p-6 text-left transition-all">
              <p className="text-2xl mb-2">🎓</p>
              <p className="font-bold text-[#000000] mb-1">Busco prácticas</p>
              <p className="text-sm text-[#000000]">Necesito hacer prácticas en empresa para titular o ganar experiencia real.</p>
            </a>
            <a href="#planes" className="block bg-[#F0F4F8] hover:bg-[#7A9E3B]/10 border-2 border-transparent hover:border-[#7A9E3B] rounded-2xl p-6 text-left transition-all">
              <p className="text-2xl mb-2">💼</p>
              <p className="font-bold text-[#000000] mb-1">Busco mi primer empleo</p>
              <p className="text-sm text-[#000000]">Ya tengo formación y quiero dar el salto a mi primer trabajo de verdad.</p>
            </a>
          </div>
          <p className="text-xs text-[#000000] mt-4">En ambos casos, te preparamos y buscamos por ti.</p>
        </div>
      </section>

      {/* ¿TE IDENTIFICAS? */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Tanto si buscas prácticas como tu primer empleo</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">¿Te suena esto?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Mandas CVs y no recibes respuesta. O peor: ni te leen.",
              "No sabes si buscar prácticas o lanzarte directamente a por tu primer empleo.",
              "Tu CV existe, pero no destaca. Tu LinkedIn está a medias.",
              "Llegas a una entrevista y no sabes qué decir ni cómo venderte.",
              "Todas las ofertas piden experiencia. Pero nadie te da la primera oportunidad.",
              "No tienes a nadie que te oriente. Lo estás haciendo solo.",
            ].map((text, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#000000] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-[#000000] leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#000000] font-semibold text-lg mt-10">
            Si te identificas con alguno de estos, estás en el sitio correcto.
          </p>
        </div>
      </section>

      {/* QUÉ HACEMOS POR TI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Lo que hacemos por ti</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Así te preparamos para destacar</h2>
            <p className="text-[#000000] mt-4 max-w-xl mx-auto">No somos una bolsa de empleo. Somos el apoyo que necesitas para que cuando llegues a una <strong>entrevista</strong>, seas <strong>el candidato que recuerdan</strong>.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Te ayudamos a saber qué buscas",
                desc: "Antes de buscar prácticas, trabajamos contigo para entender qué te motiva, qué se te da bien y qué tipo de empresa encaja con tu perfil. Sin claridad, no hay dirección.",
              },
              {
                title: "CV y LinkedIn que abren puertas",
                desc: "Optimizamos tu CV y tu perfil de LinkedIn para que cuenten tu historia de forma atractiva. Porque los reclutadores tardan 6 segundos en decidir si siguen leyendo.",
              },
              {
                title: "Te entrenamos para la entrevista",
                desc: "Hacemos simulaciones de entrevistas reales. Te enseñamos a hablar de ti mismo con seguridad, a responder preguntas difíciles y a destacar por encima de otros candidatos.",
              },
              {
                title: "Buscamos activamente por ti",
                desc: "En el Pack Premium, nosotros contactamos empresas en tu nombre, presentamos tu perfil y gestionamos el proceso. Tú solo tienes que prepararte para la entrevista.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 bg-[#F0F4F8] rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#7A9E3B] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#000000] mb-2">{item.title}</h3>
                  <p className="text-[#000000] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">¿Cómo te ayudamos?</span>
            <h2 className="text-3xl font-bold text-[#000000] mt-2">Elige tu camino</h2>
            <p className="text-[#000000] text-sm mt-2">Todos incluyen sesión inicial gratuita de 15 min.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">

            {/* Opción 1 */}
            <div className="border-2 border-gray-100 rounded-3xl p-8 flex flex-col relative hover:border-gray-200 transition">
              <span className="absolute -top-3 left-8 bg-[#000000] text-white text-xs font-bold px-3 py-1 rounded-full">Más popular</span>
              <p className="text-[#7A9E3B] text-xs font-bold uppercase tracking-widest mb-3">Opción 1</p>
              <h3 className="text-2xl font-bold text-[#000000] mb-2">Prepárate para destacar</h3>
              <p className="text-[#000000] text-sm leading-relaxed mb-6">Ideal si tu centro ya te gestiona las prácticas o tienes tiempo para buscar, pero quieres <strong>llegar mejor preparado que el resto</strong>.</p>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  { titulo: "1 sesión de 60 min", desc: "Con orientadora laboral. Personalizada para tu caso." },
                  { titulo: "Plan de carrera a medida", desc: "Qué sectores te encajan, cómo posicionarte, por dónde empezar." },
                  { titulo: "CV + LinkedIn optimizados", desc: "Para que los reclutadores te encuentren y te llamen." },
                  { titulo: "Entrevistas sin nervios", desc: "Técnicas y simulaciones reales para que te elijan a ti." },
                ].map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#7A9E3B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                    <div>
                      <p className="text-sm font-semibold text-[#000000]">{item.titulo}</p>
                      <p className="text-xs text-[#000000] leading-snug">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-6">
                <p className="text-4xl font-bold text-[#000000] mb-1">75€ <span className="text-base font-normal text-[#000000]">IVA incluido</span></p>
                <p className="text-[#000000] text-xs mb-5">Sesión gratuita de 15 min incluida</p>
                <a href="/contacto" className="block text-center py-3.5 rounded-full font-semibold text-sm bg-[#000000] text-white hover:bg-[#222] transition">
                  Quiero este plan
                </a>
              </div>
            </div>

            {/* Opción 2 */}
            <div className="bg-[#000000] rounded-3xl p-8 flex flex-col relative">
              <span className="absolute -top-3 left-8 bg-[#7A9E3B] text-white text-xs font-bold px-3 py-1 rounded-full">Más completo</span>
              <p className="text-[#7A9E3B] text-xs font-bold uppercase tracking-widest mb-3">Opción 2</p>
              <h3 className="text-2xl font-bold text-white mb-2">Nosotros buscamos por ti</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">Ideal si quieres <strong className="text-white">delegar el proceso entero</strong>. Te preparamos y además movemos tu perfil entre miles de empresas para <strong className="text-white">conseguirte entrevistas</strong>.</p>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  { titulo: "3 sesiones de 60 min", desc: "Seguimiento real en cada fase del proceso." },
                  { titulo: "CV + LinkedIn para reclutadores", desc: "Optimizados para que te encuentren los que más interesan." },
                  { titulo: "Role plays de entrevistas", desc: "Simulaciones reales para que llegues con seguridad." },
                  { titulo: "Búsqueda activa en +10.000 empresas", desc: "Movemos tu candidatura. Tú solo preparas la entrevista." },
                  { titulo: "Gestión completa del proceso", desc: "Desde el primer contacto hasta que firmas." },
                ].map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#7A9E3B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.titulo}</p>
                      <p className="text-xs text-white/60 leading-snug">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 pt-6">
                <p className="text-4xl font-bold text-white mb-1">149€ <span className="text-base font-normal text-white/60">IVA incluido</span></p>
                <p className="text-white/60 text-xs mb-5">Sesión gratuita de 15 min incluida</p>
                <a href="/contacto" className="block text-center py-3.5 rounded-full font-semibold text-sm bg-[#7A9E3B] text-white hover:bg-[#2ea03c] transition">
                  Quiero este plan
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DATOS OFICIALES */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Datos oficiales</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">El mercado laboral para jóvenes en España</h2>
            <p className="text-[#000000] mt-4 max-w-xl mx-auto">Cifras reales que explican por qué prepararse bien marca la diferencia.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {[
              {
                valor: "28%",
                label: "tasa de paro entre jóvenes menores de 25 años en España",
                fuente: "Eurostat, 2024",
              },
              {
                valor: "6 seg",
                label: "es el tiempo medio que un reclutador dedica a leer un CV antes de decidir",
                fuente: "The Ladders / LinkedIn Research",
              },
              {
                valor: "87%",
                label: "de los reclutadores usa LinkedIn para buscar y evaluar candidatos",
                fuente: "LinkedIn Global Recruiting Trends",
              },
              {
                valor: "1 de 3",
                label: "ofertas de empleo junior exige experiencia previa, aunque sea una beca",
                fuente: "Infojobs / Adecco — Informe mercado laboral",
              },
            ].map((d, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                <p className="text-4xl font-bold text-[#000000] mb-2">{d.valor}</p>
                <p className="text-sm text-[#000000] leading-snug mb-3">{d.label}</p>
                <p className="text-xs text-[#000000] italic">{d.fuente}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#000000] rounded-2xl p-8 text-white">
              <p className="text-[#7A9E3B] text-xs font-semibold uppercase tracking-widest mb-3">La paradoja de la experiencia</p>
              <p className="text-3xl font-bold mb-2">Sin experiencia no te contratan.<br />Sin contrato no tienes experiencia.</p>
              <p className="text-white/70 text-sm leading-relaxed mt-4">
                Las prácticas rompen ese círculo. Son la vía más directa para conseguir tu primera experiencia real y diferenciarte del resto de candidatos con tu mismo perfil.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="text-[#7A9E3B] text-xs font-semibold uppercase tracking-widest mb-3">LinkedIn: el nuevo CV</p>
              <p className="text-3xl font-bold text-[#000000] mb-2">+40% más de respuestas</p>
              <p className="text-[#000000] text-sm leading-relaxed mb-2">
                Los candidatos con un perfil de LinkedIn optimizado reciben hasta un 40% más de respuestas de reclutadores que los que tienen un perfil incompleto o desactualizado.
              </p>
              <p className="text-[#000000] text-xs italic">LinkedIn Talent Solutions Report</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-[#000000] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#7A9E3B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#7A9E3B] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Empieza con una sesión gratuita
          </h2>
          <p className="text-white/80 text-lg mb-10">
            15 minutos para entender tu situación y ver cómo podemos ayudarte. Sin compromiso.
          </p>
          <a href="mailto:hola@job2jump.es" className="inline-block bg-[#7A9E3B] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg">
            Quiero mi sesión gratuita
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}
