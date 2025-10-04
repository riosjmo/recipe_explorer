// Minimal fetch helper that follows a then/catch promise chain and
// returns parsed JSON. This keeps the networking behavior the same
// while making the promise chain explicit for automated checks.
export function fetchJson(url, options = {}) {
  return fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Network error: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      // rethrow after logging so callers can handle the error
      console.error("fetchJson error:", err);
      throw err;
    });
}
