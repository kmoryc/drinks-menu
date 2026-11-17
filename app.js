(function () {
  const TEXT = {
    en: {
      title: "Drinks Menu",
      subtitle: "Pick something you like and just tell me 🍹",
      all: "All",
      alcoholic: "Alcoholic",
      "non-alcoholic": "Non-alcoholic",
      out: "Out of stock",
      empty: "Nothing here right now.",
      footer: "Cheers! 🥂"
    },
    pl: {
      title: "Karta napojów",
      subtitle: "Wybierz coś dla siebie i po prostu mi powiedz 🍹",
      all: "Wszystkie",
      alcoholic: "Alkoholowe",
      "non-alcoholic": "Bezalkoholowe",
      out: "Chwilowo brak",
      empty: "Na razie nic tu nie ma.",
      footer: "Na zdrowie! 🥂"
    }
  };

  const state = {
    lang: localStorage.getItem("lang") ||
      ((navigator.language || "en").toLowerCase().startsWith("pl") ? "pl" : "en"),
    filter: "all",
    out: new Set()
  };

  const isOut = (d) => d.available === false || state.out.has(d.id);

  const menu = document.getElementById("menu");

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function render() {
    const t = TEXT[state.lang];
    document.documentElement.lang = state.lang;
    document.title = t.title;
    document.getElementById("title").textContent = t.title;
    document.getElementById("subtitle").textContent = t.subtitle;
    document.getElementById("footer").textContent = t.footer;

    document.querySelectorAll("[data-lang]").forEach(b =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)));
    document.querySelectorAll("[data-filter]").forEach(b => {
      b.textContent = t[b.dataset.filter];
      b.setAttribute("aria-selected", String(b.dataset.filter === state.filter));
    });

    const drinks = (window.DRINKS || [])
      .filter(d => !d.hidden)
      .filter(d => state.filter === "all" || d.category === state.filter)
      // available drinks first, keep original order otherwise
      .map((d, i) => ({ d, i }))
      .sort((a, b) => isOut(a.d) - isOut(b.d) || a.i - b.i)
      .map(x => x.d);

    menu.replaceChildren();
    if (!drinks.length) {
      menu.append(el("p", "empty", t.empty));
      return;
    }

    for (const d of drinks) {
      const card = el("article", "card" + (isOut(d) ? " out" : ""));
      const img = el("img");
      img.src = d.image;
      img.alt = d.name[state.lang] || d.name.en;
      img.loading = "lazy";
      const fig = el("div", "photo");
      fig.append(img);
      if (isOut(d)) fig.append(el("span", "badge", t.out));

      const body = el("div", "body");
      const h = el("h2", null, d.name[state.lang] || d.name.en);
      const tag = el("span", "tag " + d.category, t[d.category]);
      body.append(h, tag, el("p", null, (d.description || {})[state.lang] || (d.description || {}).en || ""));

      card.append(fig, body);
      menu.append(card);
    }
  }

  document.querySelectorAll("[data-lang]").forEach(b =>
    b.addEventListener("click", () => {
      state.lang = b.dataset.lang;
      localStorage.setItem("lang", state.lang);
      render();
    }));
  document.querySelectorAll("[data-filter]").forEach(b =>
    b.addEventListener("click", () => { state.filter = b.dataset.filter; render(); }));

  async function refreshStock() {
    const out = window.Stock && await window.Stock.load();
    if (out) { state.out = out; render(); }
  }
  // Pick up changes made on the bartender page when a guest comes back to the tab.
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") refreshStock();
  });

  render();
  refreshStock();
})();
