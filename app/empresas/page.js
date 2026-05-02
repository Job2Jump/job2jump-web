import Image from "next/image";

export default function Empresas() {
  return (
    <div className="min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <a href="/">
            <Image src="/logo.png" alt="Job2Jump" width={150} height={38} priority />
          </a>
          <div className="hidden md:flex items-center gap-8 text-[#000000] font-medium text-sm">
            <a href="/quienes-somos" className="hover:text-[#3BB54A] transition">Quiénes somos</a>
            <a href="mailto:hola@job2jump.es" className="hover:text-[#3BB54A] transition">Contacto</a>
            <a href="#como-funciona" className="hover:text-[#3BB54A] transition">Cómo funciona</a>
            <a href="#precios" className="hover:text-[#3BB54A] transition">Precios</a>
          </div>
          <a href="mailto:hola@job2jump.es" className="bg-[#000000] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#222222] transition">
            Contactar
          </a>
        </div>
      </nav>

      {/* HERO + DATOS */}
      <section className="relative">
        <Image
          src="/empresas-hero.jpg"
          alt="Equipo de trabajo en empresa"
          fill
          className="object-cover blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-40 pb-20 w-full">

          {/* Título */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Para pymes y startups · Perfiles FP y junior sin coste salarial
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Talento joven en tu empresa.<br />
              <span className="text-[#3BB54A]">Sin salario. Sin papeleo. Sin complicaciones.</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              Conectamos tu pyme o startup con alumnos de FP que necesitan hacer prácticas. Sin coste salarial para ti, sin trámites burocráticos — nosotros gestionamos todo. Tú solo recibes el perfil y decides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hola@job2jump.es" className="inline-block bg-[#3BB54A] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#2ea03c] transition shadow-lg">
                Quiero un alumno de FP
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
                <p className="text-xl font-bold text-[#3BB54A]">{item.valor}</p>
                <p className="text-xs text-white/60 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Datos */}
          <div className="mb-4">
            <p className="text-center text-white/50 text-xs font-semibold uppercase tracking-widest mb-8">La realidad del mercado laboral español</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                {
                  dato: "80%",
                  titulo: "de las pymes no encuentran lo que buscan",
                  desc: "8 de cada 10 pymes españolas tienen dificultades para cubrir sus vacantes con perfiles adecuados.",
                  fuente: "ManpowerGroup 2024",
                },
                {
                  dato: "10%",
                  titulo: "de empresas consigue el perfil adecuado",
                  desc: "Solo 1 de cada 10 empresas logra cubrir la vacante con el candidato correcto. El 90% restante falla o se conforma.",
                  fuente: "Hays, Guía del Mercado Laboral 2025",
                },
                {
                  dato: "22-26h",
                  titulo: "consume un proceso de selección interno",
                  desc: "Redactar la oferta, publicar, cribar CVs, llamadas, entrevistas... Horas que el gerente de una pyme o startup no tiene.",
                  fuente: "InfoJobs RRHH",
                },
                {
                  dato: "7.400€",
                  titulo: "cuesta de media reemplazar a un empleado",
                  desc: "Cada vez que una contratación no funciona y hay que repetir el proceso, la empresa pierde 7.400€ de golpe.",
                  fuente: "Ricoh / CEBR",
                },
                {
                  dato: "17%",
                  titulo: "de digitalización en pymes vs 54% en grandes",
                  desc: "La brecha digital entre pymes y grandes empresas es enorme. Incorporar talento joven es la vía más rápida y barata de cerrarla.",
                  fuente: "Ministerio de Industria / España Digital 2026",
                },
                {
                  dato: "407.900",
                  titulo: "jóvenes cualificados sin trabajo en España",
                  desc: "El problema no es que no haya candidatos. Es que nadie los está conectando con las pymes que los necesitan.",
                  fuente: "INE / EPA 2025",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <p className="text-4xl font-bold text-[#3BB54A] mb-2">{item.dato}</p>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">{item.titulo}</h3>
                  <p className="text-white/60 text-xs leading-relaxed mb-3">{item.desc}</p>
                  <p className="text-xs text-white/40 font-medium">Fuente: {item.fuente}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* LÍNEA FP — SIN COSTE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Nueva línea de servicio</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Talento FP en tu empresa.<br />Sin coste salarial.</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Conectamos tu pyme o startup con alumnos de Formación Profesional que necesitan hacer prácticas. Tú recibes un perfil formado, motivado y listo para aprender. Nosotros gestionamos todo el papeleo.
            </p>
          </div>

          {/* Dos modalidades */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#F0F4F8] rounded-2xl p-8 border-2 border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#3BB54A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#3BB54A]">Prácticas en empresa — Obligatorias para titular</p>
                  <p className="text-xs text-gray-400">El modelo más sencillo</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-3">Coste para la empresa: 0 €</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                El alumno ya ha terminado su formación teórica. Viene a tu empresa entre 3 y 4 meses (380-410 horas) a aplicar lo aprendido. Sin salario, sin contrato. Solo firmas un convenio de colaboración con el instituto — nosotros lo tramitamos.
              </p>
              <ul className="space-y-2">
                {["Sin salario ni contrato laboral", "La SS la cubre el Estado, no tú", "Disponible en todos los ciclos FP", "Posibilidad de contratarle al terminar"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-4 h-4 rounded-full bg-[#3BB54A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#000000] rounded-2xl p-8 border-2 border-[#3BB54A] relative">
              <span className="absolute -top-3 left-8 bg-[#3BB54A] text-white text-xs font-bold px-4 py-1 rounded-full">Para empresas que quieren retener</span>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#3BB54A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#3BB54A]">FP Dual — Formación en alternancia</p>
                  <p className="text-xs text-gray-400">El modelo para fidelizar talento</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lo formas a tu imagen durante 1-2 años</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                El alumno alterna empresa e instituto desde el principio del ciclo. Hasta 30h/semana en tu empresa. Sin contrato: coste 0€. Con contrato de alternancia: 60-75% del SMI + bonificaciones en SS que reducen el coste casi a cero.
              </p>
              <ul className="space-y-2">
                {["1-2 años para conocerle a fondo", "Lo moldeas desde el día 1", "Sin obligación de contratar al terminar", "Mejor que cualquier periodo de prueba"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-4 h-4 rounded-full bg-[#3BB54A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Perfiles más demandados */}
          <div className="bg-[#F0F4F8] rounded-2xl p-8 mb-12">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Perfiles FP que más buscan las pymes</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {[
                { icono: "💻", nombre: "Informática", ciclos: "DAM · DAW · ASIR" },
                { icono: "📊", nombre: "Administración", ciclos: "Gestión · RRHH · Marketing" },
                { icono: "⚡", nombre: "Electricidad", ciclos: "Instalaciones · Mantenimiento" },
                { icono: "🛒", nombre: "Comercio", ciclos: "Comercio · Ecommerce" },
                { icono: "🏥", nombre: "Sanidad", ciclos: "Aux. Enfermería · Farmacia" },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-4">
                  <p className="text-2xl mb-2">{p.icono}</p>
                  <p className="text-sm font-bold text-[#000000]">{p.nombre}</p>
                  <p className="text-xs text-gray-400 mt-1 leading-snug">{p.ciclos}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dato clave */}
          <div className="bg-[#3BB54A] rounded-2xl p-8 text-center text-white">
            <p className="text-5xl font-bold mb-3">1 de cada 3</p>
            <p className="text-lg font-semibold mb-2">alumnos en prácticas acaba contratado por la misma empresa</p>
            <p className="text-white/70 text-sm max-w-xl mx-auto">
              Las prácticas en empresa son la mejor prueba de trabajo que existe: 3-4 meses viendo cómo trabaja alguien de verdad, antes de comprometerte. Job2Jump te lleva hasta ahí sin que muevas un dedo.
            </p>
          </div>
        </div>
      </section>

      {/* LO QUE NOSOTROS HACEMOS */}
      <section id="como-funciona" className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">La solución</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Lo que hacemos por ti</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Somos tu departamento de selección de talento joven externo. Tú te dedicas a tu negocio.</p>
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
                <span className="text-5xl font-bold text-[#3BB54A]/20 leading-none flex-shrink-0">{item.num}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#000000] mb-2">{item.titulo}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Precios</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Claro, sencillo y sin sorpresas</h2>
            <p className="text-gray-500 mt-4">3 a 5 veces más barato que una consultora tradicional.</p>
          </div>
          <div className="bg-[#F0F4F8] rounded-2xl p-10 border border-gray-100">
            {/* Retainer — fila superior */}
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center w-full max-w-xs">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#3BB54A] mb-3">Retainer inicial</p>
                <p className="text-4xl font-bold text-[#000000] mb-3">100€</p>
                <p className="text-gray-400 text-xs leading-relaxed">Al arrancar el proceso. Se descuenta del success fee si hay contratación.</p>
              </div>
            </div>

            {/* Separador */}
            <div className="flex items-center justify-center mb-4">
              <p className="text-3xl font-bold text-[#3BB54A]">+</p>
            </div>

            {/* Success fees — fila inferior */}
            <div className="grid md:grid-cols-2 gap-6 text-center mb-6 max-w-2xl mx-auto">
              {[
                {
                  concepto: "Alumno FP · Prácticas o Dual",
                  precio: "250€",
                  desc: "Sin coste salarial para la empresa. Nosotros buscamos al alumno y gestionamos todo el convenio. Retainer ya descontado.",
                },
                {
                  concepto: "Contrato junior",
                  precio: "400€",
                  desc: "Success fee al confirmar la incorporación. Retainer ya descontado.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#3BB54A]/40 hover:shadow-md transition-all">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#3BB54A] mb-3">{item.concepto}</p>
                  <p className="text-4xl font-bold text-[#000000] mb-3">{item.precio}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mb-8">IVA no incluido</p>
            <div className="border-t border-gray-200 pt-8">
              <p className="text-center text-sm font-bold text-[#000000] mb-4">Incluido en todos los procesos:</p>
              <div className="grid md:grid-cols-2 gap-3 max-w-xl mx-auto">
                {[
                  "Garantía de sustitución gratuita",
                  "Gestión completa de la documentación",
                  "3-4 candidatos filtrados por proceso",
                  "Proceso completo en 2-4 semanas",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#3BB54A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
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
            ¿Listo para incorporar talento?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Cuéntanos qué perfil necesitas. Te respondemos en menos de 24 horas.
          </p>
          <a href="mailto:hola@job2jump.es" className="inline-block bg-[#3BB54A] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg">
            Contactar ahora
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
