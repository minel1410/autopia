import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("authToken");

  return new Response(JSON.stringify({ token: authToken?.value }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
