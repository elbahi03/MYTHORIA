// les cartes :

const cartes = [
    {
        id: 1,
        nom: "Squirtle",
        description: "Pokémon Tortaruguina. Nº 0007. Altura: 0,5 m. Peso: 9,0 kg. Quando este Pokémon sente-se ameaçado, esconde-se dentro do seu casco e lança água pela boca.",
        imga: "https://i.pinimg.com/736x/91/0f/1e/910f1e0d9615761e8a89099b729a19f8.jpg",
        categorie: "common",
        type: "monstres",
        favourite: false,
        pv: 60,
        element: "water",
        attaques: [
            {
                nom: "Retirada",
                cout: ["water"],
                degats: 0,
            },
            {
                nom: "Quebra-crânio",
                cout: ["water"],
                degats: 20,
            }
        ]
    },
    {
        id: 2,
        nom: "Pikachu",
        description: "Pokémon Rato. Nº 0025. Altura: 0,4 m. Peso: 6,0 kg. Quando está com raiva, descarrega imediatamente a energia armazenada nas bolsas em suas bochechas.",
        imga: "https://i.pinimg.com/736x/bb/b6/2c/bbb62c9903cfee2efd5a2749b9712945.jpg",
        categorie: "common",
        type: "monstres",
        favourite: false,
        pv: 60,
        element: "electric",
        attaques: [
            {
                nom: "Carga",
                cout: ["electric"],
                degats: 30,
            },
            {
                nom: "Soco Pikachu",
                cout: ["electric", "colorless"],
                degats: 80,
            }
        ]
    },
    {
        id: 3,
        nom: "Charmeleon",
        description: "Flame Pokémon. NO. 0005. HT: 3'7\". WT: 41.9 lbs. If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.",
        imga: "https://i.pinimg.com/1200x/24/76/31/2476310fa7a64535e5f2cf0965297fae.jpg",
        categorie: "common",
        type: "monstres",
        favourite: false,
        pv: 90,
        element: "fire",
        attaques: [
            {
                nom: "Heat Tackle",
                cout: ["fire"],
                degats: 70,
            }
        ]
    },
    {
        id: 4,
        nom: "Ptitard",
        description: "Pokémon Têtard. N° 0060. Taille : 0,6 m. Poids : 12,4 kg. Dans les rivières au courant puissant, il se ventouse pour s'accrocher aux rochers.",
        imga: "https://i.pinimg.com/736x/50/15/0d/50150de8347864270d8097c31cc167a0.jpg",
        categorie: "common",
        type: "monstres",
        favourite: false,
        pv: 60,
        element: "water",
        attaques: [
            {
                nom: "Écume",
                cout: ["water"],
                degats: 10,
            }
        ]
    },
    {
        id: 5,
        nom: "Clefairy",
        description: "Pokémon Fada. N° 0035. Altura: 0,6 m. Peso: 7,5 kg. É muito popular devido ao seu gritinho e comportamento adoráveis. No entanto, este Pokémon fofinho raramente é encontrado.",
        imga: "https://i.pinimg.com/736x/f0/d5/79/f0d5797c78924e5ea0a18e90a9a70037.jpg",
        categorie: "common",
        type: "monstres",
        favourite: false,
        pv: 60,
        element: "fairy",
        attaques: [
            {
                nom: "Convite Lunar",
                cout: ["fairy"],
                degats: 15,
            },
            {
                nom: "Estalo",
                cout: ["fairy", "colorless"],
                degats: 30,
            }
        ]
    },
    {
        id: 6,
        nom: "Mr. Mime",
        description: "Pokémon Barreira. Nº 0122. Altura: 1,3 m. Peso: 54,5 kg. Suas mãos talvez não sejam grandes por acaso: muitos cientistas acreditam que as palmas se alargaram para fazer mímica.",
        imga: "https://i.pinimg.com/736x/71/7d/e4/717de407470701df213a8565c2bbf41e.jpg",
        categorie: "common",
        type: "monstres",
        favourite: false,
        pv: 90,
        element: "psychic",
        attaques: [
            {
                nom: "Show de Imitação",
                cout: ["colorless"],
                degats: 10,
            },
            {
                nom: "Onda Misteriosa",
                cout: ["psychic"],
                degats: 40,
            }
        ]
    },
    {
        id: 7,
        nom: "Mr. Mime",
        description: "Pokémon Barreira. Nº 0122. Altura: 1,3 m. Peso: 54,5 kg. Suas mãos talvez não sejam grandes por acaso: muitos cientistas acreditam que as palmas se alargaram para fazer mímica.",
        imga: "https://i.pinimg.com/1200x/71/7d/e4/717de407470701df213a8565c2bbf41e.jpg",
        categorie: "common",
        type: "monstres",
        favourite: false,
        pv: 90,
        element: "psychic",
        attaques: [
            {
                nom: "Show de Imitação",
                cout: ["colorless"],
                degats: 20,
            },
            {
                nom: "Onda Misteriosa",
                cout: ["psychic"],
                degats: 20,
            }
        ]
    },
    {
        id: 8,
        nom: "Vulpix",
        description: "Pokémon Raposa. Nº 0037. Altura: 0,6 m. Peso: 9,9 kg. Conforme vai crescendo, suas seis caudas centinhas tornam-se mais belas, com uma pelugem ainda mais luxuosa.",
        imga: "https://i.pinimg.com/736x/5a/d3/e1/5ad3e18494c96cf9ccbb3c04c94c67ed.jpg",
        categorie: "common",
        type: "monstres",
        favourite: false,
        pv: 70,
        element: "fire",
        attaques: [
            {
                nom: "Desmantelar",
                cout: ["fire"],
                degats: 30,
            }
        ]
    },
    {
        id: 9,
        nom: "Cubone",
        description: "Pokémon Solitario. N° 0104. Altura: 0,4 m. Peso: 6,5 kg. Siempre lleva la calavera de su madre como casco, por lo que nadie ha visto nunca su verdadera cara.",
        imga: "https://i.pinimg.com/1200x/d7/97/d7/d797d7be832df0ca5f53789aa5b18b8c.jpg",
        categorie: "common",
        type: "monstres",
        favourite: false,
        pv: 60,
        element: "fighting",
        attaques: [
            {
                nom: "Huesomerang",
                cout: ["fighting"],
                degats: 40,
            }
        ]
    },
    {
        id: 10,
        nom: "Meowth",
        description: "Pokémon Arranha Gato. Nº 0052. Altura: 0,4 m. Peso: 4,2 kg. Ama coisas reluzentes. Quando vê um objeto brilhante, a moeda dourada na sua cabeça brilha também.",
        imga: "https://i.pinimg.com/736x/08/f0/a2/08f0a2f1198f1b7b7906ee31d582e3a2.jpg",
        categorie: "common",
        type: "monstres",
        favourite: false,
        pv: 70,
        element: "colorless",
        attaques: [
            {
                nom: "Golpes de Fúria",
                cout: ["colorless"],
                degats: 60,
            }
        ]
    },
    {
        id: 11,
        nom: "Meowth V",
        description: "Carte Promo (SWSH004). Règle V : Lorsque votre Pokémon V est mis K.O., votre adversaire prend 2 cartes Récompense. Illustrateur : aky CG Works.",
        imga: "https://i.pinimg.com/1200x/b1/9e/6a/b19e6a61ea62e686cb04aa9a0e37934a.jpg",
        categorie: "rare",
        type: "monstres",
        favourite: false,
        pv: 180,
        element: "colorless",
        attaques: [
            {
                nom: "Pay Day",
                cout: ["colorless"],
                degats: 60,
            },
            {
                nom: "Slashing Claw",
                cout: ["colorless"],
                degats: 130,
            }
        ]
    },
    {
        id: 12,
        nom: "Exeggutor ex",
        description: "Carte Pokémon ex (Stage 1, évolue d'Exeggcute). Règle ex : Lorsque votre Pokémon ex est mis K.O., votre adversaire gagne 2 points. Illustrateur : PLANETA CG Works.",
        imga: "https://i.pinimg.com/736x/1a/ee/d7/1aeed7115d6b0693645549e97ff08141.jpg",
        categorie: "rare",
        type: "monstres",
        favourite: false,
        pv: 160,
        element: "grass",
        attaques: [
            {
                nom: "Tropical Swing",
                cout: ["grass"],
                degats: 100,
            }
        ]
    },
    {
        id: 13,
        nom: "Umbreon V",
        description: "Carte Pokémon V (Single Strike). Règle V : Lorsque votre Pokémon V est mis K.O., votre adversaire prend 2 cartes Récompense. Illustrateur : Skan Graphics.",
        imga: "https://i.pinimg.com/736x/ee/9f/1e/ee9f1e5e3d28785cc6dde514ee049ff4.jpg",
        categorie: "rare",
        type: "monstres",
        favourite: false,
        pv: 200,
        element: "darkness",
        attaques: [
            {
                nom: "Mean Look",
                cout: ["darkness"],
                degats: 30,
            },
            {
                nom: "Moonlight Blade",
                cout: ["darkness", "colorless"],
                degats: 160,
            }
        ]
    },
    {
        id: 14,
        nom: "Jolteon V",
        description: "Carte Promo (SWSH151). Règle V : Lorsque votre Pokémon V est mis K.O., votre adversaire prend 2 cartes Récompense. Illustrateur : Skan Graphics.",
        imga: "https://i.pinimg.com/736x/89/68/ee/8968eeab92d36c30e36f55f3a71db514.jpg",
        categorie: "rare",
        type: "monstres",
        favourite: false,
        pv: 190,
        element: "electric",
        attaques: [
            {
                nom: "Thunder Spear",
                cout: ["colorless"],
                degats: 30,
            },
            {
                nom: "Pin Missile",
                cout: ["electric", "colorless"],
                degats: 200,
            }
        ]
    },
    {
        id: 15,
        nom: "Leafeon V",
        description: "Carte Pokémon V (Evolving Skies, 166/203). Règle V : Lorsque votre Pokémon V est mis K.O., votre adversaire prend 2 cartes Récompense. Illustrateur : Skan Graphics.",
        imga: "https://i.pinimg.com/736x/dc/f8/34/dcf834e1fe2a8e13e3c52a859e3a9bc8.jpg",
        categorie: "rare",
        type: "monstres",
        favourite: false,
        pv: 200,
        element: "grass",
        attaques: [
            {
                nom: "Leaf Blade",
                cout: ["grass", "colorless", "colorless"],
                degats: 200,
            }
        ]
    },
    {
        id: 16,
        nom: "Corviknight V",
        description: "Carte Pokémon V (Evolving Skies, 156/163). Règle V : Lorsque votre Pokémon V est mis K.O., votre adversaire prend 2 cartes Récompense. Illustrateur : PLANETA Mochizuki.",
        imga: "https://i.pinimg.com/1200x/ef/ef/4e/efef4ecb26d5d711f2cf2984b8440ca8.jpg",
        categorie: "rare",
        type: "hero",
        favourite: false,
        pv: 210,
        element: "metal",
        attaques: [
            {
                nom: "Clutch",
                cout: ["metal"],
                degats: 30,
            },
            {
                nom: "Sky Hurricane",
                cout: ["metal", "colorless"],
                degats: 190,
            }
        ]
    },
    {
        id: 17,
        nom: "Mewtwo ex",
        description: "Carte Pokémon ex (Basic, illustration gold/rainbow). Règle ex : Lorsque votre Pokémon ex est mis K.O., votre adversaire gagne 2 points. Illustrateur : 5ban Graphics.",
        imga: "https://i.pinimg.com/736x/62/a7/61/62a761cc6dfa5eef83d7b0b654076c7c.jpg",
        categorie: "rare",
        type: "hero",
        favourite: false,
        pv: 150,
        element: "psychic",
        attaques: [
            {
                nom: "Psychic Sphere",
                cout: ["psychic", "colorless"],
                degats: 50,
            },
            {
                nom: "Psydrive",
                cout: ["psychic", "psychic", "colorless", "colorless"],
                degats: 150,
            }
        ]
    },
    {
        id: 18,
        nom: "Charizard ex",
        description: "Carte Pokémon ex (Stage 2, évolue de Charmeleon). Règle ex : Lorsque votre Pokémon ex est mis K.O., votre adversaire gagne 2 points. Illustrateur : PLANETA Igarashi.",
        imga: "https://i.pinimg.com/736x/e3/13/12/e3131266ff9afa0af8c387947f23aa53.jpg",
        categorie: "rare",
        type: "hero",
        favourite: false,
        pv: 180,
        element: "fire",
        attaques: [
            {
                nom: "Stoke",
                cout: ["fire"],
                degats: 35,
            },
            {
                nom: "Steam Artillery",
                cout: ["fire", "colorless"],
                degats: 160,
            }
        ]
    },
    {
        id: 19,
        nom: "Gengar ex",
        description: "Carte Pokémon ex (Stage 2, évolue de Haunter). Règle ex : Lorsque votre Pokémon ex est mis K.O., votre adversaire gagne 2 points. Illustrateur : PLANETA CG Works.",
        imga: "https://i.pinimg.com/736x/3f/c0/5c/3fc05c68716e22b6b32a9d8da22d3cf6.jpg",
        categorie: "rare",
        type: "hero",
        favourite: false,
        pv: 170,
        element: "psychic",
        attaques: [
            {
                nom: "Spooky Shot",
                cout: ["psychic", "psychic", "psychic"],
                degats: 110,
            }
        ]
    },
    {
        id: 20,
        nom: "Mimikyu ex",
        description: "Carte Pokémon ex (Basic, 069/159). Règle ex : Lorsque votre Pokémon ex est mis K.O., votre adversaire prend 2 cartes Récompense. Illustrateur : PLANETA Igarashi.",
        imga: "https://i.pinimg.com/736x/d0/54/12/d05412f113bb7adccd95ed420eb52f42.jpg",
        categorie: "rare",
        type: "hero",
        favourite: false,
        pv: 190,
        element: "psychic",
        attaques: [
            {
                nom: "Miscchievous Hands",
                cout: ["psychic", "colorless"],
                degats: 0,
            },
            {
                nom: "Ghostly Trip",
                cout: ["psychic", "colorless"],
                degats: 120,
            }
        ]
    },
    {
        id: 21,
        nom: "Gengar ex",
        description: "Carte Pokémon ex (Stage 2, évolue de Haunter, 01/354). Règle ex : Lorsque votre Pokémon ex est mis K.O., votre adversaire prend 2 cartes Récompense.",
        imga: "https://i.pinimg.com/736x/56/ff/da/56ffdad36604984860c4a2c95885c745.jpg",
        categorie: "epic",
        type: "hero",
        favourite: false,
        pv: 320,
        element: "psychic",
        attaques: [
            {
                nom: "Dream Eater",
                cout: ["psychic", "colorless"],
                degats: 150,
            },
            {
                nom: "Shadow Ball",
                cout: ["psychic"],
                degats: 80,
            }
        ],
    },
    {
        id: 22,
        nom: "Mega Charizard X ex",
        description: "Carte Pokémon ex (Stage 2, évolue de Charmeleon, 125/094). Méga-Évolution de Charizard. Règle Méga Évolution ex : Lorsque votre Pokémon Méga Évolution ex est mis K.O., votre adversaire prend 3 cartes Récompense. Illustrateur : danciao.",
        imga: "https://i.pinimg.com/736x/35/1f/c5/351fc51d72cd1b4528c95125d1b90ea1.jpg",
        categorie: "epic",
        type: "hero",
        favourite: false,
        pv: 360,
        element: "fire",
        attaques: [
            {
                nom: "Inferno X",
                cout: ["fire"],
                degats: 300,
            }
        ]
    },
    {
        id: 23,
        nom: "Charizard ex",
        description: "Carte Pokémon ex Tera (Stage 2, évolue de Charmeleon, 234/091). Tera : tant que ce Pokémon est sur votre Banc, prévenez tous les dégâts qui lui sont infligés par les attaques (les vôtres comme celles de votre adversaire). Règle ex : Lorsque votre Pokémon ex est mis K.O., votre adversaire prend 2 cartes Récompense. Illustrateur : AKIRA EGAWA.",
        imga: "https://i.pinimg.com/736x/8e/33/64/8e33649ad42dd8ad2774a5d324de9310.jpg",
        categorie: "epic",
        type: "hero",
        favourite: false,
        pv: 330,
        element: "darkness",
        attaques: [
            {
                nom: "Burning Darkness",
                cout: ["fire", "fire"],
                degats: 180,
            }
        ],
    },
    {
        id: 24,
        nom: "Mega Dragonite ex",
        description: "Carte Pokémon ex (Stage 2, évolue de Dragonair, 231/217). Méga-Évolution de Dragonite. Règle Méga Évolution ex : Lorsque votre Pokémon Méga Évolution ex est mis K.O., votre adversaire prend 3 cartes Récompense. Illustrateur : DOM.",
        imga: "https://i.pinimg.com/736x/87/2f/78/872f78eab5cc319022cbd2f61a03323e.jpg",
        categorie: "epic",
        type: "hero",
        favourite: false,
        pv: 370,
        element: "colorless",
        attaques: [
            {
                nom: "Ryuno Glide",
                cout: ["water", "water", "colorless"],
                degats: 330,
            }
        ],
    },
    {
        id: 25,
        nom: "Mega Froslass ex",
        description: "Carte Pokémon ex (Stage 1, évolue de Snorunt, 265/217). Méga-Évolution de Froslass. Règle Méga Évolution ex : Lorsque votre Pokémon Méga Évolution ex est mis K.O., votre adversaire prend 3 cartes Récompense. Illustrateur : Saboteri.",
        imga: "https://i.pinimg.com/736x/e0/9e/db/e09edb56a3e5801e54cb95250f136ca0.jpg",
        categorie: "epic",
        type: "hero",
        favourite: false,
        pv: 310,
        element: "water",
        attaques: [
            {
                nom: "Resentful Refrain",
                cout: ["water"],
                degats: 300,
            },
            {
                nom: "Absolute Snow",
                cout: ["water", "colorless"],
                degats: 150,
            }
        ]
    },
    {
        id: 26,
        nom: "Tyranitar ex",
        description: "Carte Pokémon ex Téracristal (Niveau 2, évolution de Ymphect, 211/197). Téracristal : tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire). Règle ex : Lorsque votre Pokémon ex est mis K.O., l'adversaire récupère 2 cartes Récompense. Illustrateur : 5ban Graphics.",
        imga: "https://i.pinimg.com/736x/3f/cf/37/3fcf376e1e016c8dee1c8d3dfbcb2465.jpg",
        categorie: "epic",
        type: "hero",
        favourite: false,
        pv: 340,
        element: "electric",
        attaques: [
            {
                nom: "Lance-Montagnes",
                cout: ["fighting"],
                degats: 120,
            },
            {
                nom: "Saccage Électrique",
                cout: ["fighting"],
                degats: 160,
            }
        ]
    },
    {
        id: 27,
        nom: "Charizard ex",
        description: "Carte Pokémon ex Tera (Stage 2, évolue de Charmeleon, 215/197). Tera : tant que ce Pokémon est sur votre Banc, prévenez tous les dégâts qui lui sont infligés par les attaques (les vôtres comme celles de votre adversaire). Règle ex : Lorsque votre Pokémon ex est mis K.O., votre adversaire prend 2 cartes Récompense. Illustrateur : 5ban Graphics.",
        imga: "https://i.pinimg.com/736x/9d/36/ce/9d36ce48391730e3a277a94650c31c05.jpg",
        categorie: "epic",
        type: "hero",
        favourite: false,
        pv: 330,
        element: "fire",
        attaques: [
            {
                nom: "Burning Darkness",
                cout: ["fire"],
                degats: 250,
            }
        ],
    },
    {
        id: 28,
        nom: "Mega Lucario ex",
        description: "Carte Pokémon ex (1 évolution, évolue de Riolu, 228/193). Méga-Évolution de Lucario. Règle Méga Évolution ex : Lorsque votre Pokémon Méga Évolution ex est mis K.O., votre adversaire prend 3 cartes Récompense. Illustrateur : 5ban Graphics.",
        imga: "https://i.pinimg.com/736x/36/4d/f2/364df26e79aa7b0ad1baef58f4826007.jpg",
        categorie: "epic",
        type: "hero",
        favourite: false,
        pv: 340,
        element: "fighting",
        attaques: [
            {
                nom: "Hadou Burst",
                cout: ["fighting"],
                degats: 130,
            },
            {
                nom: "Mega Brave",
                cout: ["fighting"],
                degats: 270,
            }
        ]
    },
    {
        id: 29,
        nom: "Mega Pyroar ex",
        description: "Carte Pokémon ex japonaise (1 évolution, évolue de Litleo, 015/083 RR). Méga-Évolution de Pyroar. Règle Méga Évolution ex : Lorsque votre Pokémon Méga Évolution ex est mis K.O., votre adversaire prend 3 cartes Récompense. Illustrateur : Keisuke Azuma.",
        imga: "https://i.pinimg.com/1200x/0f/2e/b0/0f2eb053223b5a09a4acc13a86951ec2.jpg",
        categorie: "epic",
        type: "hero",
        favourite: false,
        pv: 340,
        element: "fire",
        attaques: [
            {
                nom: "Roar / Howl",
                cout: ["fire", "colorless"],
                degats: 80,
            },
            {
                nom: "Big Bang Fire",
                cout: ["fire", "colorless"],
                degats: 300,
            }
        ]
    },
    {
        id: 30,
        nom: "Blastoise VMAX",
        description: "Carte Pokémon VMAX (évolue de Blastoise V, forme Gigantamax). Règle VMAX : Lorsque votre Pokémon VMAX est mis K.O., votre adversaire prend 3 cartes Récompense. Illustrateur : rushfortacos.",
        imga: "https://i.pinimg.com/736x/cc/65/fd/cc65fda42c67421efa9f66956a60b2fd.jpg",
        categorie: "epic",
        type: "serviteur",
        favourite: false,
        pv: 350,
        element: "water",
        attaques: [
            {
                nom: "G-Max Geyser",
                cout: ["water"],
                degats: 200,
            }
        ]
    },
    {
        id: 31,
        nom: "Dark Charizard VMAX",
        description: "Carte Pokémon VMAX (custom / fan-made, évolue de Charizard, forme Gigantamax). Règle VMAX : Lorsque votre Pokémon VMAX est mis K.O., votre adversaire prend 3 cartes Récompense. Illustrateur : Amogh the great.",
        imga: "https://i.pinimg.com/1200x/2e/c9/28/2ec92880a9cfca5d4343e023ce3f3ec7.jpg",
        categorie: "legend",
        type: "serviteur",
        favourite: false,
        pv: 500,
        element: "darkness",
        attaques: [
            {
                nom: "Darkness Cover",
                cout: ["fire", "fighting", "darkness"],
                degats: 500,
                effet: "Défaussez 3 Énergies de cette carte."
            },
            {
                nom: "Soul",
                cout: ["fire", "darkness"],
                degats: 250,
            }
        ],
    },
    {
        id: 32,
        nom: "Mewtwo VMAX",
        description: "Carte Pokémon VMAX (custom / fan-made, évolue de MEW, forme Gigantamax). Règle VMAX : Lorsque votre Pokémon VMAX est mis K.O., votre adversaire prend 3 cartes Récompense.",
        imga: "https://i.pinimg.com/1200x/17/8c/c7/178cc79e5e2da9ebe4d84989f274aa4e.jpg",
        categorie: "legend",
        type: "serviteur",
        favourite: false,
        pv: 760,
        element: "darkness",
        attaques: [
            {
                nom: "KO-",
                cout: ["colorless"],
                degats: 750,
            },
            {
                nom: "Dark Strik",
                cout: ["darkness", "darkness"],
                degats: 500,
            }
        ],
    },
    {
        id: 33,
        nom: "Primal Groudon EX",
        description: "Carte Pokémon EX (custom / fake, évolue de Primal Groudon, 159/300). Règle EX : Lorsque votre Pokémon EX est mis K.O., votre adversaire prend 2 cartes Récompense. Règle Méga Évolution : lorsqu'un de vos Pokémon devient un Pokémon Méga Évolution, votre tour se termine. Illustrateur : ???.",
        imga: "https://i.pinimg.com/736x/d1/be/80/d1be8073b5b1fc0a336be919ac292b3e.jpg",
        categorie: "legend",
        type: "serviteur",
        favourite: false,
        pv: 750,
        element: "fighting",
        attaques: [
            {
                nom: "Continental Quake",
                cout: ["fighting"],
                degats: 450,
            },
            {
                nom: "Volcanic Explosion",
                cout: ["fire"],
                degats: 320,
            }
        ],
    },
    {
        id: 35,
        nom: "M Gyarados VMAX",
        description: "Carte Pokémon VMAX (custom / fan-made, évolue de Gyarados, forme Gigantamax). Règle VMAX : Lorsque votre Pokémon VMAX est mis K.O., votre adversaire prend 3 cartes Récompense. Illustrateur : aschefield.",
        imga: "https://i.pinimg.com/736x/7e/d1/03/7ed1038bd2a1676f26ccd8b23c9736b4.jpg",
        categorie: "legend",
        type: "serviteur",
        favourite: false,
        pv: 600,
        element: "water",
        attaques: [
            {
                nom: "Watercanon",
                cout: ["water", "fighting", "fighting", "fighting"],
                degats: "540+",
            },
            {
                nom: "Water jet",
                cout: ["water", "water", "fighting", "fighting"],
                degats: "780+",
            }
        ]
    },
    {
        id: 36,
        nom: "Reshiram V",
        description: "Carte Pokémon V (custom / fan-made, 09/2005). Règle V : Lorsque votre Pokémon V est mis K.O., votre adversaire prend 2 cartes Récompense. Illustrateur : Quentin Boichut.",
        imga: "https://i.pinimg.com/1200x/66/40/38/664038a4cbfafec9e6c5e6be301a6498.jpg",
        categorie: "legend",
        type: "serviteur",
        favourite: false,
        pv: 570,
        element: "fire",
        attaques: [
            {
                nom: "Cross Flame",
                cout: ["fire", "colorless"],
                degats: 610,
            },
            {
                nom: "Blue Flare",
                cout: ["fire", "colorless"],
                degats: 540,
            },
            {
                nom: "Draco-Reality",
                cout: ["fire", "colorless"],
                degats: 640,
            }
        ],
    },
    {
        id: 37,
        nom: "Xerneas GX",
        description: "Carte Pokémon GX (custom / fan-made, 09/2005). Règle GX : Lorsque votre Pokémon GX est mis K.O., votre adversaire prend 2 cartes Récompense. Illustrateur : Quentin BOICHUT.",
        imga: "https://i.pinimg.com/1200x/f7/7f/8c/f77f8c790aa5b168eb1a57f28e63c4e8.jpg",
        categorie: "legend",
        type: "serviteur",
        favourite: false,
        pv: 640,
        element: "fairy",
        attaques: [
            {
                nom: "Girdwood X",
                cout: ["grass", "fairy"],
                degats: 460,
            },
            {
                nom: "Geo-Control GX",
                cout: ["fairy"],
                degats: 500,
            }
        ],

    },
    {
        id: 38,
        nom: "Rayquaza Shiny VMAX",
        description: "Carte Pokémon VMAX (custom / fan-made, 001/100, forme Dynamax). Règle VMAX : Lorsque votre Pokémon VMAX est mis K.O., votre adversaire prend 3 cartes Récompense. Illustrateur : Your Name.",
        imga: "https://i.pinimg.com/736x/2b/84/92/2b8492929878c8283693556e3d9b668c.jpg",
        categorie: "legend",
        type: "sort",
        favourite: false,
        pv: 999,
        element: "colorless",
        attaques: [
            {
                nom: "Dragons",
                cout: ["dragon"],
                degats: 680,
            },
            {
                nom: "Poderes",
                cout: ["dragon", "fighting", "fire", "dragon"],
                degats: 300
            }
        ]
    },
    {
        id: 39,
        nom: "Corruption, God of Destruction VMAX",
        description: "Carte Pokémon VMAX (custom / fan-made, « Fractal 2.0 », forme Gigantamax). Règle VMAX : Lorsque votre Pokémon VMAX est mis K.O., votre adversaire prend 3 cartes Récompense. Illustrateur : aschefield.",
        imga: "https://i.pinimg.com/1200x/65/4f/65/654f6580e9a8244114c7cfcb591ba55e.jpg",
        categorie: "legend",
        type: "sort",
        favourite: false,
        pv: 9000,
        element: "darkness",
        attaques: [
            {
                nom: "Infinite beam of Rager destruction",
                cout: ["psychic", "psychic", "fire", "colorless", "colorless"],
                degats: 999,
            }
        ],
    },
    {
        id: 40,
        nom: "Solgaleo V",
        description: "Carte Pokémon V (custom / fan-made). Règle V : Lorsque votre Pokémon V est mis K.O., votre adversaire prend 2 cartes Récompense. Illustrateur : aschefield.",
        imga: "https://i.pinimg.com/736x/60/5e/02/605e02a79af04313b45898bade496cc5.jpg",
        categorie: "legend",
        type: "sort",
        favourite: false,
        pv: 999,
        element: "psychic",
        attaques: [
            {
                nom: "ToqueAssombroso",
                cout: ["psychic"],
                degats: 111,
            },
            {
                nom: "GigaEmpacto",
                cout: ["psychic", "colorless"],
                degats: 222,
            }
        ]
    }


];

