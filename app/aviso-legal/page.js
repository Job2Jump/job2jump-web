import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Aviso legal — Job2Jump",
  description: "Aviso legal de Job2Jump conforme a la Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).",
};

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-40 pb-24 max-w-3xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-[#000000] mb-2">Aviso legal</h1>
        <p className="text-[#000000] text-sm mb-12">Última actualización: mayo de 2026</p>

        <div className="prose prose-sm max-w-none text-[#000000] leading-relaxed space-y-10">

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">1. Datos identificativos del titular</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:
            </p>
            <p className="mt-3">
              <strong>Razón social:</strong> [NOMBRE DE LA SL] <br />
              <strong>CIF:</strong> [CIF] <br />
              <strong>Domicilio social:</strong> [DIRECCIÓN COMPLETA] <br />
              <strong>Email:</strong> <a href="mailto:hola@job2jump.es" className="text-[#3BB54A] hover:underline">hola@job2jump.es</a> <br />
              <strong>Sitio web:</strong> www.job2jump.es
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">2. Objeto y ámbito de aplicación</h2>
            <p>
              El presente aviso legal regula el acceso y uso del sitio web www.job2jump.es, titularidad de [NOMBRE DE LA SL]. El acceso y uso de este sitio implica la aceptación plena de las condiciones aquí establecidas. Si no estás de acuerdo con ellas, te rogamos que no utilices el sitio.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">3. Condiciones de uso</h2>
            <p>
              El usuario se compromete a hacer un uso adecuado de los contenidos y servicios del sitio y a no emplearlos para actividades ilícitas o contrarias a la buena fe. Queda prohibido:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Reproducir, copiar, distribuir o modificar los contenidos del sitio sin autorización expresa.</li>
              <li>Introducir o difundir virus informáticos o cualquier otro sistema que pueda dañar el sitio.</li>
              <li>Suplantar la identidad de otros usuarios o del equipo de Job2Jump.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">4. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos de este sitio web — textos, imágenes, logotipos, diseño gráfico y código fuente — son propiedad de [NOMBRE DE LA SL] o de terceros que han autorizado su uso, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.
            </p>
            <p className="mt-3">
              Queda expresamente prohibida la reproducción total o parcial de los contenidos sin autorización escrita previa del titular.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">5. Exclusión de garantías y responsabilidad</h2>
            <p>
              Job2Jump no garantiza la disponibilidad continua del sitio ni la ausencia de errores en su contenido. No nos responsabilizamos de los daños que puedan derivarse del uso del sitio, de interrupciones técnicas o de la presencia de virus u otros elementos dañinos.
            </p>
            <p className="mt-3">
              Los contenidos del sitio tienen carácter informativo general y no sustituyen el asesoramiento profesional personalizado.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">6. Política de enlaces</h2>
            <p>
              Este sitio puede contener enlaces a páginas web de terceros. Job2Jump no se hace responsable del contenido, la disponibilidad ni las políticas de privacidad de esos sitios externos. La inclusión de un enlace no implica ningún tipo de asociación o respaldo.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">7. Legislación aplicable y jurisdicción</h2>
            <p>
              El presente aviso legal se rige por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso de este sitio, las partes se someten a los juzgados y tribunales del domicilio del titular, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">8. Protección de datos</h2>
            <p>
              Para todo lo relativo al tratamiento de datos personales, consulta nuestra{" "}
              <a href="/privacidad" className="text-[#3BB54A] hover:underline">Política de privacidad</a>.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
