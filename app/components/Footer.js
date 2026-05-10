import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <Image src="/logo.png" alt="Job2Jump" width={130} height={33} />
          <p className="text-[#000000] text-sm">© 2026 Job2Jump. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-sm text-[#000000]">
            <a href="mailto:hola@job2jump.es" className="hover:text-white transition">hola@job2jump.es</a>
            <a href="https://instagram.com/job2jump" className="hover:text-white transition">Instagram</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-center gap-6 text-xs text-[#000000]">
          <a href="/privacidad" className="hover:text-[#000000] transition">Política de privacidad</a>
          <a href="/aviso-legal" className="hover:text-[#000000] transition">Aviso legal</a>
        </div>
      </div>
    </footer>
  );
}