// les mon cartes :

const mycartes = [];

// les mon boosters :

const myboosters = [];

// les booster :

const boosters = [
    {
        id: 1,
        nom: "Beginner Pack",
        prix: 100,
        icon: "./img/cartnormal.png",
        nombreCartes: 5,
        description: "Un pack idéal pour les nouveaux aventuriers. Découvrez des héros, des monstres et des sorts pour commencer votre collection."

    },
    {
        id: 2,
        nom: "Summoning of the Legends",
        prix: 250,
        icon: "./img/deuxcart.png",
        nombreCartes: 5,
        description: "Un booster premium offrant de meilleures chances d'obtenir des cartes rares, épiques et légendaires. Invoquez les créatures les plus puissantes de Mythoria."
    },
    {
        id: 3,
        nom: "Dark Summoning",
        prix: 400,
        icon: "./img/troiscart.png",
        nombreCartes: 5,
        description: "Plongez dans les ténèbres avec des monstres redoutables, des serviteurs obscurs et des sorts interdits. Un booster destiné aux collectionneurs les plus audacieux."
    }
];

// le panier :

const Panier_achat = [];


// verifier de local storage :
if (localStorage.getItem("Panier_achat") !== null && localStorage.getItem("myboosters") !== null && localStorage.getItem("mycartes") !== null) {
    // get donnes de panier au local :
    let consol = localStorage.getItem(`Panier_achat`)
    consol = JSON.parse(consol)
    for (let con of consol) {
        Panier_achat.push(con)
    }
    let stokes = localStorage.getItem(`myboosters`)
    stokes = JSON.parse(stokes)
    for (let stoke of stokes) {
        myboosters.push(stoke)
    }
    myboosters.sort((a, b) => a - b);
    let stokages = localStorage.getItem(`mycartes`)
    stokages = JSON.parse(stokages)
    for (let stokage of stokages) {
        mycartes.push(stokage)
    }
} else {
    localStorage.setItem('Panier_achat', JSON.stringify(Panier_achat));
    localStorage.setItem('myboosters', JSON.stringify(myboosters));
    localStorage.setItem('mycartes', JSON.stringify(mycartes));
}


