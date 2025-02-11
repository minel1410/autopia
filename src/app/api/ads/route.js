

import axios from 'axios';

export async function GET(request) {
  const url = 'https://olx.ba/api/listings/homepage';
  const page = new URL(request.url).searchParams.get('page') || 1; // Uzimanje stranice iz URL parametra

  try {
    const response = await axios.get(`${url}?per_page=30&category_id=1&page=${page}`);
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Greška prilikom dohvaćanja oglasa" }), { status: 500 });
  }
}
