import "./globals.css";

export const metadata = {
  title: "Job2Jump — Prácticas y primer empleo para jóvenes | Talento FP para pymes",
  description: "Job2Jump conecta jóvenes que buscan prácticas o primer empleo con pymes y startups que necesitan talento FP. Sin coste salarial para la empresa. Orientación laboral personalizada para jóvenes.",
  keywords: "prácticas empresa, buscar prácticas, primer empleo joven, formación profesional prácticas, FP prácticas empresa, talento junior pymes, becarios empresa España, orientación laboral jóvenes, agencia selección pymes, trabajo joven España",
  openGraph: {
    title: "Job2Jump — Prácticas y primer empleo para jóvenes",
    description: "Conectamos jóvenes que buscan prácticas o primer empleo con pymes y startups. Sin coste salarial. Orientación laboral real.",
    url: "https://www.job2jump.es",
    siteName: "Job2Jump",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