//// les variables :
const boutique = document.querySelector("#boutique");
const panier = document.querySelector('#panier');
const totalSpan = document.querySelector('#total');
let num_total = document.getElementById("total");
const length_panier = document.querySelector("#length_panier");
const packes = document.querySelector("#boosters");
const achat = document.querySelectorAll("achat");
const button = document.getElementById("valider-btn");
const mypacks = document.querySelector("#myboosters");
const cart_list = document.querySelector("#cart-list");
const cart_details = document.querySelector("#cart-details");
const cart_collection = document.querySelector("#my_cart");
// const affichage_cart = document.querySelector("#affichage_cart");
console.log(cart_list)
console.log(document.querySelector("#cart-details"));


length_panier.textContent = Panier_achat.length;

// les functions :

/// function de prix total de prix :
function total_prix() {
    let total = 0;
    for (let index of Panier_achat) {
        total += boosters[index - 1].prix;

    }
    return total;
}

/// affiche all les paniers disponible :
function affichepanier() {
    if (Panier_achat.length > 0) {
        for (let i = 0; i < Panier_achat.length; i++) {
            console.log(boosters[Panier_achat[i] - 1])
            panier.innerHTML += `
                <div class="achat" id="achat">
                    <p>${boosters[Panier_achat[i] - 1].nom}</p>
                    <p>${boosters[Panier_achat[i] - 1].prix}</p>
                    <button class="supprimer" name="${boosters[Panier_achat[i] - 1].id}">supprimer</button>
                </div>
    `
        }
    }
}

