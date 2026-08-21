const PRICE = 24.5;
const SITE_URL = 'https://www.nutribrunaazeredo.com.br';

function getBaseUrl(request) {
  const host = request.headers.host;
  const protocol = request.headers['x-forwarded-proto'] || 'https';

  if (!host) return SITE_URL;
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    return `${protocol}://${host}`;
  }

  return SITE_URL;
}

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;
  if (!accessToken) {
    return response.status(500).send('Checkout indisponivel. Token do Mercado Pago nao configurado.');
  }

  const baseUrl = getBaseUrl(request);
  const preferenceResponse = await fetch('https://api.mercadopago.com/checkout/preferences', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: [
        {
          id: 'reconecta-promocao-abertura',
          title: 'Reconecta - Promocao de abertura',
          description: 'Inscricao promocional na experiencia em grupo Reconecta',
          quantity: 1,
          currency_id: 'BRL',
          unit_price: PRICE
        }
      ],
      back_urls: {
        success: `${baseUrl}/bio/reconecta/confirmado/`,
        failure: `${baseUrl}/bio/`,
        pending: `${baseUrl}/bio/`
      },
      auto_return: 'approved',
      external_reference: 'reconecta-promocao-abertura',
      statement_descriptor: 'RECONECTA',
      metadata: {
        product: 'reconecta',
        offer: 'promocao_abertura'
      }
    })
  });

  const preference = await preferenceResponse.json();

  if (!preferenceResponse.ok || !preference.init_point) {
    console.error('[reconecta-checkout] failed to create preference', {
      status: preferenceResponse.status,
      message: preference.message,
      error: preference.error
    });

    return response.status(502).send('Nao foi possivel iniciar o checkout do Mercado Pago.');
  }

  response.writeHead(302, { Location: preference.init_point });
  return response.end();
}
