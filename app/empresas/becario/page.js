import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Becario/a en prácticas para tu empresa | Job2Jump",
  description: "Incorpora alumnos de FP en prácticas sin coste salarial. Gestionamos todo el proceso para pymes y startups. Trabajamos a éxito.",
};

export default function Becario() {
  return (
    <div className="min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="relative">
        <Image
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=80"
          alt="Profesional dando la mano a un joven candidato"
          fill
          className="object-cover blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-40 pb-20 w-full">

          <div className="text-center mb-16">
            <span className="inline-block bg-[#7A9E3B]/20 text-[#7A9E3B] border border-[#7A9E3B]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Tu equipo de selección, sin tenerlo en plantilla
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Incorpora talento joven.<br />
              <span className="text-[#7A9E3B]">Del resto nos encargamos.</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              Te conseguimos un <strong className="text-white">alumno en prácticas</strong> para tu pyme o negocio, con todo el proceso gestionado de principio a fin. Nosotros buscamos, filtramos y nos encargamos de todo — <strong className="text-white">tú solo eliges al candidato y solo pagas si te quedas con él.</strong>
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


      {/* BENEFICIOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Beneficios para tu negocio</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Lo que ganas al incorporar talento joven.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icono: "📈", titulo: "Más productividad", desc: "Suma manos a tu equipo y saca adelante más trabajo." },
              { icono: "🛡️", titulo: "Cero riesgo", desc: "Lo evalúas 3-4 meses antes de decidir si te lo quedas." },
              { icono: "💰", titulo: "Hasta 70% más barato que contratar", desc: "Sin contrato laboral, sin salario y con cotización a la Seguridad Social bonificada al 95%. Solo pagas lo justo por incorporar talento." },
              { icono: "🙌", titulo: "Liberas a tu equipo", desc: "Delega tareas y deja que tu gente se centre en lo importante." },
              { icono: "✨", titulo: "Aire nuevo y al día", desc: "Talento joven con formación actualizada y ganas de aportar." },
              { icono: "🎨", titulo: "Lienzo en blanco", desc: "Le enseñas a tu gusto y lo formas según tu manera de trabajar." },
            ].map((item, i) => (
              <div key={i} className="bg-[#F0F4F8] rounded-2xl p-8 hover:shadow-md transition-all">
                <span className="text-3xl mb-4 block">{item.icono}</span>
                <h3 className="text-base font-bold text-[#000000] mb-2">{item.titulo}</h3>
                <p className="text-sm text-[#000000] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* POR QUÉ EXISTIMOS */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Por qué existimos</span>
            <h2 className="text-4xl font-bold text-white mt-3">Buscar talento junior es un trabajo en sí mismo.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">01 — El problema</p>
              <div className="flex flex-col gap-4">
                {[
                  { titulo: "26-30h de gestión por proceso.", desc: "Publicar ofertas, filtrar CVs, entrevistar y gestionar el papeleo." },
                  { titulo: "Cantidad, no calidad.", desc: "Los portales de empleo dan volumen, no perfiles filtrados — y la empresa criba sola." },
                  { titulo: "¿Y quién te encuentra?", desc: "Sin marca conocida, cuesta llegar al talento joven y resultar atractivo frente a las grandes." },
                  { titulo: "Papeleo y convenios.", desc: "Abrir un convenio con un centro educativo es lento y tedioso si no sabes por dónde empezar." },
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
                  { titulo: "Convenio, no contrato.", desc: "Se formaliza con un convenio de prácticas formativas con el centro educativo, no una relación laboral." },
                  { titulo: "3-4 meses de trabajo real en tu empresa.", desc: "Tiempo suficiente para evaluar antes de decidir." },
                  { titulo: "Puedes contratarle después.", desc: "1 de cada 3 acaba en plantilla. La mejor prueba de trabajo que existe." },
                  { titulo: "Te quitamos el papeleo.", desc: "Gestionamos el convenio y los trámites con el centro educativo de principio a fin." },
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
              { icono: "💻", nombre: "Informática y desarrollo", desc: "Web, apps, sistemas y soporte técnico.", tags: ["Desarrollo web", "Apps móviles", "Sistemas IT", "Soporte técnico"], color: "bg-blue-50 border-blue-100" },
              { icono: "📣", nombre: "Marketing digital", desc: "Redes sociales, campañas y captación de leads.", tags: ["Redes sociales", "SEO/SEM", "Publicidad online", "Captación leads"], color: "bg-orange-50 border-orange-100" },
              { icono: "📊", nombre: "Administración y gestión", desc: "Facturas, contabilidad, RRHH y papeleo.", tags: ["Facturación", "Contabilidad", "RRHH", "Atención cliente"], color: "bg-purple-50 border-purple-100" },
              { icono: "🛒", nombre: "Comercial y logística", desc: "Ventas, pedidos, atención al cliente y almacén.", tags: ["Ventas", "Ecommerce", "Almacén", "Logística"], color: "bg-yellow-50 border-yellow-100" },
              { icono: "🔒", nombre: "Ciberseguridad y datos", desc: "El perfil más escaso y más demandado del mercado.", tags: ["Ciberseguridad", "Protección datos", "Cloud", "Big Data"], color: "bg-red-50 border-red-100" },
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
            <p className="text-[#000000] mt-4 max-w-xl mx-auto">En 2-4 semanas tienes a tu persona.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: "01", titulo: "Nos cuentas qué necesitas", desc: "Llamada de 15-20 minutos para el briefing: qué perfil, qué funciones, qué esperas." },
              { num: "02", titulo: "Buscamos y filtramos", desc: "Publicamos, cribamos CVs y hacemos las primeras entrevistas. Sin que muevas un dedo." },
              { num: "03", titulo: "Te presentamos los mejores", desc: "Recibes entre 3 y 4 candidatos ya filtrados. Tú decides si haces la entrevista final solo o con nosotros." },
              { num: "04", titulo: "Gestionamos todo el papeleo", desc: "Convenio de prácticas, papeles y trámites con el centro educativo. Todo gestionado." },
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
            <p className="text-[#000000] text-sm mt-2">Solo pagas si incorporas. Sin resultados, solo pierdes el retainer.</p>
          </div>
          <div className="bg-[#7A9E3B] rounded-2xl p-10 text-white text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1">Nuestro servicio</p>
            <p className="text-2xl font-bold mb-4">Alumno en prácticas</p>
            <p className="text-7xl font-bold mb-2">350€</p>
            <p className="text-white/80 text-sm mb-8">+ IVA · Solo pagas si incorporas</p>
            <p className="text-white/70 text-sm mb-6">Incorpora talento joven mediante prácticas formativas. Nos encargamos de la selección, de la gestión del convenio con el centro educativo y de su incorporación.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm border-t border-white/20 pt-6">
              <div className="flex-1 text-center">
                <p className="text-2xl font-bold">100€</p>
                <p className="text-white/70 text-xs mt-1">retainer para iniciar el proceso</p>
              </div>
              <div className="flex items-center justify-center text-white/40 font-bold text-xl">+</div>
              <div className="flex-1 text-center">
                <p className="text-2xl font-bold">250€</p>
                <p className="text-white/70 text-xs mt-1">selección, gestión con el centro e incorporación</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { titulo: "Garantía de sustitución", desc: "Si el candidato no encaja, lo reemplazamos sin coste durante el primer mes." },
              { titulo: "Solo pagas si incorporas", desc: "Trabajamos a éxito. El retainer se descuenta del total." },
              { titulo: "Gestión de documentación", desc: "Convenio, papeles y trámites, todo gestionado de principio a fin." },
              { titulo: "3-4 candidatos filtrados", desc: "Hacemos las entrevistas previas por ti y contigo." },
              { titulo: "Encontramos tu mirlo blanco", desc: "El candidato ideal en 2-4 semanas, no en meses." },
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


      {/* DATOS OFICIALES */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#7A9E3B] font-semibold uppercase tracking-widest text-xs">Datos oficiales</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">El mercado de talento joven en España</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {[
              { valor: "+940.000", label: "alumnos matriculados en FP en España", fuente: "Ministerio de Educación, curso 2022-23" },
              { valor: "100%", label: "de los alumnos de FP deben hacer prácticas para titular", fuente: "RD 659/2023 — Ley Orgánica de FP" },
              { valor: "28%", label: "tasa de paro juvenil en España (menores de 25 años)", fuente: "Eurostat, 2024" },
              { valor: "+3M", label: "pymes en España, el 99,8% del tejido empresarial", fuente: "INE / Retrato de las pymes 2023" },
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
              <p className="text-[#7A9E3B] text-xs font-semibold uppercase tracking-widest mb-3">El coste real de contratar</p>
              <p className="text-3xl font-bold mb-2">1.200€ – 2.000€</p>
              <p className="text-white/80 text-sm leading-relaxed mb-2">Es lo que cuesta de media un proceso de selección para una pyme cuando se externaliza con una consultora tradicional de RRHH.</p>
              <p className="text-white/50 text-xs italic">SHRM / informes sectoriales RRHH España</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="text-[#7A9E3B] text-xs font-semibold uppercase tracking-widest mb-3">FP: el perfil más empleable</p>
              <p className="text-3xl font-bold text-[#000000] mb-2">76% de empleabilidad</p>
              <p className="text-[#000000] text-sm leading-relaxed mb-2">Los titulados de FP tienen una de las tasas de inserción laboral más altas de España, por encima de muchas titulaciones universitarias.</p>
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