// function pour affiche all booster de user : 
function affichemyboosters() {
    if (myboosters.length !== 0) {
        for (let i = 0; i < myboosters.length; i++) {
            const div = document.createElement("div");
            div.className = "mybooster";
            div.id = "mybooster";
            const div_img = document.createElement("div");
            div_img.className = "mybooster";
            div_img.id = "mybooster";
            const pack = document.createElement("img");
            pack.src = boosters[myboosters[i] - 1].icon;
            pack.alt = boosters[myboosters[i] - 1].nom + " : " + boosters[myboosters[i] - 1].description;
            const nom = document.createElement("h3");
            nom.textContent = boosters[myboosters[i] - 1].nom;
            const btn = document.createElement("button");
            btn.textContent = "Open votre Booster";
            btn.className = "open";
            btn.id = "open";
            btn.name = `${myboosters[i]}`;
            div_img.appendChild(pack);
            div.appendChild(div_img);
            div.appendChild(nom);
            div.appendChild(btn);
            mypacks.appendChild(div);
        }
    }
}

/// function ajouter un produit un panier :
function ajouterProduit(index) {
    Panier_achat.push(index + 1);
    localStorage.setItem('Panier_achat', JSON.stringify(Panier_achat));

    // creation de div dans panier
    const achat = document.createElement('div');
    achat.className = "achat"
    achat.id = "achat"
    const titre = document.createElement('p');
    titre.textContent = `${boosters[index].nom}`
    const p = document.createElement('p');
    p.textContent = `${boosters[index].prix}`
    const btn = document.createElement('button');
    btn.textContent = 'supprimer';
    btn.className = 'supprimer';
    btn.name = `${boosters[index].id}`

    achat.appendChild(titre);
    achat.appendChild(p);
    achat.appendChild(btn);
    panier.appendChild(achat);

    let total = total_prix()
    totalSpan.textContent = total;
    length_panier.textContent = Panier_achat.length;
}

