// The drinks list. Edit this file to add, remove, or change drinks.
//   category:  "alcoholic" or "non-alcoholic"
//   image:     path to a file in images/ (photo .jpg/.png/.webp or .svg)
//   available: false shows the drink as "out of stock"
//   hidden:    true removes the drink from the guest menu (still listed on bar.html)
//   recipe:    shown only on the bartender page (bar.html)
//     ingredients: amount is per one serving and is multiplied by the servings
//                  selector; unit is "ml", "g", "tsp" or omitted for pieces.
//                  optional: true marks an ingredient as optional.
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
    },
    recipe: {
      glass: { en: "Highball glass", pl: "Szklanka typu highball" },
      ingredients: [
        { amount: 50, unit: "ml", en: "Dry gin", pl: "Wytrawny gin" },
        { amount: 150, unit: "ml", en: "Tonic water, chilled", pl: "Tonik, schłodzony" },
        { en: "Ice cubes", pl: "Kostki lodu" },
        { amount: 1, en: "Lime slice", pl: "Plasterek limonki" }
      ],
      steps: {
        en: [
          "Fill the glass to the top with ice.",
          "Pour in the gin.",
          "Top up slowly with tonic, pouring down the side of the glass to keep the bubbles.",
          "Stir once gently and garnish with the lime slice."
        ],
        pl: [
          "Napełnij szklankę lodem do pełna.",
          "Wlej gin.",
          "Powoli dolej tonik po ściance szklanki, żeby nie stracił gazu.",
          "Raz delikatnie zamieszaj i udekoruj plasterkiem limonki."
        ]
      }
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
    },
    recipe: {
      glass: { en: "Large wine glass", pl: "Duży kieliszek do wina" },
      ingredients: [
        { amount: 90, unit: "ml", en: "Prosecco, chilled", pl: "Prosecco, schłodzone" },
        { amount: 60, unit: "ml", en: "Aperol", pl: "Aperol" },
        { amount: 30, unit: "ml", en: "Soda water", pl: "Woda gazowana" },
        { en: "Ice cubes", pl: "Kostki lodu" },
        { amount: 1, en: "Orange slice", pl: "Plasterek pomarańczy" }
      ],
      steps: {
        en: [
          "Fill the glass with ice.",
          "Pour in the prosecco, then the Aperol (3 : 2 ratio).",
          "Add a splash of soda water.",
          "Stir gently once and garnish with the orange slice."
        ],
        pl: [
          "Napełnij kieliszek lodem.",
          "Wlej prosecco, a potem Aperol (proporcja 3 : 2).",
          "Dodaj odrobinę wody gazowanej.",
          "Raz delikatnie zamieszaj i udekoruj plasterkiem pomarańczy."
        ]
      }
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
    },
    recipe: {
      glass: { en: "Highball glass", pl: "Szklanka typu highball" },
      ingredients: [
        { amount: 50, unit: "ml", en: "White rum", pl: "Biały rum" },
        { amount: 25, unit: "ml", en: "Fresh lime juice (½ lime)", pl: "Świeży sok z limonki (½ limonki)" },
        { amount: 2, unit: "tsp", en: "White or cane sugar", pl: "Cukier biały lub trzcinowy" },
        { amount: 8, en: "Mint leaves", pl: "Listki mięty" },
        { amount: 60, unit: "ml", en: "Soda water", pl: "Woda gazowana" },
        { en: "Crushed ice", pl: "Kruszony lód" },
        { amount: 1, en: "Mint sprig and lime wedge", pl: "Gałązka mięty i ćwiartka limonki" }
      ],
      steps: {
        en: [
          "Put the mint leaves, sugar and lime juice in the glass.",
          "Press the mint gently with a muddler to release the aroma. Do not shred it.",
          "Add the rum and stir until the sugar dissolves.",
          "Fill the glass with crushed ice.",
          "Top up with soda water and stir from the bottom up.",
          "Garnish with a mint sprig and a lime wedge."
        ],
        pl: [
          "Włóż do szklanki listki mięty, cukier i sok z limonki.",
          "Delikatnie ugnieć miętę tłuczkiem, żeby uwolnić aromat. Nie rozcieraj jej na miazgę.",
          "Dodaj rum i mieszaj, aż cukier się rozpuści.",
          "Wypełnij szklankę kruszonym lodem.",
          "Dolej wodę gazowaną i zamieszaj od dołu do góry.",
          "Udekoruj gałązką mięty i ćwiartką limonki."
        ]
      }
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
    },
    recipe: {
      glass: { en: "Red wine glass", pl: "Kieliszek do czerwonego wina" },
      ingredients: [
        { amount: 150, unit: "ml", en: "Dry red wine (16–18 °C)", pl: "Wytrawne czerwone wino (16–18 °C)" }
      ],
      steps: {
        en: [
          "If the bottle is warm, put it in the fridge for 15 minutes.",
          "Fill the glass only to about one third so the wine can breathe.",
          "Hold the glass by the stem when serving."
        ],
        pl: [
          "Jeśli butelka jest ciepła, włóż ją na 15 minut do lodówki.",
          "Nalej wino tylko do około jednej trzeciej kieliszka, żeby mogło oddychać.",
          "Podając, trzymaj kieliszek za nóżkę."
        ]
      }
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
    },
    recipe: {
      glass: { en: "Beer glass or mug (0.5 l), or the bottle", pl: "Szklanka lub kufel do piwa (0,5 l) albo butelka" },
      ingredients: [
        { amount: 500, unit: "ml", en: "Lager, well chilled", pl: "Lager, dobrze schłodzony" }
      ],
      steps: {
        en: [
          "Ask whether the guest wants a glass or the bottle.",
          "Hold the glass at 45° and pour down the side.",
          "Straighten the glass for the last third to build about 2 cm of foam."
        ],
        pl: [
          "Zapytaj, czy gość woli szklankę czy butelkę.",
          "Trzymaj szklankę pod kątem 45° i lej po ściance.",
          "Ostatnią jedną trzecią lej do wyprostowanej szklanki, żeby powstało ok. 2 cm piany."
        ]
      }
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
    },
    recipe: {
      glass: { en: "Highball glass", pl: "Szklanka typu highball" },
      ingredients: [
        { amount: 25, unit: "ml", en: "Fresh lime juice (½ lime)", pl: "Świeży sok z limonki (½ limonki)" },
        { amount: 2, unit: "tsp", en: "White or cane sugar", pl: "Cukier biały lub trzcinowy" },
        { amount: 8, en: "Mint leaves", pl: "Listki mięty" },
        { amount: 120, unit: "ml", en: "Soda water or Sprite", pl: "Woda gazowana lub Sprite" },
        { en: "Crushed ice", pl: "Kruszony lód" },
        { amount: 1, en: "Mint sprig and lime wedge", pl: "Gałązka mięty i ćwiartka limonki" }
      ],
      steps: {
        en: [
          "Put the mint leaves, sugar and lime juice in the glass.",
          "Press the mint gently with a muddler and stir until the sugar dissolves.",
          "Fill the glass with crushed ice.",
          "Top up with soda water and stir from the bottom up.",
          "Garnish with a mint sprig and a lime wedge."
        ],
        pl: [
          "Włóż do szklanki listki mięty, cukier i sok z limonki.",
          "Delikatnie ugnieć miętę tłuczkiem i mieszaj, aż cukier się rozpuści.",
          "Wypełnij szklankę kruszonym lodem.",
          "Dolej wodę gazowaną i zamieszaj od dołu do góry.",
          "Udekoruj gałązką mięty i ćwiartką limonki."
        ]
      }
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
    },
    recipe: {
      glass: { en: "Highball glass", pl: "Szklanka typu highball" },
      ingredients: [
        { amount: 40, unit: "ml", en: "Fresh lemon juice (1 lemon)", pl: "Świeży sok z cytryny (1 cytryna)" },
        { amount: 2, unit: "tsp", en: "Honey", pl: "Miód" },
        { amount: 200, unit: "ml", en: "Cold water (still or sparkling)", pl: "Zimna woda (niegazowana lub gazowana)" },
        { en: "Ice cubes", pl: "Kostki lodu" },
        { amount: 1, en: "Lemon slice", pl: "Plasterek cytryny" },
        { amount: 2, en: "Mint leaves", pl: "Listki mięty", optional: true }
      ],
      steps: {
        en: [
          "Stir the honey into the lemon juice until it dissolves (a spoon of warm water helps).",
          "Pour into the glass and add the cold water.",
          "Add ice and stir.",
          "Taste: add more honey if too sour.",
          "Garnish with the lemon slice (and mint)."
        ],
        pl: [
          "Rozmieszaj miód w soku z cytryny, aż się rozpuści (pomaga łyżka ciepłej wody).",
          "Przelej do szklanki i dolej zimną wodę.",
          "Dodaj lód i zamieszaj.",
          "Spróbuj: jeśli za kwaśne, dodaj więcej miodu.",
          "Udekoruj plasterkiem cytryny (i miętą)."
        ]
      }
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
    },
    recipe: {
      glass: { en: "Espresso cup or mug", pl: "Filiżanka do espresso lub kubek" },
      ingredients: [
        { amount: 18, unit: "g", en: "Ground coffee (one double shot)", pl: "Mielona kawa (podwójna porcja)" },
        { amount: 120, unit: "ml", en: "Hot water, for americano", pl: "Gorąca woda, do americano", optional: true },
        { amount: 100, unit: "ml", en: "Milk, for coffee with milk", pl: "Mleko, do kawy z mlekiem", optional: true },
        { en: "Sugar", pl: "Cukier", optional: true }
      ],
      steps: {
        en: [
          "Ask how the guest likes it: espresso, americano or with milk, and with sugar or not.",
          "Espresso: brew about 30–40 ml into a warmed cup.",
          "Americano: brew the espresso into a mug and top up with the hot water.",
          "With milk: brew the espresso into a mug, then add warm or frothed milk."
        ],
        pl: [
          "Zapytaj, jaką kawę gość lubi: espresso, americano czy z mlekiem, i czy z cukrem.",
          "Espresso: zaparz ok. 30–40 ml do podgrzanej filiżanki.",
          "Americano: zaparz espresso do kubka i dolej gorącą wodę.",
          "Z mlekiem: zaparz espresso do kubka i dodaj ciepłe lub spienione mleko."
        ]
      }
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
    },
    recipe: {
      glass: { en: "Mug", pl: "Kubek" },
      ingredients: [
        { amount: 1, en: "Tea bag (black, green or herbal)", pl: "Torebka herbaty (czarnej, zielonej lub ziołowej)" },
        { amount: 250, unit: "ml", en: "Water", pl: "Woda" },
        { en: "Sugar or honey", pl: "Cukier lub miód", optional: true },
        { amount: 1, en: "Lemon slice", pl: "Plasterek cytryny", optional: true }
      ],
      steps: {
        en: [
          "Ask which tea and whether with sugar, honey or lemon.",
          "Black: boiling water (100 °C), steep 3–4 min.",
          "Green: let the water cool to about 80 °C, steep 2–3 min.",
          "Herbal: boiling water, steep 5 min.",
          "Remove the bag and add the extras."
        ],
        pl: [
          "Zapytaj, jaką herbatę i czy z cukrem, miodem lub cytryną.",
          "Czarna: wrzątek (100 °C), parz 3–4 min.",
          "Zielona: odczekaj, aż woda ostygnie do ok. 80 °C, parz 2–3 min.",
          "Ziołowa: wrzątek, parz 5 min.",
          "Wyjmij torebkę i dodaj dodatki."
        ]
      }
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
    },
    recipe: {
      glass: { en: "Highball glass", pl: "Szklanka typu highball" },
      ingredients: [
        { amount: 250, unit: "ml", en: "Sparkling water, chilled", pl: "Woda gazowana, schłodzona" },
        { en: "Ice cubes", pl: "Kostki lodu", optional: true },
        { amount: 1, en: "Lemon slice", pl: "Plasterek cytryny", optional: true }
      ],
      steps: {
        en: [
          "Ask whether the guest wants ice and lemon.",
          "Add ice to the glass if wanted, pour the water and add the lemon slice."
        ],
        pl: [
          "Zapytaj, czy gość chce lód i cytrynę.",
          "Jeśli tak, wrzuć lód do szklanki, nalej wodę i dodaj plasterek cytryny."
        ]
      }
    }
  }
];
