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

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="/empresas-hero.jpg"
          alt="Equipo de trabajo en empresa"
          fill
          className="object-cover blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-20 w-full">
          <div className="max-w-3xl mb-20">
            <span className="inline-block bg-[#3BB54A]/20 text-[#3BB54A] border border-[#3BB54A]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Para pymes y startups · Perfiles FP sin coste salarial
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Talento joven en tu empresa.<br />
              <span className="text-[#3BB54A]">Sin salario. Sin papeleo.</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Conectamos tu pyme o startup con alumnos de FP que necesitan hacer prácticas. Sin coste salarial, sin trámites — nosotros lo gestionamos todo. Tú solo decides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contacto" className="inline-block bg-[#3BB54A] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#2ea03c] transition shadow-lg text-center">
                Infórmate sin compromiso
              </a>
              <a href="#como-funciona" className="inline-block border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:border-white transition text-center">
                Cómo funciona
              </a>
            </div>
          </div>

          {/* Stats — tira horizontal sin cajas */}
          <div className="border-t border-white/20 pt-10 grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { valor: "0 €", label: "coste salarial en prácticas" },
              { valor: "26-30h", label: "de gestión que te ahorramos" },
              { valor: "1 de 3", label: "alumnos acaba contratado" },
              { valor: "100%", label: "garantía de sustitución" },
              { valor: "2-4 sem", label: "duración del proceso" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-[#3BB54A]">{item.valor}</p>
                <p className="text-xs text-white/50 mt-1 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COSTE 0€ — dos columnas, texto + lista */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#3BB54A] text-xs font-bold uppercase tracking-widest">Prácticas en empresa — Obligatorias para titular</span>
              <h2 className="text-4xl font-bold text-[#000000] mt-3 mb-5 leading-tight">
                Coste para<br />la empresa: 0 €
              </h2>
              <p className="text-[#000000] text-sm leading-relaxed mb-8">
                El alumno ya ha terminado su formación teórica. Viene a tu empresa entre 3 y 4 meses a aplicar lo aprendido. Sin salario, sin contrato laboral. Solo firmas un convenio de colaboración con el instituto — y eso lo tramitamos nosotros.
              </p>
              <a href="/contacto" className="inline-block bg-[#000000] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#222] transition">
                Infórmate sin compromiso
              </a>
            </div>
            <div className="space-y-6">
              {[
                { titulo: "Sin salario ni contrato", desc: "Cero coste salarial. Solo un convenio que tramitamos nosotros." },
                { titulo: "La Seguridad Social la paga el Estado", desc: "No sale de tu bolsillo. El alumno cotiza y tú no pagas nada." },
                { titulo: "3-4 meses reales de trabajo", desc: "Tiempo suficiente para ver cómo trabaja antes de decidir." },
                { titulo: "Puedes contratarle después", desc: "1 de cada 3 alumnos acaba en plantilla. La mejor prueba de trabajo." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="w-7 h-7 rounded-full bg-[#3BB54A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-[#3BB54A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#000000] text-sm mb-0.5">{item.titulo}</p>
                    <p className="text-sm text-[#000000]/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PERFILES — lista horizontal limpia */}
      <section className="py-20 bg-[#F0F4F8]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-10">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Perfiles disponibles</span>
            <h2 className="text-3xl font-bold text-[#000000] mt-2">¿Qué perfil necesitas?</h2>
            <p className="text-[#000000] text-sm mt-2">Los más solicitados por pymes y startups como la tuya</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden">
            {[
              { icono: "💻", nombre: "Informática y desarrollo", desc: "Web, apps, sistemas y soporte técnico.", tags: ["Desarrollo web", "Apps móviles", "Sistemas IT", "Soporte técnico"] },
              { icono: "📣", nombre: "Marketing digital", desc: "Redes sociales, campañas y captación de leads.", tags: ["Redes sociales", "SEO/SEM", "Publicidad online", "Captación leads"] },
              { icono: "📊", nombre: "Administración y gestión", desc: "Facturas, contabilidad, RRHH y papeleo.", tags: ["Facturación", "Contabilidad", "RRHH", "Atención cliente"] },
              { icono: "🛒", nombre: "Comercial y logística", desc: "Ventas, pedidos, atención al cliente y almacén.", tags: ["Ventas", "Ecommerce", "Almacén", "Logística"] },
              { icono: "🔒", nombre: "Ciberseguridad y datos", desc: "El perfil más escaso y más demandado del mercado.", tags: ["Ciberseguridad", "Protección datos", "Cloud", "Big Data"] },
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-6 px-8 py-5 border-b border-gray-100 last:border-0 hover:bg-[#F0F4F8] transition-colors">
                <span className="text-2xl w-8 flex-shrink-0">{p.icono}</span>
                <div className="w-52 flex-shrink-0">
                  <p className="font-bold text-[#000000] text-sm">{p.nombre}</p>
                  <p className="text-xs text-[#000000]/50 mt-0.5">{p.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-3 py-1 bg-[#F0F4F8] border border-gray-200 rounded-full text-[#000000]">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#000000]/50 mt-4 text-center">¿No encuentras tu perfil? Escríbenos — trabajamos con cualquier familia de FP.</p>
        </div>
      </section>

      {/* CÓMO FUNCIONA — timeline vertical */}
      <section id="como-funciona" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">El proceso</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">Lo que hacemos por ti</h2>
            <p className="text-[#000000] mt-4">Somos tu departamento de selección externo. Tú te dedicas a tu negocio.</p>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gray-200"></div>
            <div className="space-y-10">
              {[
                { titulo: "Entendemos exactamente lo que necesitas", desc: "Nos reunimos contigo para hacer un briefing detallado. Qué perfil, qué funciones, qué esperas. Sin eso, no empezamos." },
                { titulo: "Publicamos, filtramos y entrevistamos", desc: "Nos encargamos de todo el proceso: publicación en los canales adecuados, cribado de CVs y primeras entrevistas. Sin que muevas un dedo." },
                { titulo: "Te presentamos solo los mejores", desc: "Recibes entre 3 y 4 candidatos filtrados y preparados. Tú decides si haces la entrevista final solo o con nosotros." },
                { titulo: "Gestionamos toda la documentación", desc: "Convenio de prácticas, papeles, trámites. Todo gestionado. Tú solo firmas la incorporación." },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 relative">
                  <div className="w-10 h-10 rounded-full bg-[#3BB54A] flex items-center justify-center flex-shrink-0 relative z-10 text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="pt-1.5 pb-4">
                    <h3 className="font-bold text-[#000000] text-lg mb-2">{item.titulo}</h3>
                    <p className="text-sm text-[#000000]/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="py-20 bg-[#F0F4F8]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-10">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Precios</span>
            <h2 className="text-3xl font-bold text-[#000000] mt-2">Claro, sencillo y sin sorpresas</h2>
            <p className="text-[#000000] text-sm mt-2">Trabajamos a éxito. Solo pagas si incorporas.</p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
            {/* Retainer */}
            <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#3BB54A] mb-1">Retainer inicial</p>
                <p className="text-sm text-[#000000]/60">Se paga al arrancar · se descuenta del success fee si hay contratación</p>
              </div>
              <p className="text-4xl font-bold text-[#000000]">100€</p>
            </div>
            {/* Camino A */}
            <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-[#3BB54A]/5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#3BB54A] mb-1">Prácticas → luego decides</p>
                <p className="text-sm text-[#000000]/60">Incorporas al alumno en prácticas. Sin coste salarial. Retenemos 100€ del fee.</p>
              </div>
              <p className="text-4xl font-bold text-[#000000]">250€</p>
            </div>
            {/* Camino B */}
            <div className="px-8 py-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#000000] mb-1">Contrato junior directo</p>
                <p className="text-sm text-[#000000]/60">Contratas directamente. Retainer ya descontado.</p>
              </div>
              <p className="text-4xl font-bold text-[#000000]">400€</p>
            </div>
          </div>

          <p className="text-xs text-[#000000]/50 text-center mt-4 mb-6">Todos los precios sin IVA · Solo pagas si hay resultado</p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              "Garantía de sustitución gratuita",
              "Gestión completa de la documentación",
              "3-4 candidatos filtrados",
              "Proceso en 2-4 semanas",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[#000000]">
                <svg className="w-4 h-4 text-[#3BB54A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATOS */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-14">
            <span className="text-[#3BB54A] font-semibold uppercase tracking-widest text-xs">Datos oficiales</span>
            <h2 className="text-4xl font-bold text-[#000000] mt-3">El mercado de talento joven en España</h2>
          </div>

          {/* Stats — tira sin cajas */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden mb-10">
            {[
              { valor: "+940.000", label: "alumnos matriculados en FP", fuente: "Min. Educación 2022-23" },
              { valor: "100%", label: "de alumnos FP necesitan prácticas para titular", fuente: "RD 659/2023" },
              { valor: "28%", label: "tasa de paro juvenil en España", fuente: "Eurostat 2024" },
              { valor: "+3M", label: "pymes en España, el 99,8% del tejido empresarial", fuente: "INE 2023" },
            ].map((d, i) => (
              <div key={i} className="p-8 text-center">
                <p className="text-3xl font-bold text-[#000000] mb-2">{d.valor}</p>
                <p className="text-xs text-[#000000]/60 leading-snug mb-2">{d.label}</p>
                <p className="text-xs text-[#000000]/30 italic">{d.fuente}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#000000] rounded-2xl p-8">
              <p className="text-[#3BB54A] text-xs font-semibold uppercase tracking-widest mb-3">El coste real de contratar</p>
              <p className="text-3xl font-bold text-white mb-3">1.200€ – 2.000€</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Es lo que cuesta de media un proceso de selección con una consultora tradicional de RRHH. Job2Jump lo hace por 250-400€.
              </p>
            </div>
            <div className="bg-[#F0F4F8] rounded-2xl p-8">
              <p className="text-[#3BB54A] text-xs font-semibold uppercase tracking-widest mb-3">FP: el perfil más empleable</p>
              <p className="text-3xl font-bold text-[#000000] mb-3">76% de empleabilidad</p>
              <p className="text-[#000000]/70 text-sm leading-relaxed">
                Los titulados de FP tienen una de las tasas de inserción laboral más altas de España, por encima de muchas titulaciones universitarias.
              </p>
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
          <p className="text-white/70 text-lg mb-10">
            Cuéntanos qué perfil necesitas. Te respondemos en menos de 24 horas.
          </p>
          <a href="/contacto" className="inline-block bg-[#3BB54A] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg">
            Contactar ahora
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}
