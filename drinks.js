// The drinks list. Edit this file to add, remove, or change drinks.
//   category:  "alcoholic" or "non-alcoholic"
//   image:     path to a file in images/ (photo .jpg/.png/.webp or .svg)
//   available: false always shows the drink as "out of stock". For day-to-day
//              changes use the switch on bar.html, which saves to the
//              kmoryc/drinks-stock repository.
//   hidden:    true removes the drink from the guest menu (still listed on bar.html)
//   recipe:    shown only on the bartender page (bar.html)
//     ingredients: amount is per one serving and is multiplied by the servings
//                  selector; unit is "ml", "g", "tsp" or omitted for pieces.
//                  optional: true marks an ingredient as optional.
window.DRINKS = [
  {
    id: "gin-tonic",
    category: "alcoholic",
    image: "images/gin-tonic.jpg",
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
    image: "images/aperol-spritz.jpg",
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
    id: "limoncello-spritz",
    category: "alcoholic",
    image: "images/limoncello-spritz.jpg",
    available: true,
    name: { en: "Limoncello Spritz", pl: "Limoncello Spritz" },
    description: {
      en: "Limoncello, prosecco and soda with lemon and mint. Sweet, sunny and bubbly.",
      pl: "Limoncello, prosecco i woda gazowana z cytryną i miętą. Słodki, słoneczny i musujący."
    },
    recipe: {
      glass: { en: "Large wine glass", pl: "Duży kieliszek do wina" },
      ingredients: [
        { amount: 60, unit: "ml", en: "Limoncello, chilled", pl: "Limoncello, schłodzone" },
        { amount: 90, unit: "ml", en: "Prosecco, chilled", pl: "Prosecco, schłodzone" },
        { amount: 30, unit: "ml", en: "Soda water", pl: "Woda gazowana" },
        { en: "Ice cubes", pl: "Kostki lodu" },
        { amount: 1, en: "Lemon slice and mint sprig", pl: "Plasterek cytryny i gałązka mięty" }
      ],
      steps: {
        en: [
          "Fill the glass with ice.",
          "Pour in the prosecco, then the limoncello.",
          "Top up with soda water and stir gently once.",
          "Garnish with a lemon slice and a mint sprig."
        ],
        pl: [
          "Wypełnij kieliszek lodem.",
          "Wlej prosecco, a potem limoncello.",
          "Dolej wodę gazowaną i raz delikatnie zamieszaj.",
          "Udekoruj plasterkiem cytryny i gałązką mięty."
        ]
      }
    }
  },
  {
    id: "mojito",
    category: "alcoholic",
    image: "images/mojito.jpg",
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
    id: "daiquiri",
    category: "alcoholic",
    image: "images/daiquiri.jpg",
    available: true,
    name: { en: "Daiquiri", pl: "Daiquiri" },
    description: {
      en: "Classic Cuban sour: white rum, fresh lime and a touch of sugar, shaken ice cold.",
      pl: "Klasyczny kubański sour: biały rum, świeża limonka i odrobina cukru, wstrząśnięte na lodzie."
    },
    recipe: {
      glass: { en: "Coupe or martini glass, chilled", pl: "Kieliszek coupe lub martini, schłodzony" },
      ingredients: [
        { amount: 60, unit: "ml", en: "White rum", pl: "Biały rum" },
        { amount: 25, unit: "ml", en: "Fresh lime juice", pl: "Świeży sok z limonki" },
        { amount: 15, unit: "ml", en: "Sugar syrup", pl: "Syrop cukrowy" },
        { en: "Ice cubes for shaking", pl: "Kostki lodu do shakera" },
        { amount: 1, en: "Lime wheel", pl: "Plasterek limonki" }
      ],
      steps: {
        en: [
          "Chill the glass with ice or in the freezer.",
          "Put the rum, lime juice and sugar syrup in a shaker with plenty of ice.",
          "Shake hard for about 15 seconds.",
          "Strain into the chilled glass.",
          "Garnish with a lime wheel on the rim."
        ],
        pl: [
          "Schłodź kieliszek lodem lub w zamrażarce.",
          "Wlej rum, sok z limonki i syrop cukrowy do shakera z dużą ilością lodu.",
          "Wstrząsaj mocno przez ok. 15 sekund.",
          "Przecedź do schłodzonego kieliszka.",
          "Udekoruj plasterkiem limonki na brzegu."
        ]
      }
    }
  },
  {
    id: "tequila-sunrise",
    category: "alcoholic",
    image: "images/tequila-sunrise.jpg",
    available: true,
    name: { en: "Tequila Sunrise", pl: "Tequila Sunrise" },
    description: {
      en: "Tequila and orange juice with grenadine sinking to the bottom like a sunrise.",
      pl: "Tequila i sok pomarańczowy z grenadyną opadającą na dno jak wschód słońca."
    },
    recipe: {
      glass: { en: "Highball glass", pl: "Szklanka typu highball" },
      ingredients: [
        { amount: 45, unit: "ml", en: "Tequila (blanco)", pl: "Tequila (blanco)" },
        { amount: 90, unit: "ml", en: "Orange juice", pl: "Sok pomarańczowy" },
        { amount: 15, unit: "ml", en: "Grenadine", pl: "Grenadyna" },
        { en: "Ice cubes", pl: "Kostki lodu" },
        { amount: 1, en: "Orange slice and cocktail cherry", pl: "Plasterek pomarańczy i wisienka koktajlowa" }
      ],
      steps: {
        en: [
          "Fill the glass with ice.",
          "Pour in the tequila and orange juice and stir.",
          "Slowly pour the grenadine down the inside of the glass so it sinks to the bottom. Do not stir.",
          "Garnish with an orange slice and a cherry."
        ],
        pl: [
          "Wypełnij szklankę lodem.",
          "Wlej tequilę i sok pomarańczowy, zamieszaj.",
          "Powoli wlej grenadynę po wewnętrznej ściance, żeby opadła na dno. Nie mieszaj.",
          "Udekoruj plasterkiem pomarańczy i wisienką."
        ]
      }
    }
  },
  {
    id: "martini",
    category: "alcoholic",
    image: "images/martini.jpg",
    available: true,
    name: { en: "Martini", pl: "Martini" },
    description: {
      en: "Dry gin and a dash of vermouth, stirred ice cold and served with an olive.",
      pl: "Wytrawny gin z odrobiną wermutu, mieszany na lodzie i podany z oliwką."
    },
    recipe: {
      glass: { en: "Martini glass, chilled", pl: "Kieliszek do martini, schłodzony" },
      ingredients: [
        { amount: 60, unit: "ml", en: "Gin", pl: "Gin" },
        { amount: 10, unit: "ml", en: "Dry vermouth", pl: "Wytrawny wermut" },
        { en: "Ice cubes for stirring", pl: "Kostki lodu do mieszania" },
        { amount: 1, en: "Olive on a pick or lemon twist", pl: "Oliwka na wykałaczce lub skórka cytryny" }
      ],
      steps: {
        en: [
          "Chill the glass with ice or in the freezer.",
          "Put the gin and vermouth in a mixing glass full of ice.",
          "Stir for about 30 seconds until very cold.",
          "Strain into the chilled glass.",
          "Garnish with an olive or a lemon twist."
        ],
        pl: [
          "Schłodź kieliszek lodem lub w zamrażarce.",
          "Wlej gin i wermut do szklanicy pełnej lodu.",
          "Mieszaj ok. 30 sekund, aż będzie bardzo zimne.",
          "Przecedź do schłodzonego kieliszka.",
          "Udekoruj oliwką lub skórką cytryny."
        ]
      }
    }
  },
  {
    id: "dirty-martini",
    category: "alcoholic",
    image: "images/dirty-martini.jpg",
    available: true,
    name: { en: "Dirty Martini", pl: "Dirty Martini" },
    description: {
      en: "A martini with a splash of olive brine. Savoury, salty and smooth.",
      pl: "Martini z dodatkiem zalewy z oliwek. Wytrawne, słone i gładkie."
    },
    recipe: {
      glass: { en: "Martini glass, chilled", pl: "Kieliszek do martini, schłodzony" },
      ingredients: [
        { amount: 60, unit: "ml", en: "Gin or vodka", pl: "Gin lub wódka" },
        { amount: 10, unit: "ml", en: "Dry vermouth", pl: "Wytrawny wermut" },
        { amount: 15, unit: "ml", en: "Olive brine", pl: "Zalewa z oliwek" },
        { en: "Ice cubes for stirring", pl: "Kostki lodu do mieszania" },
        { amount: 3, en: "Green olives on a pick", pl: "Zielone oliwki na wykałaczce" }
      ],
      steps: {
        en: [
          "Chill the glass with ice or in the freezer.",
          "Put the gin or vodka, vermouth and olive brine in a mixing glass full of ice.",
          "Stir for about 30 seconds.",
          "Strain into the chilled glass.",
          "Garnish with the olives on a pick."
        ],
        pl: [
          "Schłodź kieliszek lodem lub w zamrażarce.",
          "Wlej gin lub wódkę, wermut i zalewę z oliwek do szklanicy pełnej lodu.",
          "Mieszaj ok. 30 sekund.",
          "Przecedź do schłodzonego kieliszka.",
          "Udekoruj oliwkami na wykałaczce."
        ]
      }
    }
  },
  {
    id: "porn-star-martini",
    category: "alcoholic",
    image: "images/porn-star-martini.jpg",
    available: true,
    name: { en: "Pornstar Martini", pl: "Pornstar Martini" },
    description: {
      en: "Vanilla vodka and passion fruit, with a shot of prosecco on the side.",
      pl: "Waniliowa wódka i marakuja, z kieliszkiem prosecco obok."
    },
    recipe: {
      glass: { en: "Coupe or martini glass, plus a shot glass", pl: "Kieliszek coupe lub martini oraz kieliszek do shota" },
      ingredients: [
        { amount: 45, unit: "ml", en: "Vanilla vodka", pl: "Wódka waniliowa" },
        { amount: 15, unit: "ml", en: "Passion fruit liqueur (e.g. Passoa)", pl: "Likier z marakui (np. Passoa)" },
        { amount: 30, unit: "ml", en: "Passion fruit purée or juice", pl: "Puree lub sok z marakui" },
        { amount: 15, unit: "ml", en: "Fresh lime juice", pl: "Świeży sok z limonki" },
        { amount: 10, unit: "ml", en: "Vanilla syrup", pl: "Syrop waniliowy" },
        { amount: 50, unit: "ml", en: "Prosecco, chilled", pl: "Prosecco, schłodzone" },
        { en: "Ice cubes for shaking", pl: "Kostki lodu do shakera" },
        { amount: 1, en: "Half a passion fruit", pl: "Połówka marakui" }
      ],
      steps: {
        en: [
          "Chill the glass.",
          "Put everything except the prosecco in a shaker with ice.",
          "Shake hard for about 15 seconds.",
          "Strain into the chilled glass.",
          "Float half a passion fruit on top.",
          "Serve the prosecco in a shot glass on the side."
        ],
        pl: [
          "Schłodź kieliszek.",
          "Wlej wszystko oprócz prosecco do shakera z lodem.",
          "Wstrząsaj mocno ok. 15 sekund.",
          "Przecedź do schłodzonego kieliszka.",
          "Połóż na wierzchu połówkę marakui.",
          "Prosecco podaj obok w kieliszku do shota."
        ]
      }
    }
  },
  {
    id: "peanut-butter-cup-martini",
    category: "alcoholic",
    image: "images/peanut-butter-cup-martini.jpg",
    available: true,
    name: { en: "Peanut Butter Cup Martini", pl: "Martini Peanut Butter Cup" },
    description: {
      en: "Creamy dessert cocktail with chocolate and peanut butter, in a chocolate-swirled glass.",
      pl: "Kremowy deserowy koktajl z czekoladą i masłem orzechowym, w kieliszku z czekoladowym sosem."
    },
    recipe: {
      glass: { en: "Martini glass, chilled", pl: "Kieliszek do martini, schłodzony" },
      ingredients: [
        { amount: 30, unit: "ml", en: "Vanilla vodka", pl: "Wódka waniliowa" },
        { amount: 30, unit: "ml", en: "Chocolate liqueur (crème de cacao)", pl: "Likier czekoladowy (crème de cacao)" },
        { amount: 30, unit: "ml", en: "Irish cream (e.g. Baileys)", pl: "Likier kremowy (np. Baileys)" },
        { amount: 1, unit: "tsp", en: "Smooth peanut butter", pl: "Gładkie masło orzechowe" },
        { amount: 30, unit: "ml", en: "Milk or cream", pl: "Mleko lub śmietanka" },
        { en: "Chocolate syrup", pl: "Sos czekoladowy" },
        { en: "Ice cubes for shaking", pl: "Kostki lodu do shakera" },
        { amount: 1, en: "Peanut butter cup", pl: "Czekoladka z masłem orzechowym (Reese's)" }
      ],
      steps: {
        en: [
          "Swirl chocolate syrup around the inside of the glass and chill it.",
          "Put the vodka, liqueurs, peanut butter and milk in a shaker with ice.",
          "Shake very hard for about 20 seconds so the peanut butter blends in.",
          "Strain into the glass.",
          "Garnish with a peanut butter cup on the rim."
        ],
        pl: [
          "Rozprowadź sos czekoladowy po wnętrzu kieliszka i schłodź go.",
          "Wlej wódkę, likiery, masło orzechowe i mleko do shakera z lodem.",
          "Wstrząsaj bardzo mocno ok. 20 sekund, żeby masło orzechowe się połączyło.",
          "Przecedź do kieliszka.",
          "Udekoruj czekoladką z masłem orzechowym na brzegu."
        ]
      }
    }
  },
  {
    id: "red-wine",
    category: "alcoholic",
    image: "images/red-wine.jpg",
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
    id: "white-wine",
    category: "alcoholic",
    image: "images/white-wine.jpg",
    available: true,
    name: { en: "White wine", pl: "Białe wino" },
    description: {
      en: "A chilled glass of dry white wine.",
      pl: "Kieliszek schłodzonego wytrawnego białego wina."
    },
    recipe: {
      glass: { en: "White wine glass", pl: "Kieliszek do białego wina" },
      ingredients: [
        { amount: 150, unit: "ml", en: "Dry white wine (8–10 °C)", pl: "Wytrawne białe wino (8–10 °C)" }
      ],
      steps: {
        en: [
          "Keep the bottle in the fridge, or put it in an ice bucket for 20 minutes.",
          "Fill the glass to about one third.",
          "Hold the glass by the stem so the wine stays cool."
        ],
        pl: [
          "Trzymaj butelkę w lodówce albo włóż ją na 20 minut do wiaderka z lodem.",
          "Nalej wino do około jednej trzeciej kieliszka.",
          "Trzymaj kieliszek za nóżkę, żeby wino się nie ogrzało."
        ]
      }
    }
  },
  {
    id: "beer",
    category: "alcoholic",
    image: "images/beer.jpg",
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
    id: "guinness",
    category: "alcoholic",
    image: "images/guinness.jpg",
    available: true,
    name: { en: "Guinness", pl: "Guinness" },
    description: {
      en: "Irish dry stout, dark and smooth with a creamy head.",
      pl: "Irlandzki stout, ciemny i gładki, z kremową pianką."
    },
    recipe: {
      glass: { en: "Pint glass (tulip) or a large beer glass", pl: "Szklanka typu pint (tulipan) lub duża szklanka do piwa" },
      ingredients: [
        { amount: 440, unit: "ml", en: "Guinness Draught (can with widget), chilled", pl: "Guinness Draught (puszka z widgetem), schłodzony" }
      ],
      steps: {
        en: [
          "Open the can and wait a moment for the widget to release.",
          "Hold the glass at 45° and pour the whole can in one go.",
          "Straighten the glass towards the end of the pour.",
          "Let it settle for about 1–2 minutes until the beer turns dark and the head is creamy, then serve."
        ],
        pl: [
          "Otwórz puszkę i odczekaj chwilę, aż zadziała widget.",
          "Trzymaj szklankę pod kątem 45° i wlej całą puszkę za jednym razem.",
          "Pod koniec nalewania wyprostuj szklankę.",
          "Odstaw na ok. 1–2 minuty, aż piwo ściemnieje, a piana będzie kremowa, potem podaj."
        ]
      }
    }
  },
  {
    id: "whisky",
    category: "alcoholic",
    image: "images/whisky.jpg",
    available: true,
    name: { en: "Whisky", pl: "Whisky" },
    description: {
      en: "Neat, with a drop of water, or on the rocks. Just tell me how you like it.",
      pl: "Czysta, z kroplą wody lub z lodem. Powiedz, jak lubisz."
    },
    recipe: {
      glass: { en: "Rocks glass (tumbler)", pl: "Szklanka typu old fashioned (tumbler)" },
      ingredients: [
        { amount: 50, unit: "ml", en: "Whisky", pl: "Whisky" },
        { en: "Large ice cube (optional)", pl: "Duża kostka lodu (opcjonalnie)" },
        { en: "A few drops of water (optional)", pl: "Kilka kropli wody (opcjonalnie)" }
      ],
      steps: {
        en: [
          "Ask whether the guest wants it neat, with water or on the rocks.",
          "For on the rocks, put one large ice cube in the glass first.",
          "Pour the whisky.",
          "If asked, add a few drops of water."
        ],
        pl: [
          "Zapytaj, czy gość woli czystą, z wodą czy z lodem.",
          "Jeśli z lodem, najpierw włóż do szklanki jedną dużą kostkę lodu.",
          "Nalej whisky.",
          "Jeśli gość chce, dodaj kilka kropli wody."
        ]
      }
    }
  },
  {
    id: "virgin-mojito",
    category: "non-alcoholic",
    image: "images/mojito.jpg",
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
    image: "images/lemonade.jpg",
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
    image: "images/coffee.jpg",
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
    image: "images/tea.jpg",
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
    image: "images/sparkling-water.jpg",
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