// function de affichage :
function affichecart() {
    console.log(mycartes)
    if (mycartes.length !== 0) {
        cart_list.textContent = "";
        for (let i = 0; i < mycartes.length; i++) {
            const my_cart = document.createElement('div');
            my_cart.id = "my_cart";
            my_cart.className = "my_cart";
            const cart_img = document.createElement('img');
            cart_img.src = cartes[mycartes[i]].imga;
            cart_img.alt = cartes[mycartes[i]].nom + " : " + cartes[mycartes[i]].description;
            cart_img.className = "cart_game";
            cart_img.dataset.name = `${mycartes[i]}`;
            my_cart.appendChild(cart_img);
            cart_list.appendChild(my_cart);
        }
    }
}

// function affichecart() {
//     console.log("mycartes =", mycartes);
//     console.log("cartes =", cartes);

//     for (let i = 0; i < mycartes.length; i++) {
//         console.log("Loop index:", i);
//         console.log("Value:", mycartes[i]);
//         console.log("Card found:", cartes[mycartes[i]]);

//         if (cartes[mycartes[i]] === undefined) {
//             console.error("PROBLEM: No card found for:", mycartes[i]);
//             continue;
//         }

//         console.log("Image:", cartes[mycartes[i]].imga);
//     }
// }

// function de filtrage avec type :
function affichecarteByType(type) {
    if (mycartes.length !== 0) {
        cart_list.textContent = "";
        for (let i = 0; i < mycartes.length; i++) {
            console.log(type)
            console.log(cartes[mycartes[i]].type === type)
            if (cartes[mycartes[i]].type === type) {
                console.log(i);
                const my_cart = document.createElement('div');
                my_cart.id = "my_cart";
                my_cart.className = "my_cart";
                const cart_img = document.createElement('img');
                cart_img.src = cartes[mycartes[i]].imga;
                cart_img.alt = cartes[mycartes[i]].nom + " : " + cartes[mycartes[i]].description;
                cart_img.className = "cart_game";
                cart_img.dataset.name = `${mycartes[i]}`;
                my_cart.appendChild(cart_img);
                cart_list.appendChild(my_cart);
            }
        }
    }
}

