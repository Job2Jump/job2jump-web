import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { nombre, email, telefono, perfil } = await request.json();

  if (!nombre || !email || !telefono || !perfil) {
    return Response.json({ ok: false, error: "Faltan campos" }, { status: 400 });
  }

  const perfilTexto = {
    empresa: "Empresa — busca talento joven",
    practicas: "Joven — busca prácticas",
    empleo: "Joven — busca trabajo o primer empleo",
  }[perfil] || perfil;

  try {
    await resend.emails.send({
      from: "Job2Jump Web <onboarding@resend.dev>",
      to: "hola@job2jump.es",
      replyTo: email,
      subject: `Nuevo contacto: ${nombre} (${perfilTexto})`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px">
          <h2 style="color:#000;margin-bottom:4px">Nuevo contacto desde la web</h2>
          <p style="color:#888;font-size:13px;margin-top:0">Formulario "Te llamamos" — job2jump.es</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <table style="width:100%;font-size:14px;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#555;width:120px">Nombre</td><td style="padding:8px 0;font-weight:600;color:#000">${nombre}</td></tr>
            <tr><td style="padding:8px 0;color:#555">Perfil</td><td style="padding:8px 0;font-weight:600;color:#3BB54A">${perfilTexto}</td></tr>
            <tr><td style="padding:8px 0;color:#555">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#3BB54A">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#555">Teléfono</td><td style="padding:8px 0;font-weight:600;color:#000">${telefono}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p style="color:#aaa;font-size:12px">Responde directamente a este email para contactar con ${nombre}.</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
