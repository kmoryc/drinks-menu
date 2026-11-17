(function () {
  const TEXT = {
    en: {
      title: "Bar",
      subtitle: "Recipes for the bartender",
      search: "Search drink or ingredient…",
      servings: "Servings",
      glass: "Glass",
      ingredients: "Ingredients",
      steps: "Preparation",
      optional: "optional",
      alcoholic: "Alcoholic",
      "non-alcoholic": "Non-alcoholic",
      out: "Out of stock",
      inStock: "In stock",
      hidden: "Hidden from menu",
      saving: "Saving…",
      saved: "Saved. Guests see the change on their next refresh.",
      saveFailed: "Could not save. Check the connection or the token.",
      loadFailed: "Could not load the current stock.",
      needToken: "Add a GitHub token below to change stock.",
      settings: "⚙ Stock settings",
      tokenHelp: "Changing stock saves to the GitHub repository. Create a fine-grained token once: repository access \"Only select repositories\" → drinks-menu, permission \"Contents: Read and write\". Paste it here; it stays only in this browser.",
      tokenLink: "Create a token on GitHub",
      tokenPlaceholder: "github_pat_…",
      tokenSave: "Save token",
      tokenRemove: "Remove",
      tokenChecking: "Checking token…",
      tokenOk: "Token works. You can change stock now.",
      tokenBad: "This token cannot write to the drinks-menu repository.",
      tokenNone: "No token saved on this device.",
      tokenSet: "A token is saved on this device.",
      empty: "No drink matches your search.",
      noRecipe: "No recipe yet.",
      wake: "Screen stays on while this page is open",
      units: { ml: "ml", g: "g", tsp: "tsp" }
    },
    pl: {
      title: "Bar",
      subtitle: "Przepisy dla barmana",
      search: "Szukaj napoju lub składnika…",
      servings: "Porcje",
      glass: "Szkło",
      ingredients: "Składniki",
      steps: "Przygotowanie",
      optional: "opcjonalnie",
      alcoholic: "Alkoholowe",
      "non-alcoholic": "Bezalkoholowe",
      out: "Chwilowo brak",
      inStock: "Dostępne",
      hidden: "Ukryte w menu",
      saving: "Zapisywanie…",
      saved: "Zapisano. Goście zobaczą zmianę po odświeżeniu.",
      saveFailed: "Nie udało się zapisać. Sprawdź połączenie lub token.",
      loadFailed: "Nie udało się wczytać aktualnej dostępności.",
      needToken: "Dodaj poniżej token GitHub, aby zmieniać dostępność.",
      settings: "⚙ Ustawienia dostępności",
      tokenHelp: "Zmiany dostępności zapisują się w repozytorium GitHub. Utwórz raz token typu fine-grained: dostęp do repozytorium \"Only select repositories\" → drinks-menu, uprawnienie \"Contents: Read and write\". Wklej go tutaj; zostaje tylko w tej przeglądarce.",
      tokenLink: "Utwórz token na GitHubie",
      tokenPlaceholder: "github_pat_…",
      tokenSave: "Zapisz token",
      tokenRemove: "Usuń",
      tokenChecking: "Sprawdzanie tokenu…",
      tokenOk: "Token działa. Możesz teraz zmieniać dostępność.",
      tokenBad: "Ten token nie może zapisywać w repozytorium drinks-menu.",
      tokenNone: "Na tym urządzeniu nie ma zapisanego tokenu.",
      tokenSet: "Na tym urządzeniu jest zapisany token.",
      empty: "Żaden napój nie pasuje do wyszukiwania.",
      noRecipe: "Brak przepisu.",
      wake: "Ekran nie wygaśnie, dopóki ta strona jest otwarta",
      units: { ml: "ml", g: "g", tsp: "łyż." }
    }
  };

  const MAX_SERVINGS = 10;
  const state = {
    lang: localStorage.getItem("lang") ||
      ((navigator.language || "en").toLowerCase().startsWith("pl") ? "pl" : "en"),
    query: "",
    servings: 1,
    open: new Set(),
    out: new Set(),
    sync: "",
    tokenMsg: ""
  };

  const isOut = (d) => d.available === false || state.out.has(d.id);

  const list = document.getElementById("recipes");
  const search = document.getElementById("search");

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  const tr = (obj) => (obj && (obj[state.lang] || obj.en)) || "";

  function formatAmount(n) {
    if (Number.isInteger(n)) return String(n);
    const whole = Math.floor(n);
    if (Math.abs(n - whole - 0.5) < 1e-9) return (whole ? whole : "") + "½";
    return String(Math.round(n * 10) / 10).replace(".", state.lang === "pl" ? "," : ".");
  }

  function normalize(s) {
    return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ł/g, "l");
  }

  function matches(d) {
    if (!state.query) return true;
    const q = normalize(state.query);
    const hay = [d.name.en, d.name.pl]
      .concat(((d.recipe || {}).ingredients || []).flatMap(i => [i.en, i.pl]))
      .join(" ");
    return normalize(hay).includes(q);
  }

  function renderRecipe(d, t) {
    const box = el("div", "recipe");
    const r = d.recipe;
    if (!r) {
      box.append(el("p", "muted", t.noRecipe));
      return box;
    }

    if (r.glass) {
      const g = el("p", "glass");
      g.append(el("strong", null, t.glass + ": "), document.createTextNode(tr(r.glass)));
      box.append(g);
    }

    box.append(el("h3", null, t.ingredients));
    const ul = el("ul", "ingredients");
    for (const i of r.ingredients || []) {
      const li = el("li", i.optional ? "optional" : null);
      let qty = "";
      if (typeof i.amount === "number") {
        qty = formatAmount(i.amount * state.servings);
        if (i.unit) qty += " " + (t.units[i.unit] || i.unit);
      }
      li.append(el("span", "qty", qty), el("span", "item", tr(i)));
      if (i.optional) li.append(el("span", "opt", t.optional));
      ul.append(li);
    }
    box.append(ul);

    const steps = tr(r.steps);
    if (steps && steps.length) {
      box.append(el("h3", null, t.steps));
      const ol = el("ol", "steps");
      steps.forEach(s => ol.append(el("li", null, s)));
      box.append(ol);
    }
    return box;
  }

  function render() {
    const t = TEXT[state.lang];
    document.documentElement.lang = state.lang;
    document.title = t.title;
    document.getElementById("title").textContent = t.title;
    document.getElementById("subtitle").textContent = t.subtitle;
    document.getElementById("servings-label").textContent = t.servings;
    document.getElementById("servings").textContent = state.servings;
    document.getElementById("less").disabled = state.servings <= 1;
    document.getElementById("more").disabled = state.servings >= MAX_SERVINGS;
    document.getElementById("wake").textContent = "☀ " + t.wake;
    search.placeholder = t.search;
    const sync = document.getElementById("sync");
    sync.textContent = state.sync ? t[state.sync] : "";
    sync.hidden = !state.sync;
    document.getElementById("settings-title").textContent = t.settings;
    document.getElementById("token-help").textContent = t.tokenHelp;
    document.getElementById("token-link").textContent = t.tokenLink;
    document.getElementById("token").placeholder = t.tokenPlaceholder;
    document.getElementById("token-save").textContent = t.tokenSave;
    document.getElementById("token-remove").textContent = t.tokenRemove;
    document.getElementById("token-status").textContent =
      t[state.tokenMsg || (Stock.getToken() ? "tokenSet" : "tokenNone")];
    document.querySelectorAll("[data-lang]").forEach(b =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)));

    const drinks = (window.DRINKS || []).filter(matches);
    list.replaceChildren();
    if (!drinks.length) {
      list.append(el("p", "empty", t.empty));
      return;
    }

    for (const d of drinks) {
      const item = el("details", "drink");
      item.open = state.open.has(d.id) || (state.query && drinks.length === 1);
      item.addEventListener("toggle", () => {
        item.open ? state.open.add(d.id) : state.open.delete(d.id);
      });

      const sum = el("summary");
      const img = el("img", "thumb");
      img.src = d.image;
      img.alt = "";
      const head = el("div", "head");
      head.append(el("span", "name", tr(d.name)));
      const meta = el("div", "meta");
      meta.append(el("span", "tag " + d.category, t[d.category]));
      const out = isOut(d);
      const sw = el("button", "stock-switch" + (out ? " off" : ""));
      sw.type = "button";
      sw.setAttribute("role", "switch");
      sw.setAttribute("aria-checked", String(!out));
      sw.disabled = d.available === false;
      sw.append(el("span", "knob"), el("span", "label", out ? t.out : t.inStock));
      sw.addEventListener("click", (e) => {
        e.preventDefault(); // don't open/close the recipe
        e.stopPropagation();
        toggleStock(d);
      });
      if (d.hidden) meta.append(el("span", "status", t.hidden));
      head.append(meta);
      sum.append(img, head, sw, el("span", "chev"));
      if (out) item.classList.add("is-out");

      item.append(sum, renderRecipe(d, t));
      list.append(item);
    }
  }

  // Keep the screen awake while the bartender is reading a recipe.
  let wakeLock = null;
  async function keepAwake() {
    if (!("wakeLock" in navigator) || document.visibilityState !== "visible") return;
    try {
      wakeLock = await navigator.wakeLock.request("screen");
      document.getElementById("wake").hidden = false;
      wakeLock.addEventListener("release", () => { document.getElementById("wake").hidden = true; });
    } catch (e) {
      // Not allowed (e.g. battery saver); the page still works without it.
    }
  }
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && (!wakeLock || wakeLock.released)) keepAwake();
  });

  document.querySelectorAll("[data-lang]").forEach(b =>
    b.addEventListener("click", () => {
      state.lang = b.dataset.lang;
      localStorage.setItem("lang", state.lang);
      render();
    }));
  search.addEventListener("input", () => { state.query = search.value.trim(); render(); });
  document.getElementById("less").addEventListener("click", () => {
    state.servings = Math.max(1, state.servings - 1); render();
  });
  document.getElementById("more").addEventListener("click", () => {
    state.servings = Math.min(MAX_SERVINGS, state.servings + 1); render();
  });

  // Stock changes are saved one after another so quick taps don't overwrite each other.
  let saveQueue = Promise.resolve();
  function toggleStock(d) {
    if (!Stock.getToken()) {
      state.sync = "needToken";
      document.getElementById("settings").open = true;
      render();
      document.getElementById("settings").scrollIntoView({ behavior: "smooth" });
      return;
    }
    const nowOut = !state.out.has(d.id);
    nowOut ? state.out.add(d.id) : state.out.delete(d.id);
    state.sync = "saving";
    render();
    const msg = `${d.name.en}: ${nowOut ? "out of stock" : "back in stock"}`;
    saveQueue = saveQueue
      .then(() => Stock.save(state.out, msg))
      .then(() => { state.sync = "saved"; render(); })
      .catch(async () => {
        state.sync = "saveFailed";
        const fresh = await Stock.load();
        if (fresh) state.out = fresh;
        render();
      });
  }

  async function refreshStock() {
    const out = await Stock.load();
    if (out) state.out = out; else state.sync = "loadFailed";
    render();
  }

  const tokenInput = document.getElementById("token");
  document.getElementById("token-save").addEventListener("click", async () => {
    const tok = tokenInput.value.trim();
    if (!tok) return;
    state.tokenMsg = "tokenChecking"; render();
    if (await Stock.check(tok)) {
      Stock.setToken(tok);
      tokenInput.value = "";
      state.tokenMsg = "tokenOk";
      if (state.sync === "needToken") state.sync = "";
    } else {
      state.tokenMsg = "tokenBad";
    }
    render();
  });
  document.getElementById("token-remove").addEventListener("click", () => {
    Stock.setToken("");
    state.tokenMsg = "";
    render();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") refreshStock();
  });

  render();
  refreshStock();
  keepAwake();
})();
