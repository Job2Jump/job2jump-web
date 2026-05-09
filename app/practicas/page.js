import Image from "next/image";
import Navbar from "../components/Navbar";

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
            <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Busco prácticas · Busco mi primer empleo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Tu primer paso profesional<br />
              <span className="text-[#3BB54A]">empieza aquí.</span><br />
              Nosotros te preparamos<br />y buscamos por ti.
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Tanto si buscas prácticas como tu primer empleo, te preparamos para que destaques frente a otros candidatos. Y si quieres, también buscamos activamente por ti — contactamos empresas, presentamos tu perfil y gestionamos el proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/sesion-gratuita" className="inline-block bg-[#3BB54A] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#2ea03c] transition shadow-lg text-center">
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
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3BB54A] mb-3">¿Cuál es tu situación?</p>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="#planes" className="block bg-[#F0F4F8] hover:bg-[#3BB54A]/10 border-2 border-transparent hover:border-[#3BB54A] rounded-2xl p-6 text-left transition-all">
              <p className="text-2xl mb-2">🎓</p>
              <p className="font-bold text-[#000000] mb-1">Busco prácticas</p>
              <p className="text-sm text-gray-500">Necesito hacer prácticas en empresa para titular o ganar experiencia real.</p>
            </a>
            <a href="#planes" className="block bg-[#F0F4F8] hover:bg-[#3BB54A]/10 border-2 border-transparent hover:border-[#3BB54A] rounded-2xl p-6 text-left transition-all">
              <p className="text-2xl mb-2">💼</p>
              <p className="font-bold text-[#000000] mb-1">Busco mi primer empleo</p>
              <p className="text-sm text-gray-500">Ya tengo formación y quiero dar el salto a mi primer trabajo de verdad.</p>
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">En ambos casos, te preparamos y buscamos por ti.</p>
        </div>
      </section>

      {/* ¿TE IDENTIFICAS? */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Sabemos cómo te sientes</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">¿Te suena esto?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Mandas CVs y no recibes respuesta. O peor: ni te leen.",
              "No sabes si buscar prácticas o tirarte directamente a por un empleo.",
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
                <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
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
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Lo que hacemos por ti</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Así te preparamos para destacar</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">No somos una bolsa de empleo. Somos el apoyo que necesitas para que cuando llegues a una entrevista, seas el candidato que recuerdan.</p>
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
                <div className="w-10 h-10 rounded-xl bg-[#3BB54A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#000000] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="py-16 bg-[#F0F4F8]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-10">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">¿Cómo te ayudamos?</span>
            <h2 className="text-3xl font-bold text-[#000000] mt-2">Elige tu camino</h2>
            <p className="text-gray-500 text-sm mt-2">Todos incluyen sesión inicial gratuita de 15 min.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Pack Medio */}
            <div className="bg-[#000000] rounded-2xl p-8 shadow-sm flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#000000] text-xs font-bold px-4 py-1 rounded-full shadow">Más popular</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Opción 1</p>
              <h3 className="text-xl font-bold text-white mb-2">Prepárate para destacar</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                Ideal si tu instituto o universidad ya te busca las prácticas o tienes tiempo para buscar empleo por tu cuenta, pero no sabes cómo superar las entrevistas ni cómo presentarte para que te elijan a ti.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "1 sesión de 60 min con orientadora laboral",
                  "Asesoramiento laboral y plan de carrera personalizado para tu profesión",
                  "CV atractivo y perfil de LinkedIn optimizado para que te encuentren",
                  "Técnicas y trucos reales para superar cualquier entrevista con seguridad",
                ].map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-[#3BB54A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-center text-white font-bold text-xl underline mb-3">75€ <span className="text-gray-400 text-xs font-normal no-underline">· sesión gratuita incluida</span></p>
              <a href="/sesion-gratuita" className="block text-center py-3.5 rounded-full font-semibold text-sm transition bg-[#3BB54A] text-white hover:bg-[#2ea03c]">
                Quiero este plan
              </a>
            </div>

            {/* Pack Premium */}
            <div className="bg-[#3BB54A] rounded-2xl p-8 shadow-sm flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#000000] text-xs font-bold px-4 py-1 rounded-full shadow">Más completo</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1">Opción 2</p>
              <h3 className="text-xl font-bold text-white mb-2">Nosotros buscamos por ti</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-5">
                Ideal si no tienes tiempo ni ganas de buscar tú mismo. Analizamos tu perfil, te preparamos a fondo y nos movemos en tu nombre ante las empresas que más encajan contigo. Ahorra tiempo y ve a tiro hecho.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "3 sesiones de 60 min con orientadora laboral",
                  "CV actualizado y LinkedIn optimizado para atraer a los reclutadores correctos",
                  "Asesoramiento laboral y plan de carrera adaptado a tu perfil y sector",
                  "Role plays de entrevistas reales para que llegues sin nervios",
                  "Te buscamos las entrevistas: movemos tu CV entre +10.000 contactos y empresas potenciales",
                ].map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/90">
                    <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-center text-white font-bold text-xl underline mb-3">149€ <span className="text-white/60 text-xs font-normal no-underline">· sesión gratuita incluida</span></p>
              <a href="/sesion-gratuita" className="block text-center py-3.5 rounded-full font-semibold text-sm transition bg-white text-[#000000] hover:bg-gray-100">
                Quiero este plan
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* DATOS OFICIALES */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Datos oficiales</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">El mercado laboral para jóvenes en España</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Cifras reales que explican por qué prepararse bien marca la diferencia.</p>
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
                <p className="text-sm text-gray-600 leading-snug mb-3">{d.label}</p>
                <p className="text-xs text-gray-400 italic">{d.fuente}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#000000] rounded-2xl p-8 text-white">
              <p className="text-[#3BB54A] text-xs font-semibold uppercase tracking-widest mb-3">La paradoja de la experiencia</p>
              <p className="text-3xl font-bold mb-2">Sin experiencia no te contratan.<br />Sin contrato no tienes experiencia.</p>
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                Las prácticas rompen ese círculo. Son la vía más directa para conseguir tu primera experiencia real y diferenciarte del resto de candidatos con tu mismo perfil.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="text-[#3BB54A] text-xs font-semibold uppercase tracking-widest mb-3">LinkedIn: el nuevo CV</p>
              <p className="text-3xl font-bold text-[#000000] mb-2">+40% más de respuestas</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-2">
                Los candidatos con un perfil de LinkedIn optimizado reciben hasta un 40% más de respuestas de reclutadores que los que tienen un perfil incompleto o desactualizado.
              </p>
              <p className="text-gray-400 text-xs italic">LinkedIn Talent Solutions Report</p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Empieza con una sesión gratuita
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            15 minutos para entender tu situación y ver cómo podemos ayudarte. Sin compromiso.
          </p>
          <a href="mailto:hola@job2jump.es" className="inline-block bg-[#3BB54A] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg">
            Quiero mi sesión gratuita
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
