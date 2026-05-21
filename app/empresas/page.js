import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Alumnos de FP en prácticas para tu empresa | Job2Jump",
  description: "Incorpora alumnos de Formación Profesional en prácticas sin coste salarial. Gestionamos todo el proceso para pymes y startups. Trabajamos a éxito.",
  keywords: "alumnos FP prácticas empresa, becarios formación profesional, prácticas empresa sin coste, talento junior pymes, contratar becario FP, formación dual empresa, prácticas empresa España, selección talento junior",
};

export default function Empresas() {
  return (
    <div className="min-h-screen">

      <Navbar />

      {/* HERO + DATOS */}
      <section className="relative">
        <Image
          src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1920&q=80"
          alt="Profesional dando la mano a un joven candidato"
          fill
          className="object-cover blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-40 pb-20 w-full">

          {/* Título */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#7A9E3B]/20 text-[#7A9E3B] border border-[#7A9E3B]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Para pymes y startups · Perfiles FP y junior sin coste salarial
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Talento joven en tu empresa.<br />
              <span className="text-[#7A9E3B]">Sin salario. Sin papeleo. Sin complicaciones.</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              Conectamos tu pyme o startup con <strong className="text-white">alumnos de FP</strong> que necesitan hacer prácticas. <strong className="text-white">Sin coste salarial</strong>, sin trámites burocráticos — nosotros gestionamos todo. Tú solo recibes el perfil y decides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacto" className="inline-block bg-[#7A9E3B] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#2ea03c] transition shadow-lg">
                Infórmate sin compromiso
              </a>
              <a href="#como-funciona" className="inline-block border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:border-white transition text-center">
                Cómo funciona
              </a>
            </div>
          </div>

          {/* Beneficios clave */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            {[
              { valor: "0 €", label: "coste salarial en prácticas" },
              { valor: "26-30h", label: "de gestión que te ahorramos" },
              { valor: "1 de 3", label: "alumnos acaba contratado" },
              { valor: "100%", label: "garantía de sustitución" },
              { valor: "Prácticas · Dual", label: "gestionamos ambas modalidades" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <p className="text-xl font-bold text-[#7A9E3B]">{item.valor}</p>
                <p className="text-xs text-white/60 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>


        </div>
      </section>


      {/* LÍNEA FP — SIN COSTE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Para pymes y startups</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Incorpora talento joven.<br />Nosotros nos encargamos de todo.</h2>
            <p className="text-[#000000] mt-4 max-w-2xl mx-auto">
              Conectamos tu pyme o startup con alumnos de <strong>Formación Profesional</strong> que necesitan hacer prácticas. Tú recibes un perfil <strong>formado, motivado y listo para aprender</strong>. Nosotros gestionamos todo el papeleo.
            </p>
          </div>

          {/* Modalidad principal — Prácticas */}
          <div className="bg-[#000000] rounded-2xl p-10 mb-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7A9E3B] mb-2">Prácticas en empresa — Obligatorias para titular</p>
              <h3 className="text-3xl font-bold text-white mb-4">Coste para la empresa: 0 €</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                El alumno ya ha terminado su formación teórica. Viene a tu empresa <strong className="text-white">entre 3 y 4 meses</strong> a aplicar lo aprendido. <strong className="text-white">Sin salario, sin contrato.</strong> Solo firmas un convenio de colaboración con el instituto — nosotros lo tramitamos todo.
              </p>
              <a href="/contacto" className="inline-block bg-[#7A9E3B] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#2ea03c] transition">
                Infórmate sin compromiso
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { titulo: "Sin salario ni contrato", desc: "Cero coste salarial. Solo un convenio que tramitamos nosotros." },
                { titulo: "La SS la paga el Estado", desc: "No sale de tu bolsillo. El alumno cotiza y tú no pagas nada." },
                { titulo: "3-4 meses reales", desc: "Tiempo suficiente para ver cómo trabaja antes de decidir." },
                { titulo: "Puedes contratarle después", desc: "1 de cada 3 alumnos acaba en plantilla. La mejor prueba de trabajo." },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4">
                  <p className="text-sm font-bold text-white mb-1">{item.titulo}</p>
                  <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Perfiles más demandados */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#000000]">¿Qué perfil necesitas en tu empresa?</h3>
              <p className="text-[#000000] text-sm mt-2">Los más solicitados por pymes y startups como la tuya</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icono: "💻",
                  nombre: "Informática y desarrollo",
                  desc: "Web, apps, sistemas y soporte técnico.",
                  tags: ["Desarrollo web", "Apps móviles", "Sistemas IT", "Soporte técnico"],
                  color: "bg-blue-50 border-blue-100",
                },
                {
                  icono: "📣",
                  nombre: "Marketing digital",
                  desc: "Redes sociales, campañas y captación de leads.",
                  tags: ["Redes sociales", "SEO/SEM", "Publicidad online", "Captación leads"],
                  color: "bg-orange-50 border-orange-100",
                },
                {
                  icono: "📊",
                  nombre: "Administración y gestión",
                  desc: "Facturas, contabilidad, RRHH y papeleo.",
                  tags: ["Facturación", "Contabilidad", "RRHH", "Atención cliente"],
                  color: "bg-purple-50 border-purple-100",
                },
                {
                  icono: "🛒",
                  nombre: "Comercial y logística",
                  desc: "Ventas, pedidos, atención al cliente y almacén.",
                  tags: ["Ventas", "Ecommerce", "Almacén", "Logística"],
                  color: "bg-yellow-50 border-yellow-100",
                },
                {
                  icono: "🔒",
                  nombre: "Ciberseguridad y datos",
                  desc: "El perfil más escaso y más demandado del mercado.",
                  tags: ["Ciberseguridad", "Protección datos", "Cloud", "Big Data"],
                  color: "bg-red-50 border-red-100",
                },
              ].map((p, i) => (
                <div key={i} className={`${p.color} rounded-2xl p-6 border hover:shadow-md transition-all`}>
                  <span className="text-4xl mb-4 block">{p.icono}</span>
                  <p className="text-base font-bold text-[#000000] mb-2">{p.nombre}</p>
                  <p className="text-[#000000] text-xs leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, j) => (
                      <span key={j} className="bg-white text-[#000000] text-xs px-2 py-1 rounded-full border border-gray-200">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LO QUE NOSOTROS HACEMOS */}
      <section id="como-funciona" className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">La solución</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Lo que hacemos por ti</h2>
            <p className="text-[#000000] mt-4 max-w-xl mx-auto">Somos tu departamento de selección de talento joven externo. Tú te dedicas a tu negocio.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                titulo: "Entendemos exactamente lo que necesitas",
                desc: "Nos reunimos contigo para hacer un briefing detallado. Qué perfil, qué funciones, qué esperas. Sin eso, no empezamos.",
              },
              {
                num: "02",
                titulo: "Publicamos, filtramos y entrevistamos",
                desc: "Nos encargamos de todo el proceso: publicación en los canales adecuados, cribado de CVs y primeras entrevistas. Sin que muevas un dedo.",
              },
              {
                num: "03",
                titulo: "Te presentamos solo los mejores",
                desc: "Recibes entre 3 y 4 candidatos filtrados y preparados. Tú decides si haces la entrevista final solo o con nosotros.",
              },
              {
                num: "04",
                titulo: "Gestionamos toda la documentación",
                desc: "Convenio de prácticas, papeles, trámites. Todo gestionado. Tú solo firmas la incorporación.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 bg-white rounded-2xl shadow-sm">
                <span className="text-5xl font-bold text-[#7A9E3B]/20 leading-none flex-shrink-0">{item.num}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#000000] mb-2">{item.titulo}</h3>
                  <p className="text-[#000000] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-8">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Precios</span>
            <h2 className="text-3xl font-bold text-[#000000] mt-2">Claro, sencillo y sin sorpresas</h2>
            <p className="text-[#000000] text-sm mt-2">Trabajamos a éxito. Solo pagas si incorporas.</p>
          </div>
          <div className="bg-[#F0F4F8] rounded-2xl p-6 border border-gray-100">

            {/* Fila única: Retainer + flecha + dos caminos */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">

              {/* Retainer */}
              <div className="bg-[#000000] rounded-xl px-6 py-5 text-center flex-shrink-0 w-full md:w-52">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#7A9E3B] mb-1">Retainer inicial</p>
                <p className="text-5xl font-bold text-white">100€</p>
                <p className="text-white/60 text-xs mt-2">Al arrancar · se descuenta</p>
              </div>

              {/* Flecha */}
              <svg className="w-6 h-6 text-[#7A9E3B] rotate-0 md:rotate-[-90deg] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>

              {/* Camino A */}
              <div className="bg-[#7A9E3B] rounded-xl px-5 py-5 border-2 border-[#7A9E3B] flex-1 w-full">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-0.5">Camino A</p>
                <p className="text-sm font-bold text-white mb-2">Prácticas, luego decides</p>
                <p className="text-5xl font-bold text-white">250€</p>
                <p className="text-xs text-white/80 font-medium mt-1">Sin coste salarial</p>
              </div>

              {/* Camino B */}
              <div className="bg-white rounded-xl px-5 py-5 border-2 border-[#000000] flex-1 w-full">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#7A9E3B] mb-0.5">Camino B</p>
                <p className="text-sm font-bold text-[#000000] mb-2">Contrato junior directo</p>
                <p className="text-5xl font-bold text-[#000000]">400€</p>
                <p className="text-xs text-[#000000] font-medium mt-1">Retainer ya descontado</p>
              </div>
            </div>

            <p className="text-xs text-[#000000] text-center mb-4">Todos los precios sin IVA · Solo pagas si hay resultado</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                "Garantía de sustitución gratuita",
                "Gestión completa de la documentación",
                "3-4 candidatos filtrados",
                "Proceso en 2-4 semanas",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-[#000000]">
                  <div className="w-4 h-4 rounded-full bg-[#7A9E3B] flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DATOS OFICIALES */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Datos oficiales</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">El mercado de talento joven en España</h2>
            <p className="text-[#000000] mt-4 max-w-xl mx-auto">Cifras reales que explican por qué cada vez más pymes apuestan por este modelo.</p>
          </div>

          {/* Fila 1 — 4 datos grandes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {[
              {
                valor: "+940.000",
                label: "alumnos matriculados en FP en España",
                fuente: "Ministerio de Educación, curso 2022-23",
              },
              {
                valor: "100%",
                label: "de los alumnos de FP deben hacer prácticas para titular",
                fuente: "RD 659/2023 — Ley Orgánica de FP",
              },
              {
                valor: "28%",
                label: "tasa de paro juvenil en España (menores de 25 años)",
                fuente: "Eurostat, 2024",
              },
              {
                valor: "+3M",
                label: "pymes en España, el 99,8% del tejido empresarial",
                fuente: "INE / Retrato de las pymes 2023",
              },
            ].map((d, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                <p className="text-4xl font-bold text-[#000000] mb-2">{d.valor}</p>
                <p className="text-sm text-[#000000] leading-snug mb-3">{d.label}</p>
                <p className="text-xs text-[#000000] italic">{d.fuente}</p>
              </div>
            ))}
          </div>

          {/* Fila 2 — 2 bloques más amplios */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#000000] rounded-2xl p-8 text-white">
              <p className="text-[#7A9E3B] text-xs font-semibold uppercase tracking-widest mb-3">El coste real de contratar</p>
              <p className="text-3xl font-bold mb-2">1.200€ – 2.000€</p>
              <p className="text-white/80 text-sm leading-relaxed mb-2">
                Es lo que cuesta de media un proceso de selección para una pyme cuando se externaliza con una consultora tradicional de RRHH.
              </p>
              <p className="text-white/50 text-xs italic">SHRM / informes sectoriales RRHH España</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="text-[#7A9E3B] text-xs font-semibold uppercase tracking-widest mb-3">FP: el perfil más empleable</p>
              <p className="text-3xl font-bold text-[#000000] mb-2">76% de empleabilidad</p>
              <p className="text-[#000000] text-sm leading-relaxed mb-2">
                Los titulados de FP tienen una de las tasas de inserción laboral más altas de España, por encima de muchas titulaciones universitarias.
              </p>
              <p className="text-[#000000] text-xs italic">Ministerio de Educación — Informe de inserción laboral FP 2023</p>
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
            ¿Listo para incorporar talento?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Cuéntanos qué perfil necesitas. Te respondemos en menos de 24 horas.
          </p>
          <a href="mailto:hola@job2jump.es" className="inline-block bg-[#7A9E3B] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg">
            Contactar ahora
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}
