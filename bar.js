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
      hidden: "Hidden from menu",
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
      hidden: "Ukryte w menu",
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
    open: new Set()
  };

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
      if (d.available === false) meta.append(el("span", "status", t.out));
      if (d.hidden) meta.append(el("span", "status", t.hidden));
      head.append(meta);
      sum.append(img, head, el("span", "chev"));

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

  render();
  keepAwake();
})();
