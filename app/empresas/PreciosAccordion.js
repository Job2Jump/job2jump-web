"use client";
import { useState } from "react";

const caminos = [
  {
    id: "A",
    titulo: "Camino A — Primero prácticas, luego decides",
    resumen: "Incorporas al alumno en prácticas. Sin salario. Sin coste salarial.",
    precio: "250€",
    nota: "Retainer ya descontado · Sin coste salarial",
    detalle: "Al incorporar al alumno en prácticas abonas 250€ (el retainer inicial ya va descontado). El alumno hace entre 3 y 4 meses en tu empresa sin salario. Si luego decides contratarle, puedes hacerlo sin coste adicional.",
    border: "border-[#3BB54A]",
    badgeColor: "text-[#3BB54A]",
  },
  {
    id: "B",
    titulo: "Camino B — Contrato junior directo",
    resumen: "Buscamos un perfil junior para incorporarlo con contrato desde el primer día.",
    precio: "400€",
    nota: "Retainer ya descontado",
    detalle: "Si lo que necesitas es un perfil junior con contrato laboral desde el inicio, buscamos, filtramos y te presentamos candidatos listos para incorporarse. Pagas 400€ al formalizar la incorporación (retainer descontado).",
    border: "border-gray-200",
    badgeColor: "text-[#3BB54A]",
  },
];

export default function PreciosAccordion() {
  const [abierto, setAbierto] = useState(null);

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-4">
      {caminos.map((c) => {
        const isOpen = abierto === c.id;
        return (
          <div
            key={c.id}
            className={`bg-white rounded-2xl border-2 ${c.border} overflow-hidden transition-all`}
          >
            <button
              onClick={() => setAbierto(isOpen ? null : c.id)}
              className="w-full text-left p-6 flex items-start justify-between gap-4"
            >
              <div>
                <p className={`text-xs font-semibold uppercase tracking-widest ${c.badgeColor} mb-1`}>
                  Camino {c.id}
                </p>
                <p className="text-sm font-bold text-[#000000] mb-1">{c.titulo.split("—")[1].trim()}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{c.resumen}</p>
              </div>
              <div className="flex flex-col items-end flex-shrink-0 gap-1">
                <p className="text-2xl font-bold text-[#000000]">{c.precio}</p>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{c.detalle}</p>
                <p className="text-xs text-[#3BB54A] font-medium">{c.nota}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
