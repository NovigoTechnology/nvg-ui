export async function call(method, params) {
  try {
    const url = `/api/method/${method}`;

    // Frappe espera los parámetros en formato x-www-form-urlencoded
    const formData = new URLSearchParams();

    // Agregar cada parámetro al formData
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        // Si el valor es un objeto o array, convertirlo a JSON
        if (typeof value === "object" && value !== null) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      });
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Frappe-CSRF-Token": window.csrf_token || "",
        Accept: "application/json",
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Frappe API error response:", errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.exc) {
      console.error("Frappe exception:", data.exc);
      throw new Error(data.exc);
    }

    return data.message;
  } catch (error) {
    console.error("Frappe API call error:", error);
    throw error;
  }
}
