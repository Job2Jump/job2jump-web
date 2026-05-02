import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <a href="/">
          <Image src="/logo.png" alt="Job2Jump" width={150} height={38} priority />
        </a>
        <div className="hidden md:flex items-center gap-8 text-[#000000] font-medium text-sm">
          <a href="/quienes-somos" className="hover:text-[#3BB54A] transition">Quiénes somos</a>
          <a href="/practicas" className="hover:text-[#3BB54A] transition">Soy talento joven</a>
          <a href="/empresas" className="hover:text-[#3BB54A] transition">Soy empresa</a>
          <a href="/faq" className="hover:text-[#3BB54A] transition">Preguntas frecuentes</a>
        </div>
        <a href="/sesion-gratuita" className="bg-[#3BB54A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#2ea03c] transition">
          Sesión gratuita
        </a>
      </div>
    </nav>
  );
}