// function de filtrage avec category :
function affichecarteBycategory (category) {
    if (mycartes.length !== 0) {
        cart_list.textContent = "";
        for (let i = 0; i < mycartes.length; i++) {
            if (cartes[mycartes[i]].categorie === category) {
                console.log(i);
                const my_cart = document.createElement('div');
                my_cart.id = "my_cart";
                my_cart.className = "my_cart";
                const cart_img = document.createElement('img');
                cart_img.src = cartes[mycartes[i]].imga;
                cart_img.alt = cartes[mycartes[i]].nom + " : " + cartes[mycartes[i]].description;
                cart_img.className = "cart_game";
                cart_img.dataset.name = `${mycartes[i]}`;
                my_cart.appendChild(cart_img);
                cart_list.appendChild(my_cart);
            }
        }
    }
}

// click en img pour afficher les images :
function imgclick() {
    const cart_collections = document.querySelectorAll("#my_cart");
    Array.from(cart_collections).forEach(cart_collection => {
        cart_collection.addEventListener('click', (e) => {
            console.log(e.target.classList.contains('cart_game'));
            if (e.target.classList.contains('cart_game')) {
                cart_details.textContent = "";
                let myid = e.target.dataset.name;
                myid = Number(myid);
                const div = document.createElement('div');
                div.id = "carte_details";
                div.className = "carte_details";
                const h3 = document.createElement('h3');
                h3.textContent = cartes[myid - 1].nom;
                const desc = document.createElement('p');
                desc.textContent = cartes[myid - 1].description;
                const p = document.createElement('p');
                p.textContent = cartes[myid - 1].type;

                div.appendChild(h3);
                div.appendChild(desc);
                div.appendChild(p);
                cart_details.appendChild(div);
            }
        })
    })
}

