import FormData from "form-data";
import axios from "axios";

export async function POST(request) {
  try {

    const reqFormData = await request.formData();
    const username = reqFormData.get("username");
    const password = reqFormData.get("password");


    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("device_name", "web");


    const response = await axios.post(
      "https://api.olx.ba/auth/login",
      formData,
      {
        headers: {
          ...formData.getHeaders(), // Postavi odgovarajuće zaglavlje
        },
      }
    );

    console.log(response.data.token)

    // Vrati odgovor sa eksternog API-ja
    return new Response(JSON.stringify({ message: "Login successful" }), {
      status: 200,
      headers: {
        "Set-Cookie": `authToken=${response.data.token.replace('%', '|')}; HttpOnly; Secure; Path=/; SameSite=Strict`,
        "Content-Type": "application/json",
      },
    });
    
  } catch (error) {

    console.error("Error:", error.message);

    return new Response(JSON.stringify({ error: error.message }), {
      status: error.status,
    });
  }
}
