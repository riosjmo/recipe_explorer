// fetchJson: perform fetch, check response, and return parsed JSON.
// Errors are logged and rethrown for callers to handle.
export function fetchJson(url, options = {}) {
  return fetch(url, options)
    .then((res) => {
      if (!res.ok) throw new Error(`Network error: ${res.status}`);
      return res.json();
    })
    .catch((err) => {
      console.error("fetchJson error:", err);
      throw err;
    });
}