// dom de page home :
if (window.location.pathname === '/') {

    // affiche les boosters disponible :
    for (let i = 0; i < boosters.length; i++) {
        packes.innerHTML += `
    <div class="booster">
            <h3>${boosters[i].nom}</h3>
            <p>${boosters[i].prix} DH</p>
            <p>${boosters[i].nombreCartes} cartes</p>
        </div>
    `
    }
}

// dom de page boutique :
if (window.location.pathname === '/boutique.html') {

    num_total.textContent = total_prix();

    // affiche cart booster :
    for (let i = 0; i < boosters.length; i++) {
        boutique.innerHTML += `
    <div class="booster">
            <h3>${boosters[i].nom}</h3>
            <p>${boosters[i].prix} DH</p>
            <p>${boosters[i].nombreCartes} cartes</p>
            <button class="ajouter" name="${boosters[i].id}"> Ajouter au panier</button>
        </div>
    `
    }


    affichepanier();

    // ajouter un panier :
    boutique.addEventListener("click", (ev) => {
        if (ev.target.classList.contains('ajouter')) {
            ev.preventDefault(); // stop acualisy de page 
            console.log(ev.target.name);
            let index = ev.target.name - 1;
            ajouterProduit(index)
        }
    })

    //susprimer en panier
    panier.addEventListener('click', (e) => {
        if (e.target.classList.contains('supprimer')) {
            let index = e.target.name;
            index = Number(index)
            let i = Panier_achat.indexOf(index)
            Panier_achat.splice(i, 1);
            localStorage.setItem('Panier_achat', JSON.stringify(Panier_achat));
            length_panier.textContent = Panier_achat.length;
            let total = total_prix()
            totalSpan.textContent = total;
            const li = e.target.parentNode;
            li.remove();
        }
    })
}


// dom de page panier :
if (window.location.pathname === '/panier.html') {
    const valider = document.querySelector('#valider');
    num_total.textContent = total_prix();
    affichepanier();

    if (Panier_achat.length === 0) {
        valider.remove();
    }

    //susprimer en panier
    panier.addEventListener('click', (e) => {
        if (e.target.classList.contains('supprimer')) {
            let index = e.target.name;
            index = Number(index)
            let i = Panier_achat.indexOf(index)
            Panier_achat.splice(i, 1);
            localStorage.setItem('Panier_achat', JSON.stringify(Panier_achat));
            length_panier.textContent = Panier_achat.length;
            let total = total_prix()
            totalSpan.textContent = total;
            const li = e.target.parentNode;
            li.remove();
            if (Panier_achat.length === 0) {
                valider.remove();
            }
        }
    })

    valider.addEventListener('click', (e) => {
        console.log(e.target.classList.contains('valider-btn'));
        if (e.target.classList.contains('valider-btn')) {
            let prix_final = total_prix();
            for (let achat of Panier_achat) {
                myboosters.push(achat)
            }
            Panier_achat.length = 0;
            localStorage.setItem('Panier_achat', JSON.stringify(Panier_achat));
            myboosters.sort((a, b) => a - b);
            localStorage.setItem('myboosters', JSON.stringify(myboosters));
            panier.remove();
            button.remove();

            // create div de valide la commande :
            const validation = document.createElement('div');
            validation.className = "validation"
            const h3 = document.createElement('h3');
            h3.textContent = "le achat est valide"
            const p = document.createElement('p');
            p.textContent = prix_final + " DH"

            validation.appendChild(h3);
            validation.appendChild(p);
            valider.appendChild(validation)

        }
    })

}

