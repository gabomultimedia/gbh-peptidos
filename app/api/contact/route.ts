import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const fromEmail = process.env.RESEND_FROM_EMAIL || "Q-PEPTIDES <no-reply@q-peptides.com>";

const recipients = ["info@q-peptides.com", "33552827.146274@parser.kommo.com"];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "Falta configurar RESEND_API_KEY en el servidor." },
      { status: 500 }
    );
  }

  const body = (await request.json().catch(() => null)) as
    | {
        fullName?: string;
        email?: string;
        phone?: string;
        license?: string;
        specialty?: string;
        institution?: string;
        comments?: string;
      }
    | null;

  const fullName = body?.fullName?.trim() || "";
  const email = body?.email?.trim() || "";
  const phone = body?.phone?.trim() || "";
  const license = body?.license?.trim() || "";
  const specialty = body?.specialty?.trim() || "";
  const institution = body?.institution?.trim() || "";
  const comments = body?.comments?.trim() || "";

  if (!fullName || !email || !phone || !license || !specialty) {
    return NextResponse.json(
      { error: "Completa nombre, correo, teléfono, cédula y especialidad." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "El correo electrónico no es válido." }, { status: 400 });
  }

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#003366">
      <h2 style="margin:0 0 16px">Nuevo registro profesional - Q-PEPTIDES</h2>
      <p style="margin:0 0 16px">Se recibió un nuevo formulario de registro para validación.</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:700px">
        <tr><td style="padding:8px 0;font-weight:bold;width:180px">Nombre completo</td><td style="padding:8px 0">${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Correo</td><td style="padding:8px 0">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Teléfono</td><td style="padding:8px 0">${escapeHtml(phone)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Cédula profesional</td><td style="padding:8px 0">${escapeHtml(license)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Especialidad</td><td style="padding:8px 0">${escapeHtml(specialty)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Clínica / institución</td><td style="padding:8px 0">${escapeHtml(institution || "-")}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;vertical-align:top">Comentarios</td><td style="padding:8px 0">${escapeHtml(comments || "-")}</td></tr>
      </table>
      <p style="margin:24px 0 0;font-size:12px;color:#4A657A">Origen: /contact · Q-PEPTIDES</p>
    </div>
  `;

  const text = [
    "Nuevo registro profesional - Q-PEPTIDES",
    "",
    `Nombre completo: ${fullName}`,
    `Correo: ${email}`,
    `Teléfono: ${phone}`,
    `Cédula profesional: ${license}`,
    `Especialidad: ${specialty}`,
    `Clínica / institución: ${institution || "-"}`,
    `Comentarios: ${comments || "-"}`,
    "",
    "Origen: /contact · Q-PEPTIDES",
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: recipients,
      replyTo: email,
      subject: `Nuevo registro profesional - ${fullName}`,
      html,
      text,
    });

    if (error) {
      const message =
        error.message?.includes("only send testing emails")
          ? "Resend sandbox solo permite enviar a info@q-peptides.com. Para enviar también a Kommo, verifica un dominio en Resend y define RESEND_FROM_EMAIL con ese correo verificado."
          : "No se pudo enviar el correo. Intenta de nuevo.";
      return NextResponse.json(
        { error: message },
        { status: error.message?.includes("only send testing emails") ? 403 : 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo enviar el correo. Intenta de nuevo." },
      { status: 502 }
    );
  }
}
