const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });

export async function onRequestGet(context) {
  const country = (context.request.headers.get('CF-IPCountry') || '').toUpperCase();
  return json({
    country,
    isKoreanCountry: country === 'KR'
  });
}

