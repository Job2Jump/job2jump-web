import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Política de privacidad — Job2Jump",
  description: "Información sobre el tratamiento de datos personales en Job2Jump, conforme al Reglamento General de Protección de Datos (RGPD) y la LOPD-GDD.",
};

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-40 pb-24 max-w-3xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-[#000000] mb-2">Política de privacidad</h1>
        <p className="text-gray-400 text-sm mb-12">Última actualización: mayo de 2026</p>

        <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-10">

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">1. Responsable del tratamiento</h2>
            <p>
              <strong>Razón social:</strong> [NOMBRE DE LA SL] <br />
              <strong>CIF:</strong> [CIF] <br />
              <strong>Domicilio social:</strong> [DIRECCIÓN COMPLETA] <br />
              <strong>Email de contacto:</strong> <a href="mailto:hola@job2jump.es" className="text-[#3BB54A] hover:underline">hola@job2jump.es</a> <br />
              <strong>Web:</strong> www.job2jump.es
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">2. Datos que recogemos</h2>
            <p>A través del formulario de sesión gratuita recogemos:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nombre</li>
              <li>Dirección de correo electrónico</li>
              <li>Información sobre tu situación profesional (edad, estudios, qué buscas)</li>
            </ul>
            <p className="mt-3">No recogemos datos especialmente sensibles ni datos de menores de 14 años.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">3. Finalidad del tratamiento</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Preparar y gestionar tu sesión de orientación laboral gratuita.</li>
              <li>Enviarte información sobre nuestros servicios si nos das tu consentimiento expreso.</li>
              <li>Darte seguimiento personalizado durante el proceso de búsqueda de empleo o prácticas.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">4. Base jurídica</h2>
            <p>
              El tratamiento se basa en el consentimiento del interesado (art. 6.1.a del RGPD), que se otorga al enviar el formulario de solicitud de sesión gratuita. Puedes retirar tu consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento previo.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">5. Plazo de conservación</h2>
            <p>
              Conservamos tus datos mientras dure la relación de servicio contigo y, una vez finalizada, durante los plazos legalmente establecidos (máximo 3 años para datos de contacto con fines comerciales, conforme a la LOPD-GDD).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">6. Destinatarios</h2>
            <p>
              No cedemos tus datos a terceros, salvo obligación legal. Podemos utilizar herramientas de terceros para la gestión de citas (Calendly) y comunicaciones (email), que actúan como encargados del tratamiento bajo los términos de sus propias políticas de privacidad.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">7. Tus derechos</h2>
            <p>Puedes ejercer en cualquier momento los siguientes derechos:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti.</li>
              <li><strong>Rectificación:</strong> corregir datos incorrectos o incompletos.</li>
              <li><strong>Supresión:</strong> solicitar que borremos tus datos.</li>
              <li><strong>Limitación:</strong> pedir que restrinjamos el tratamiento.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento en determinados casos.</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, escríbenos a <a href="mailto:hola@job2jump.es" className="text-[#3BB54A] hover:underline">hola@job2jump.es</a> indicando tu nombre, derecho que deseas ejercer y, si lo tienes, documento acreditativo de identidad. Responderemos en el plazo máximo de un mes.
            </p>
            <p className="mt-3">
              Si consideras que el tratamiento de tus datos no es conforme a la normativa, puedes presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#3BB54A] hover:underline">www.aepd.es</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">8. Cookies</h2>
            <p>
              Esta web puede utilizar cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento ni publicidad de terceros. Si en el futuro incorporamos cookies analíticas o de marketing, actualizaremos esta política e informaremos mediante el aviso correspondiente.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#000000] mb-3">9. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política de privacidad cuando sea necesario. Cualquier cambio relevante se comunicará a través de la web. Te recomendamos revisarla periódicamente.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
