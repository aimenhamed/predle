async function addHeroes() {
  const heroes: any[] = [
    {
      name: "Countess",
      gender: "FEMALE",
      rangeType: "MELEE",
      powerTypes: [{ powerType: "MAGICAL" }],
      positions: [
        { position: "MID" },
        { position: "JUNGLE" },
        { position: "OFFLANE" },
      ],
    },
    {
      name: "Crunch",
      gender: "OTHER",
      rangeType: "MELEE",
      powerTypes: [{ powerType: "PHYSICAL" }, { powerType: "MAGICAL" }],
      positions: [{ position: "OFFLANE" }],
    },
    {
      name: "Dekker",
      gender: "FEMALE",
      rangeType: "RANGED",
      powerTypes: [{ powerType: "MAGICAL" }],
      positions: [{ position: "SUPPORT" }],
    },
    {
      name: "Drongo",
      gender: "MALE",
      rangeType: "RANGED",
      powerTypes: [{ powerType: "PHYSICAL" }],
      positions: [{ position: "CARRY" }],
    },
    {
      name: "Feng Mao",
      gender: "MALE",
      rangeType: "MELEE",
      powerTypes: [{ powerType: "PHYSICAL" }],
      positions: [{ position: "OFFLANE" }, { position: "JUNGLE" }],
    },
    {
      name: "Gadget",
      gender: "FEMALE",
      rangeType: "RANGED",
      powerTypes: [{ powerType: "MAGICAL" }],
      positions: [{ position: "MID" }],
    },
    {
      name: "Gideon",
      gender: "MALE",
      rangeType: "RANGED",
      powerTypes: [{ powerType: "MAGICAL" }],
      positions: [{ position: "MID" }],
    },
    {
      name: "Grux",
      gender: "MALE",
      rangeType: "MELEE",
      powerTypes: [{ powerType: "PHYSICAL" }],
      positions: [{ position: "OFFLANE" }, { position: "JUNGLE" }],
    },
    {
      name: "Howitzer",
      gender: "MALE",
      rangeType: "RANGED",
      powerTypes: [{ powerType: "MAGICAL" }],
      positions: [{ position: "MID" }],
    },
    {
      name: "Kallari",
      gender: "FEMALE",
      rangeType: "MELEE",
      powerTypes: [{ powerType: "PHYSICAL" }],
      positions: [{ position: "OFFLANE" }, { position: "JUNGLE" }],
    },
    {
      name: "Khaimera",
      gender: "MALE",
      rangeType: "MELEE",
      powerTypes: [{ powerType: "PHYSICAL" }],
      positions: [{ position: "JUNGLE" }],
    },
    {
      name: "Muriel",
      gender: "FEMALE",
      rangeType: "RANGED",
      powerTypes: [{ powerType: "MAGICAL" }],
      positions: [{ position: "SUPPORT" }],
    },
    {
      name: "Murdock",
      gender: "MALE",
      rangeType: "RANGED",
      powerTypes: [{ powerType: "PHYSICAL" }],
      positions: [{ position: "CARRY" }],
    },
    {
      name: "Narbash",
      gender: "MALE",
      rangeType: "MELEE",
      powerTypes: [{ powerType: "MAGICAL" }],
      positions: [{ position: "SUPPORT" }],
    },
    {
      name: "Riktor",
      gender: "MALE",
      rangeType: "MELEE",
      powerTypes: [{ powerType: "MAGICAL" }],
      positions: [
        { position: "OFFLANE" },
        { position: "JUNGLE" },
        { position: "SUPPORT" },
      ],
    },
    {
      name: "Sevarog",
      gender: "MALE",
      rangeType: "MELEE",
      powerTypes: [{ powerType: "MAGICAL" }],
      positions: [{ position: "OFFLANE" }, { position: "JUNGLE" }],
    },
    {
      name: "Steel",
      gender: "MALE",
      rangeType: "MELEE",
      powerTypes: [{ powerType: "MAGICAL" }],
      positions: [
        { position: "OFFLANE" },
        { position: "JUNGLE" },
        { position: "SUPPORT" },
      ],
    },
    {
      name: "Shinbi",
      gender: "FEMALE",
      rangeType: "MELEE",
      powerTypes: [{ powerType: "MAGICAL" }],
      positions: [
        { position: "OFFLANE" },
        { position: "JUNGLE" },
        { position: "JUNGLE" },
      ],
    },
    {
      name: "Sparrow",
      gender: "FEMALE",
      rangeType: "RANGED",
      powerTypes: [{ powerType: "PHYSICAL" }],
      positions: [{ position: "CARRY" }],
    },
    {
      name: "The Fey",
      gender: "FEMALE",
      rangeType: "RANGED",
      powerTypes: [{ powerType: "MAGICAL" }],
      positions: [{ position: "MID" }],
    },
    {
      name: "Revenant",
      gender: "MALE",
      rangeType: "RANGED",
      powerTypes: [{ powerType: "PHYSICAL" }],
      positions: [{ position: "CARRY" }],
    },
    {
      name: "Rampage",
      gender: "MALE",
      rangeType: "MELEE",
      powerTypes: [{ powerType: "PHYSICAL" }],
      positions: [{ position: "JUNGLE" }],
    },
    {
      name: "Kira",
      gender: "FEMALE",
      rangeType: "RANGED",
      powerTypes: [{ powerType: "PHYSICAL" }],
      positions: [{ position: "CARRY" }],
    },
    {
      name: "Lt. Belica",
      gender: "FEMALE",
      rangeType: "RANGED",
      powerTypes: [{ powerType: "MAGICAL" }],
      positions: [{ position: "MID" }, { position: "SUPPORT" }],
    },
  ];

  const errors = [];
  let error = undefined;

  for (const hero of heroes) {
    try {
      await fetch("http://localhost:3000/api/admin/hero", {
        method: "POST",
        body: JSON.stringify(hero),
      });
    } catch (err) {
      error = err;
      errors.push(hero);
    }
  }

  console.log(errors, errors.length);
  console.log(error);
}

addHeroes();