// dom de page votreboosters :
if (window.location.pathname === '/votreboosters.html') {
    affichemyboosters();
    mypacks.addEventListener('click', (e) => {
        if (e.target.classList.contains('open')) {
            let local_cart = [];
            for (let i = 1; i <= 5; i++) {
                let number = Math.floor(Math.random() * cartes.length);
                local_cart.push(cartes[number].id);
            }

            // local storage :
            for (let element of local_cart) {
                mycartes.push(element)
            }
            localStorage.setItem('mycartes', JSON.stringify(mycartes));
            let index = e.target.name;
            index = Number(index);
            let key = myboosters.indexOf(index);
            myboosters.splice(key, 1);
            localStorage.setItem('myboosters', JSON.stringify(myboosters));

            // creer model pour voir les cart  :
            /// div parent : model .
            const modal = document.createElement('div');
            modal.id = "modal";
            modal.className = "modal";
            /// div contenant .
            const modal_content = document.createElement('div');
            modal_content.id = "modal-content";
            modal_content.className = "modal-content";
            /// span * 
            const span = document.createElement('span');
            span.textContent = "&times;";
            span.className = "close";
            span.id = "close";
            /// contenant de div
            const titre_modal = document.createElement('h2');
            const model_cart = document.createElement('div');
            model_cart.id = "model_cart";
            model_cart.className = "model_cart";
            for (let i = 0; i < local_cart.length; i++) {
                console.log(i);
                let carte = document.createElement('div');
                carte.className = "modal";
                carte.id = "modal";
                const img_cart = document.createElement('img');
                img_cart.src = cartes[local_cart[i] - 1].imga;
                img_cart.alt = cartes[local_cart[i] - 1].nom + " : " + cartes[local_cart[i] - 1].description;
                const h3 = document.createElement('h3');
                h3.textContent = cartes[local_cart[i] - 1].nom;
                const p = document.createElement('p');
                p.textContent = cartes[local_cart[i] - 1].categorie;

                carte.appendChild(img_cart);
                carte.appendChild(h3);
                carte.appendChild(p);
                model_cart.appendChild(carte);
            }

            const btn_modal = document.createElement("button");
            btn_modal.className = "to_pagecarte";
            btn_modal.id = "to_pagecarte";
            btn_modal.textContent = "voir votre les cartes"

            modal_content.appendChild(titre_modal);
            modal_content.appendChild(model_cart);
            modal_content.appendChild(btn_modal);
            modal.appendChild(modal_content);
            mypacks.appendChild(modal);

            setTimeout(function () {
                const yassine = document.getElementById('modal')
                // yassine.style.display = 'none';
                yassine.remove();
            }, 5000);

            // // Get the modal
            // const modal_page = document.getElementById("modal");
            // const span_close = document.getElementsByClassName("close");
            // modal_page.style.display = "block";
            // span_close.onclick = function () {
            //     modal.style.display = "none";
            // }
            // window.onclick = function (event) {
            //     if (event.target == modal) {
            //         modal.style.display = "none";
            //     }
            // }
            // retirer en node :
            const li = e.target.parentNode;
            li.remove();
        }
    })
}


if (window.location.pathname === '/macollection.html') {
    affichecart();
    imgclick();

    const tout = document.querySelector(".tout");
    tout.addEventListener('click', (e) => {
        cart_list.textContent = "";
        cart_details.textContent = "";
        affichecart();
        imgclick()
    })

    const hero_type = document.querySelector(".hero_type");
    hero_type.addEventListener('click', (e) => {
        cart_list.textContent = "";
        cart_details.textContent = "";
        let type_name = e.target.name;

        affichecarteByType(type_name);
        imgclick()
    })

    const monstres_type = document.querySelector(".monstres_type");
    monstres_type.addEventListener('click', (e) => {
        cart_list.textContent = "";
        cart_details.textContent = "";
        let type_name = e.target.name;

        affichecarteByType(type_name);
        imgclick()
    })

    const serviteurs_type = document.querySelector(".serviteurs_type");
    serviteurs_type.addEventListener('click', (e) => {
        cart_list.textContent = "";
        cart_details.textContent = "";
        let type_name = e.target.name;

        affichecarteByType(type_name);
        imgclick()
    })

    const sorts_type = document.querySelector(".sorts_type");
    sorts_type.addEventListener('click', (e) => {
        cart_list.textContent = "";
        cart_details.textContent = "";
        let type_name = e.target.name;

        affichecarteByType(type_name);
        imgclick()
    })

    const common_categorie = document.querySelector(".common_categorie");
    common_categorie.addEventListener('click', (e) => {
        cart_list.textContent = "";
        cart_details.textContent = "";
        let category = e.target.name;

        affichecarteBycategory(category);
        imgclick()
    })

    const rare_categorie = document.querySelector(".rare_categorie");
    rare_categorie.addEventListener('click', (e) => {
        cart_list.textContent = "";
        cart_details.textContent = "";
        let category = e.target.name;

        affichecarteBycategory(category);
        imgclick()
    })

    const epic_categorie = document.querySelector(".epic_categorie");
    epic_categorie.addEventListener('click', (e) => {
        cart_list.textContent = "";
        cart_details.textContent = "";
        let category = e.target.name;

        affichecarteBycategory(category);
        imgclick()
    })

    const legend_categorie = document.querySelector(".legend_categorie");
    legend_categorie.addEventListener('click', (e) => {
        cart_list.textContent = "";
        cart_details.textContent = "";
        let category = e.target.name;

        affichecarteBycategory(category);
        imgclick()
    })

}
