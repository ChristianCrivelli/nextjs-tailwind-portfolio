import { NextResponse } from 'next/server';

// Sends contact-form submissions via Resend (https://resend.com) instead of
// exposing an email address anywhere in the site's code or HTML. Requires
// two environment variables set in Vercel (Project Settings → Environment
// Variables), never committed to the repo:
//   RESEND_API_KEY — API key from your Resend account
//   CONTACT_EMAIL  — the address you actually want messages delivered to
//
// Neither value is visible to visitors: this file only runs on the server.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    console.error('Contact form: missing RESEND_API_KEY or CONTACT_EMAIL env var.');
    return NextResponse.json(
      { error: "The contact form isn't set up yet — please reach out via LinkedIn or GitHub instead." },
      { status: 503 }
    );
  }

  let body: { name?: unknown; email?: unknown; message?: unknown; company?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const company = typeof body.company === 'string' ? body.company.trim() : '';

  // Honeypot field — hidden from real visitors via CSS, but bots that fill in
  // every field will populate it. Pretend success so they don't learn anything.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are all required.' }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
  }

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Sandbox sender — works with no domain setup. Swap for an address on
      // a Resend-verified christiancrivelli.xyz domain later if you want a
      // cleaner "from" address; delivery works either way.
      from: 'Portfolio contact form <onboarding@resend.dev>',
      to,
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!resendResponse.ok) {
    const detail = await resendResponse.text();
    console.error('Resend API error:', resendResponse.status, detail);
    return NextResponse.json(
      { error: 'Something went wrong sending your message. Please try again or reach out via LinkedIn.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
