const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS'
    }
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid JSON payload.' }, 400);
  }

  const name = typeof payload?.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload?.email === 'string' ? payload.email.trim() : '';
  const subject = typeof payload?.subject === 'string' ? payload.subject.trim() : '';
  const message = typeof payload?.message === 'string' ? payload.message.trim() : '';

  if (!name || !email || !subject || !message) {
    return json({ error: 'Missing required fields.' }, 400);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return json({ error: 'Invalid email format.' }, 400);
  }

  const resendApiKey = env.RESEND_API_KEY;
  if (!resendApiKey) {
    return json({ error: 'Server is missing RESEND_API_KEY.' }, 500);
  }

  const toEmail = env.CONTACT_TO_EMAIL || 'patkim97@gmail.com';
  const fromEmail = env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

  const ipAddress = request.headers.get('CF-Connecting-IP') || request.headers.get('x-forwarded-for') || 'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');
  const safeIpAddress = escapeHtml(ipAddress);
  const safeUserAgent = escapeHtml(userAgent);

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `[Portfolio Contact] ${subject}`,
      reply_to: email,
      html: `
        <h2>New message from portfolio website</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong><br />${safeMessage}</p>
        <hr />
        <p><strong>IP:</strong> ${safeIpAddress}</p>
        <p><strong>User Agent:</strong> ${safeUserAgent}</p>
      `,
      text: `New message from portfolio website

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

IP: ${ipAddress}
User Agent: ${userAgent}`
    })
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    return json({ error: `Resend request failed: ${errorText}` }, 502);
  }

  return json({ ok: true });
}
