// Shared out-of-stock state, stored as stock.json in the GitHub repository.
// The guest page reads it; the bartender page reads and writes it.
(function () {
  const REPO = "kmoryc/drinks-menu";
  const BRANCH = "main";
  const FILE = "stock.json";
  // Commits made from the bartender page use the private no-reply address.
  const AUTHOR = { name: "Karol Moryc", email: "25161949+kmoryc@users.noreply.github.com" };
  const API = `https://api.github.com/repos/${REPO}/contents/${FILE}`;
  const TOKEN_KEY = "ghToken";

  const headers = (token, raw) => {
    const h = { Accept: raw ? "application/vnd.github.raw+json" : "application/vnd.github+json" };
    if (token) h.Authorization = "Bearer " + token;
    return h;
  };

  const parse = (data) => new Set(Array.isArray(data && data.out) ? data.out : []);

  // The GitHub API returns the latest version immediately. Unauthenticated
  // calls are rate limited per network, so fall back to the published copy
  // (which lags about a minute behind) if the API refuses.
  async function load() {
    const token = getToken();
    try {
      const r = await fetch(`${API}?ref=${BRANCH}`, { headers: headers(token, true), cache: "no-store" });
      if (r.ok) return parse(await r.json());
    } catch (e) { /* fall through */ }
    try {
      const r = await fetch(`${FILE}?t=${Date.now()}`, { cache: "no-store" });
      if (r.ok) return parse(await r.json());
    } catch (e) { /* fall through */ }
    return null;
  }

  function toBase64(text) {
    const bytes = new TextEncoder().encode(text);
    let bin = "";
    bytes.forEach(b => { bin += String.fromCharCode(b); });
    return btoa(bin);
  }

  async function save(outIds, message) {
    const token = getToken();
    if (!token) throw new Error("no-token");
    const body = JSON.stringify({ out: [...outIds].sort() }, null, 2) + "\n";
    for (let attempt = 0; attempt < 2; attempt++) {
      const cur = await fetch(`${API}?ref=${BRANCH}`, { headers: headers(token), cache: "no-store" });
      if (!cur.ok && cur.status !== 404) throw new Error("HTTP " + cur.status);
      const sha = cur.ok ? (await cur.json()).sha : undefined;
      const r = await fetch(API, {
        method: "PUT",
        headers: { ...headers(token), "Content-Type": "application/json" },
        body: JSON.stringify({
          message, content: toBase64(body), branch: BRANCH, sha,
          author: AUTHOR, committer: AUTHOR
        })
      });
      if (r.ok) return;
      if (r.status !== 409) throw new Error("HTTP " + r.status);
      // 409: someone else saved in between; retry with the new version.
    }
    throw new Error("conflict");
  }

  // Checks that the token can write to the repository.
  async function check(token) {
    const r = await fetch(`https://api.github.com/repos/${REPO}`, { headers: headers(token), cache: "no-store" });
    if (!r.ok) return false;
    const repo = await r.json();
    return !!(repo.permissions && repo.permissions.push);
  }

  function getToken() { return localStorage.getItem(TOKEN_KEY) || ""; }
  function setToken(t) { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY); }

  window.Stock = { load, save, check, getToken, setToken };
})();
