import "./globals.css";

export const metadata = {
  title: "Job2Jump — Tu primer salto profesional",
  description: "Conectamos talento joven con empresas. Selección personalizada, acompañamiento real y resultados garantizados.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
