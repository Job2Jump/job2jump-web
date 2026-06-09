import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Selección de talento junior y senior para tu empresa | Job2Jump",
  description: "Encontramos al profesional junior o senior que tu empresa necesita para incorporar desde el día 1. Búsqueda activa, proceso ágil y garantía de 3 meses.",
};

export default function Talento() {
  return (
    <div className="min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="relative">
        <Image
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=80"
          alt="Profesional incorporándose a un equipo"
          fill
          className="object-cover blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-40 pb-20 w-full">

          <div className="text-center mb-16">
            <span className="inline-block bg-[#7A9E3B]/20 text-[#7A9E3B] border border-[#7A9E3B]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Selección de talento junior y senior · Listo para incorporar
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Incorpora talento que ya está listo.<br />
              <span className="text-[#7A9E3B]">Y quédatelo desde el día 1.</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              Te encontramos al <strong className="text-white">profesional</strong> que tu negocio necesita para contratarlo desde el primer momento. Junior recién titulado o senior con experiencia: nosotros buscamos, filtramos y te lo presentamos listo para incorporar — <strong className="text-white">tú solo eliges al candidato y solo pagas si te quedas con él.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hola@job2jump.es" className="inline-block bg-[#7A9E3B] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#2ea03c] transition shadow-lg">
                Infórmate sin compromiso
              </a>
              <a href="#como-funciona" className="inline-block border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:border-white transition text-center">
                Cómo funciona
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            {[
              { valor: "+8", label: "años de experiencia en selección en consultoras internacionales" },
              { valor: "+150", label: "pymes y startups que ya han incorporado talento con nosotros" },
              { valor: "+500", label: "jóvenes orientados y colocados en su primer empleo o prácticas" },
              { valor: "1:1", label: "Trato humano y personalizado. No somos una base de datos ni un algoritmo" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <p className="text-2xl font-bold text-[#7A9E3B]">{item.valor}</p>
                <p className="text-xs text-white/60 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* DOS PERFILES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Dos perfiles, dos formas de sumar talento</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Elige el que mejor encaja con lo que tu negocio necesita ahora.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">

            {/* JUNIOR */}
            <div className="border-2 border-[#7A9E3B] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#7A9E3B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Junior</span>
                <span className="text-sm text-[#000000]">Recién titulado · hasta 2 años de experiencia</span>
              </div>
              <h3 className="text-2xl font-bold text-[#000000] mb-6">Talento fresco que crece <span className="text-[#7A9E3B]">contigo.</span></h3>
              <div className="flex flex-col gap-4">
                {[
                  { icono: "💰", titulo: "Inversión asequible", desc: "Salario menor que el de un perfil con experiencia." },
                  { icono: "✨", titulo: "Aire nuevo y al día", desc: "Formación reciente y conocimientos actualizados." },
                  { icono: "🎨", titulo: "Lienzo en blanco", desc: "Lo formas a tu manera, sin vicios adquiridos." },
                  { icono: "⚡", titulo: "Hambre y motivación", desc: "Su primer empleo \"de verdad\": ganas de demostrar." },
                  { icono: "📈", titulo: "Largo recorrido", desc: "Potencial para crecer en tu empresa muchos años." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-xl flex-shrink-0">{item.icono}</span>
                    <div>
                      <p className="text-sm font-bold text-[#000000]">{item.titulo}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SENIOR */}
            <div className="border-2 border-[#000000] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#000000] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Senior</span>
                <span className="text-sm text-[#000000]">3+ años de experiencia</span>
              </div>
              <h3 className="text-2xl font-bold text-[#000000] mb-6">Productivo <span className="text-[#7A9E3B]">desde el día 1.</span></h3>
              <div className="flex flex-col gap-4">
                {[
                  { icono: "🚀", titulo: "Listo desde el día 1", desc: "No necesita formación de base, se incorpora y produce." },
                  { icono: "🎯", titulo: "Autonomía total", desc: "Sabe lo que hace, no requiere supervisión constante." },
                  { icono: "🧠", titulo: "Criterio y experiencia", desc: "Aporta soluciones, no solo manos: trae buenas prácticas." },
                  { icono: "🔧", titulo: "Resuelve problemas complejos", desc: "Ya ha estado en mil batallas: anticipa y resuelve." },
                  { icono: "👥", titulo: "Eleva el nivel del equipo", desc: "Su know-how arrastra al resto: el equipo aprende." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-xl flex-shrink-0">{item.icono}</span>
                    <div>
                      <p className="text-sm font-bold text-[#000000]">{item.titulo}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* POR QUÉ EXISTIMOS */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Por qué existimos</span>
            <h2 className="text-4xl font-bold text-white mt-3">Encontrar buen talento es difícil.<br />Atraerlo y cerrarlo, aún más.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">01 — El problema</p>
              <div className="flex flex-col gap-4">
                {[
                  { titulo: "El talento bueno no está en portales.", desc: "Los mejores no buscan trabajo activamente: hay que ir a buscarlos." },
                  { titulo: "Procesos largos.", desc: "Si tardas, los buenos aceptan otra oferta." },
                  { titulo: "A las pymes les cuesta llegar al mejor talento.", desc: "Sin la marca de las grandes, atraer a los buenos es difícil." },
                  { titulo: "Los candidatos inflan su salario.", desc: "Sin referencias, pagas de más por su experiencia real." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start border-b border-white/10 pb-4">
                    <span className="w-5 h-5 rounded-sm bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </span>
                    <p className="text-sm text-white/70"><strong className="text-white">{item.titulo}</strong> {item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7A9E3B] mb-6">02 — Nuestra solución</p>
              <div className="flex flex-col gap-4">
                {[
                  { titulo: "Búsqueda activa.", desc: "Vamos a los buenos donde están, aunque no busquen." },
                  { titulo: "Proceso ágil.", desc: "Finalistas en 2-6 semanas." },
                  { titulo: "Llegamos donde tú no llegas.", desc: "Red propia de talento y contacto directo." },
                  { titulo: "Sabemos lo que vale cada perfil.", desc: "Te decimos qué salario es realista para no pagar de más ni perder al candidato." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start border-b border-white/10 pb-4">
                    <span className="w-5 h-5 rounded-sm bg-[#7A9E3B]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#7A9E3B]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <p className="text-sm text-white/70"><strong className="text-white">{item.titulo}</strong> {item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* PERFILES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-10">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Perfiles disponibles</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">¿Qué perfil necesitas?</h2>
            <p className="text-[#000000] text-sm mt-2">Trabajamos cualquier familia profesional.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icono: "💻", nombre: "Informática y desarrollo", desc: "Desarrollo web, apps, sistemas IT y soporte técnico.", tags: ["Desarrollo web", "Apps móviles", "Sistemas IT", "Soporte técnico"], color: "bg-blue-50 border-blue-100" },
              { icono: "📣", nombre: "Marketing digital", desc: "Redes sociales, SEO/SEM, publicidad online y captación de leads.", tags: ["Redes sociales", "SEO/SEM", "Publicidad online", "Captación leads"], color: "bg-orange-50 border-orange-100" },
              { icono: "📊", nombre: "Administración y gestión", desc: "Facturación, contabilidad, RRHH y atención al cliente.", tags: ["Facturación", "Contabilidad", "RRHH", "Atención cliente"], color: "bg-purple-50 border-purple-100" },
              { icono: "🛒", nombre: "Comercial y logística", desc: "Ventas, ecommerce, almacén y logística.", tags: ["Ventas", "Ecommerce", "Almacén", "Logística"], color: "bg-yellow-50 border-yellow-100" },
              { icono: "🔒", nombre: "Ciberseguridad y datos", desc: "Protección de datos, Cloud y Big Data.", tags: ["Ciberseguridad", "Protección datos", "Cloud", "Big Data"], color: "bg-red-50 border-red-100" },
              { icono: "✨", nombre: "¿No encuentras tu perfil?", desc: "Trabajamos con cualquier familia profesional. Consúltanos sin compromiso.", tags: [], color: "bg-gray-50 border-gray-100" },
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
      </section>


      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Cómo trabajaremos contigo</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Un proceso en 4 pasos.</h2>
            <p className="text-[#000000] mt-4 max-w-xl mx-auto">Finalistas en 2-6 semanas.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: "01", titulo: "Nos cuentas qué necesitas", desc: "Llamada de 15-20 minutos para el briefing: qué perfil, qué funciones, qué rango salarial esperas." },
              { num: "02", titulo: "Buscamos y filtramos", desc: "Búsqueda activa, no solo portales de empleo. Vamos a buscar a los buenos aunque no estén buscando." },
              { num: "03", titulo: "Te presentamos los mejores", desc: "Recibes 3-4 candidatos validados y alineados a mercado. Tú decides con quién avanzar." },
              { num: "04", titulo: "Cerramos la incorporación", desc: "Negociación salarial y onboarding incluidos. Nos quedamos hasta que el candidato firma." },
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
      <section id="precios" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Precios · A éxito, solo pagas si incorporas</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Trabajamos a éxito.</h2>
            <p className="text-[#000000] text-sm mt-2">Solo pagas si incorporas.</p>
          </div>
          <div className="bg-[#000000] rounded-2xl p-10 text-white text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7A9E3B] mb-1">Nuestro servicio</p>
            <p className="text-2xl font-bold mb-4">Selección de talento</p>
            <p className="text-7xl font-bold mb-2">450€</p>
            <p className="text-white/80 text-sm mb-8">+ IVA · Solo pagas si incorporas</p>
            <p className="text-white/70 text-sm">Selección completa de profesionales para incorporación directa a tu plantilla. Búsqueda activa, presentación de finalistas, gestión de contraofertas y onboarding incluido.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { titulo: "Sin exclusividad", desc: "Puedes llevar el proceso en paralelo. Si encuentras tú al candidato antes, no nos pagas." },
              { titulo: "Solo pagas si incorporas", desc: "Trabajamos a éxito. Sin incorporación, sin coste." },
              { titulo: "Proceso end-to-end", desc: "Búsqueda, filtrado, entrevistas, negociación e incorporación." },
              { titulo: "Confidencialidad total", desc: "Ningún candidato sabrá de ti hasta que decidas dar el paso." },
              { titulo: "Garantía de 3 meses", desc: "Si el candidato no encaja, lo reemplazamos sin coste durante los primeros 3 meses." },
              { titulo: "Salario alineado al mercado", desc: "Te asesoramos para que la oferta sea competitiva y la acepten." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-[#F0F4F8] rounded-xl">
                <div className="w-5 h-5 rounded-full bg-[#7A9E3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#000000]">{item.titulo}</p>
                  <p className="text-xs text-[#000000] leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Cuéntanos qué perfil necesitas.</h2>
          <p className="text-white/80 text-lg mb-10">Te respondemos en menos de 24 horas. Sin compromiso y sin coste hasta que decidas arrancar el proceso.</p>
          <a href="mailto:hola@job2jump.es" className="inline-block bg-[#7A9E3B] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg">
            Contactar ahora
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}
