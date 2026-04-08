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
          <div className="hidden md:flex items-center gap-8 text-[#0F2B4A] font-medium text-sm">
            <a href="/quienes-somos" className="hover:text-[#3BB54A] transition">Quiénes somos</a>
            <a href="mailto:hola@job2jump.es" className="hover:text-[#3BB54A] transition">Contacto</a>
            <a href="#como-funciona" className="hover:text-[#3BB54A] transition">Cómo funciona</a>
            <a href="#precios" className="hover:text-[#3BB54A] transition">Precios</a>
          </div>
          <a href="mailto:hola@job2jump.es" className="bg-[#0F2B4A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#1a3d6b] transition">
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
        <div className="absolute inset-0 bg-[#0F2B4A]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-40 pb-20 w-full">

          {/* Título */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Para empresas
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Tu empresa crece<br />
              <span className="text-[#3BB54A]">con las personas correctas.</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              Encontrar personas con ganas de crecer, ambición e ilusión no es cuestión de publicar una oferta. Es un proceso especializado que consume tiempo, conocimiento y recursos que la mayoría de pymes no tiene.
            </p>
            <a href="mailto:hola@job2jump.es" className="inline-block bg-[#3BB54A] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#2ea03c] transition shadow-lg">
              Quiero incorporar talento
            </a>
          </div>

          {/* Beneficios clave */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            {[
              { valor: "Solo éxito", label: "pagas si contratas" },
              { valor: "26-30h", label: "ahorradas por proceso" },
              { valor: "2-4", label: "duración media del proceso" },
              { valor: "100%", label: "garantía de sustitución" },
              { valor: "Mínimo 3", label: "candidatos filtrados" },
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
                  desc: "Redactar la oferta, publicar, cribar CVs, llamadas, entrevistas... Horas que el gerente de una pyme no tiene.",
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


      {/* LO QUE NOSOTROS HACEMOS */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">La solución</span>
            <h2 className="text-4xl font-bold text-[#0F2B4A] mt-3">Lo que hacemos por ti</h2>
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
                  <h3 className="text-lg font-bold text-[#0F2B4A] mb-2">{item.titulo}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AYUDAS DEL ESTADO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Ayudas a la contratación</span>
            <h2 className="text-4xl font-bold text-[#0F2B4A] mt-3">Contratar bien puede costarte<br />casi nada</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Existen bonificaciones estatales y subvenciones de la Comunidad de Madrid que reducen drásticamente el coste de contratar jóvenes. La mayoría de pymes no sabe que existen — nosotros sí, y te acompañamos.
            </p>
          </div>

          {/* Combinación estrella */}
          <div className="bg-[#0F2B4A] rounded-3xl p-8 md:p-12 mb-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#3BB54A] rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
                Combinacion optima
              </span>
              <p className="text-white/60 text-sm mb-2">Contrato de formación en alternancia + Subvención CM Línea 4</p>
              <p className="text-7xl md:text-8xl font-bold text-[#3BB54A] mb-4">14.000€</p>
              <p className="text-white text-lg font-semibold mb-2">de ahorro en los primeros 3 años por empleado</p>
              <p className="text-white/50 text-sm max-w-xl mx-auto">
                Cuota de Seguridad Social casi a 0 durante 2 años + 5.500€ directos a fondo perdido de la Comunidad de Madrid.
              </p>
            </div>
          </div>

          {/* 3 opciones */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                tipo: "Contrato indefinido",
                label: "Garantía Juvenil baja cualificación",
                ahorro: "15.400€",
                detalle: "275€/mes durante 3 años en bonificaciones SS (9.900€) + 5.500€ subvención directa CM",
                plazo: "3 años",
              },
              {
                tipo: "Formación en alternancia",
                label: "El más potente",
                ahorro: "14.000€",
                detalle: "Cuota SS casi a 0 (bonificación 119€/mes) + 5.500€ directos Comunidad de Madrid Línea 4",
                plazo: "Hasta 2 años",
                destacado: true,
              },
              {
                tipo: "Prácticas + conversión indefinido",
                label: "Combinación formativa",
                ahorro: "7.000€",
                detalle: "500€/año durante 3 años al convertir el contrato + 5.500€ subvención CM Línea 3",
                plazo: "3 años",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-6 border-2 ${item.destacado ? "border-[#3BB54A] bg-[#3BB54A]/5" : "border-gray-100 bg-[#F0F4F8]"}`}>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${item.destacado ? "text-[#3BB54A]" : "text-gray-400"}`}>{item.tipo}</p>
                <p className="text-sm text-gray-600 mb-4">{item.label}</p>
                <p className="text-4xl font-bold text-[#0F2B4A] mb-3">{item.ahorro}</p>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{item.detalle}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3BB54A]"></div>
                  <p className="text-xs text-gray-400">Vigente hasta 31/12/2026</p>
                </div>
              </div>
            ))}
          </div>

          {/* Requisito Garantía Juvenil */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-amber-800 text-sm mb-1">Requisito clave: Garantía Juvenil</p>
              <p className="text-amber-700 text-xs leading-relaxed">
                El candidato debe estar inscrito en el Sistema Nacional de Garantía Juvenil <strong>el día anterior</strong> a la firma del contrato. Si se contrata primero, se pierde la ayuda. <strong>Job2Jump verifica esto antes de presentar al candidato.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Precios</span>
            <h2 className="text-4xl font-bold text-[#0F2B4A] mt-3">Claro, sencillo y sin sorpresas</h2>
            <p className="text-gray-500 mt-4">3 a 5 veces más barato que una consultora tradicional.</p>
          </div>
          <div className="bg-[#F0F4F8] rounded-2xl p-10 border border-gray-100">
            {/* Retainer — fila superior */}
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center w-full max-w-xs">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#3BB54A] mb-3">Retainer inicial</p>
                <p className="text-4xl font-bold text-[#0F2B4A] mb-3">100€</p>
                <p className="text-gray-400 text-xs leading-relaxed">Al arrancar el proceso. Se descuenta del success fee si hay contratación.</p>
              </div>
            </div>

            {/* Separador */}
            <div className="flex items-center justify-center mb-4">
              <p className="text-3xl font-bold text-[#3BB54A]">+</p>
            </div>

            {/* Success fees — fila inferior */}
            <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
              {[
                {
                  concepto: "Becario / prácticas",
                  precio: "250€",
                  desc: "Success fee al confirmar la incorporación. Retainer ya descontado.",
                },
                {
                  concepto: "Contrato junior",
                  precio: "400€",
                  desc: "Success fee al confirmar la incorporación. Retainer ya descontado.",
                },
                {
                  concepto: "Perfil senior",
                  precio: "850€",
                  desc: "Success fee para perfiles con experiencia. Proceso personalizado.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#3BB54A]/40 hover:shadow-md transition-all">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#3BB54A] mb-3">{item.concepto}</p>
                  <p className="text-4xl font-bold text-[#0F2B4A] mb-3">{item.precio}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mb-8">IVA no incluido</p>
            <div className="border-t border-gray-200 pt-8">
              <p className="text-center text-sm font-bold text-[#0F2B4A] mb-4">Incluido en todos los procesos:</p>
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
      <section className="py-24 bg-[#0F2B4A] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3BB54A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#3BB54A] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Listo para incorporar talento?
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Cuéntanos qué perfil necesitas. Te respondemos en menos de 24 horas.
          </p>
          <a href="mailto:hola@job2jump.es" className="inline-block bg-[#3BB54A] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg">
            Contactar ahora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#091e33] text-white py-12">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <Image src="/logo.png" alt="Job2Jump" width={130} height={33} />
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
