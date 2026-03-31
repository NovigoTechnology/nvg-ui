export async function call(method, params) {
  try {
    const url = `/api/method/${method}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Frappe-CSRF-Token": window.csrf_token || "",
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.exc) {
      throw new Error(data.exc);
    }

    return data.message;
  } catch (error) {
    console.error("Frappe API call error:", error);
    throw error;
  }
}
