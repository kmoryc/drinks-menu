// The drinks list. Edit this file to add, remove, or change drinks.
//   category:  "alcoholic" or "non-alcoholic"
//   image:     path to a file in images/ (photo .jpg/.png/.webp or .svg)
//   available: false shows the drink as "out of stock"
//   hidden:    true removes the drink from the menu completely
window.DRINKS = [
  {
    id: "gin-tonic",
    category: "alcoholic",
    image: "images/gin-tonic.svg",
    available: true,
    name: { en: "Gin & Tonic", pl: "Gin z tonikiem" },
    description: {
      en: "Dry gin, tonic water, lots of ice and a slice of lime.",
      pl: "Wytrawny gin, tonik, dużo lodu i plasterek limonki."
    }
  },
  {
    id: "aperol-spritz",
    category: "alcoholic",
    image: "images/aperol-spritz.svg",
    available: true,
    name: { en: "Aperol Spritz", pl: "Aperol Spritz" },
    description: {
      en: "Aperol, prosecco and a splash of soda with an orange slice. Bittersweet and bubbly.",
      pl: "Aperol, prosecco i odrobina wody gazowanej z plasterkiem pomarańczy. Gorzko-słodki i musujący."
    }
  },
  {
    id: "mojito",
    category: "alcoholic",
    image: "images/mojito.svg",
    available: true,
    name: { en: "Mojito", pl: "Mojito" },
    description: {
      en: "White rum, fresh mint, lime, sugar and soda water.",
      pl: "Biały rum, świeża mięta, limonka, cukier i woda gazowana."
    }
  },
  {
    id: "red-wine",
    category: "alcoholic",
    image: "images/red-wine.svg",
    available: true,
    name: { en: "Red wine", pl: "Czerwone wino" },
    description: {
      en: "A glass of dry red wine.",
      pl: "Kieliszek wytrawnego czerwonego wina."
    }
  },
  {
    id: "beer",
    category: "alcoholic",
    image: "images/beer.svg",
    available: true,
    name: { en: "Beer", pl: "Piwo" },
    description: {
      en: "Cold lager, served in a glass or straight from the bottle.",
      pl: "Zimny lager, w szklance lub prosto z butelki."
    }
  },
  {
    id: "virgin-mojito",
    category: "non-alcoholic",
    image: "images/virgin-mojito.svg",
    available: true,
    name: { en: "Virgin Mojito", pl: "Mojito bezalkoholowe" },
    description: {
      en: "Fresh mint, lime, sugar and soda water. All the freshness, no rum.",
      pl: "Świeża mięta, limonka, cukier i woda gazowana. Cała świeżość, bez rumu."
    }
  },
  {
    id: "lemonade",
    category: "non-alcoholic",
    image: "images/lemonade.svg",
    available: true,
    name: { en: "Homemade lemonade", pl: "Domowa lemoniada" },
    description: {
      en: "Lemon juice, a little honey, water and ice.",
      pl: "Sok z cytryny, odrobina miodu, woda i lód."
    }
  },
  {
    id: "coffee",
    category: "non-alcoholic",
    image: "images/coffee.svg",
    available: true,
    name: { en: "Coffee", pl: "Kawa" },
    description: {
      en: "Espresso, americano or with milk. Just tell me how you like it.",
      pl: "Espresso, americano lub z mlekiem. Powiedz, jaką lubisz."
    }
  },
  {
    id: "tea",
    category: "non-alcoholic",
    image: "images/tea.svg",
    available: true,
    name: { en: "Tea", pl: "Herbata" },
    description: {
      en: "Black, green or herbal tea.",
      pl: "Herbata czarna, zielona lub ziołowa."
    }
  },
  {
    id: "sparkling-water",
    category: "non-alcoholic",
    image: "images/sparkling-water.svg",
    available: true,
    name: { en: "Sparkling water", pl: "Woda gazowana" },
    description: {
      en: "Chilled, with lemon if you like.",
      pl: "Schłodzona, z cytryną na życzenie."
    }
  }
];
