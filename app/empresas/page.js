import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Para empresas | Job2Jump",
  description: "Incorpora talento a tu empresa con Job2Jump. Becarios en prácticas sin coste salarial o selección de talento junior y senior listo para incorporar.",
};

export default function Empresas() {
  return (
    <div className="min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="relative">
        <Image
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=80"
          alt="Equipo de trabajo en una oficina"
          fill
          className="object-cover blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/80"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-8 pt-40 pb-24 text-center">
          <span className="inline-block bg-[#7A9E3B]/20 text-[#7A9E3B] border border-[#7A9E3B]/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
            Tu equipo de selección, sin tenerlo en plantilla
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            El talento que tu negocio necesita.<br />
            <span className="text-[#7A9E3B]">Nosotros te lo encontramos.</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Dinos qué necesitas y nosotros nos encargamos de todo. <strong className="text-white">Solo pagas si incorporas.</strong>
          </p>
        </div>
      </section>


      {/* ELECCIÓN */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#000000]">¿Qué tipo de talento necesitas?</h2>
            <p className="text-[#000000] mt-3">Dos servicios distintos según lo que tu negocio necesite ahora.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* BECARIO */}
            <a href="/empresas/becario" className="group block bg-[#000000] rounded-2xl p-10 hover:scale-[1.02] transition-all duration-200 cursor-pointer">
              <div className="mb-6">
                <span className="inline-block bg-[#7A9E3B]/20 text-[#7A9E3B] border border-[#7A9E3B]/40 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
                  Prácticas FCT
                </span>
                <h3 className="text-3xl font-bold text-white mb-3">Busco becario/a</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Alumno de FP que hace sus prácticas en tu empresa. Sin coste salarial, sin contrato — solo un convenio con el instituto que gestionamos nosotros.
                </p>
              </div>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Sin salario ni contrato laboral",
                  "SS bonificada al 95% — coste casi cero",
                  "3-4 meses de trabajo real antes de decidir",
                  "1 de cada 3 acaba contratado",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#7A9E3B] flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Precio total</p>
                  <p className="text-3xl font-bold text-white">350€ <span className="text-sm font-normal text-white/60">+ IVA</span></p>
                </div>
                <span className="bg-[#7A9E3B] text-white px-6 py-3 rounded-full font-semibold text-sm group-hover:bg-[#2ea03c] transition">
                  Ver más →
                </span>
              </div>
            </a>

            {/* TALENTO */}
            <a href="/empresas/talento" className="group block bg-[#F0F4F8] border-2 border-[#000000] rounded-2xl p-10 hover:scale-[1.02] transition-all duration-200 cursor-pointer">
              <div className="mb-6">
                <span className="inline-block bg-[#000000]/10 text-[#000000] border border-[#000000]/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
                  Contratación directa
                </span>
                <h3 className="text-3xl font-bold text-[#000000] mb-3">Busco talento junior / senior</h3>
                <p className="text-[#000000]/70 text-sm leading-relaxed">
                  Profesional recién titulado o con experiencia para incorporar directamente a tu plantilla desde el primer día.
                </p>
              </div>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Búsqueda activa, no solo portales",
                  "Junior (hasta 2 años) o Senior (3+ años)",
                  "Negociación salarial y onboarding incluidos",
                  "Garantía de 3 meses si no encaja",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#000000] flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-sm text-[#000000]/80">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-[#000000]/10 pt-6">
                <div>
                  <p className="text-xs text-[#000000]/40 uppercase tracking-widest mb-1">Precio total</p>
                  <p className="text-3xl font-bold text-[#000000]">450€ <span className="text-sm font-normal text-[#000000]/60">+ IVA</span></p>
                </div>
                <span className="bg-[#000000] text-white px-6 py-3 rounded-full font-semibold text-sm group-hover:bg-[#333] transition">
                  Ver más →
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>


      {/* LO QUE NOS RESPALDA */}
      <section className="py-16 bg-[#F0F4F8]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { valor: "+8", label: "años de experiencia en selección en consultoras internacionales" },
              { valor: "+150", label: "pymes y startups que ya han incorporado talento con nosotros" },
              { valor: "+500", label: "jóvenes orientados y colocados en su primer empleo o prácticas" },
              { valor: "1:1", label: "Trato humano y personalizado. No somos una base de datos" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-[#7A9E3B]">{item.valor}</p>
                <p className="text-xs text-[#000000] mt-2 leading-snug">{item.label}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¿No sabes por dónde empezar?</h2>
          <p className="text-white/80 text-lg mb-10">Cuéntanos qué necesitas en una llamada de 15 minutos. Te orientamos sin compromiso.</p>
          <a href="mailto:hola@job2jump.es" className="inline-block bg-[#7A9E3B] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#2ea03c] transition shadow-lg">
            Contactar ahora
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}
