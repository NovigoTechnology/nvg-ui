export async function call(method, params) {
  // Si frappe.call está disponible, usarlo (lo más confiable)
  if (window.frappe && typeof window.frappe.call === 'function') {
    return new Promise((resolve, reject) => {
      window.frappe.call({
        method: method,
        args: params,
        callback: (response) => {
          resolve(response.message);
        },
        error: (error) => {
          console.error("Frappe API call error:", error);
          reject(error);
        }
      });
    });
  }

  // Fallback: usar fetch directo (para ambientes sin frappe.call)
  try {
    const url = `/api/method/${method}`;
    const formData = new URLSearchParams();

    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
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
        "Accept": "application/json",
        "X-Frappe-CSRF-Token": window.frappe?.csrf_token || "",
      },
      credentials: "same-origin",
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
