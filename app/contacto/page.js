"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(false);
  const [perfil, setPerfil] = useState("");
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const valido = form.nombre && form.email && form.telefono && perfil;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!valido) return;
    setEnviando(true);
    setError(false);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, perfil }),
      });
      if (res.ok) {
        setEnviado(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      <Navbar />

      <section className="pt-32 pb-24 min-h-screen flex items-center">
        <div className="max-w-lg mx-auto px-6 w-full">

          {!enviado ? (
            <div className="bg-white rounded-3xl shadow-sm p-10">
              <span className="inline-block bg-[#3BB54A]/10 text-[#3BB54A] border border-[#3BB54A]/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
                Sin compromiso · Gratis
              </span>
              <h1 className="text-3xl font-bold text-[#000000] mb-2 leading-tight">
                Te llamamos
              </h1>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Déjanos tus datos y nos ponemos en contacto contigo en menos de 24 horas.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Nombre */}
                <div>
                  <label className="block text-xs font-semibold text-[#000000] mb-1.5 uppercase tracking-wide">Nombre completo</label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre y apellidos"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3BB54A] focus:ring-1 focus:ring-[#3BB54A]"
                  />
                </div>

                {/* Perfil */}
                <div>
                  <label className="block text-xs font-semibold text-[#000000] mb-2 uppercase tracking-wide">¿Qué describes mejor tu situación?</label>
                  <div className="flex flex-col gap-2">
                    {[
                      { valor: "empresa", label: "Soy empresa", desc: "Busco talento joven o perfiles junior" },
                      { valor: "practicas", label: "Busco prácticas", desc: "Estoy estudiando y quiero prácticas en empresa" },
                      { valor: "empleo", label: "Busco trabajo", desc: "Quiero encontrar mi primer empleo o cambiar de trabajo" },
                    ].map((op) => (
                      <button
                        key={op.valor}
                        type="button"
                        onClick={() => setPerfil(op.valor)}
                        className={`text-left border rounded-xl px-4 py-3 transition ${
                          perfil === op.valor
                            ? "border-[#3BB54A] bg-[#3BB54A]/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <p className={`text-sm font-semibold ${perfil === op.valor ? "text-[#000000]" : "text-gray-700"}`}>{op.label}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{op.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#000000] mb-1.5 uppercase tracking-wide">Correo electrónico</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3BB54A] focus:ring-1 focus:ring-[#3BB54A]"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-xs font-semibold text-[#000000] mb-1.5 uppercase tracking-wide">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="+34 600 000 000"
                    value={form.telefono}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3BB54A] focus:ring-1 focus:ring-[#3BB54A]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!valido || enviando}
                  className={`w-full py-4 rounded-full font-semibold text-base transition mt-2 ${
                    valido && !enviando
                      ? "bg-[#3BB54A] text-white hover:bg-[#2ea03c]"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {enviando ? "Enviando..." : "Quiero que me llaméis"}
                </button>

                {error && (
                  <p className="text-center text-xs text-red-500">
                    Ha habido un error. Escríbenos a{" "}
                    <a href="mailto:hola@job2jump.es" className="underline">hola@job2jump.es</a>.
                  </p>
                )}

                <p className="text-center text-xs text-gray-400">
                  Al enviar este formulario aceptas nuestra{" "}
                  <a href="/privacidad" className="underline hover:text-gray-600">política de privacidad</a>.
                </p>
              </form>
            </div>

          ) : (
            <div className="bg-white rounded-3xl shadow-sm p-10 text-center">
              <div className="w-16 h-16 bg-[#3BB54A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#3BB54A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#000000] mb-3">¡Recibido, {form.nombre.split(" ")[0]}!</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Te llamamos en menos de 24 horas al número que nos has dejado. Si tienes cualquier urgencia, escríbenos a{" "}
                <a href="mailto:hola@job2jump.es" className="text-[#3BB54A] hover:underline">hola@job2jump.es</a>.
              </p>
              <a href="/" className="inline-block bg-[#000000] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#222] transition">
                Volver al inicio
              </a>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}
