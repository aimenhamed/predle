type Position = "Tank" | "Assassin" | "Mage" | "Support" | "Marksman";

type Hero = {
  name: string;
  gender: "Male" | "Female" | "Other";
  // position: Position[];
};

export async function GET(request: Request) {
  const heroes: Hero[] = [
    { name: "Countess", gender: "Female" },
    { name: "Crunch", gender: "Other" },
    { name: "Dekker", gender: "Female" },
    { name: "Drongo", gender: "Male" },
    { name: "Feng Mao", gender: "Male" },
    { name: "Gadget", gender: "Female" },
    { name: "Gideon", gender: "Male" },
    { name: "Grux", gender: "Male" },
    { name: "Howitzer", gender: "Male" },
    { name: "Kallari", gender: "Female" },
    { name: "Khaimera", gender: "Male" },
    { name: "Muriel", gender: "Female" },
    { name: "Murdock", gender: "Male" },
    { name: "Narbash", gender: "Male" },
    { name: "Riktor", gender: "Male" },
    { name: "Sevarog", gender: "Male" },
    { name: "Steel", gender: "Male" },
    { name: "Shinbi", gender: "Female" },
    { name: "Sparrow", gender: "Female" },
    { name: "The Fey", gender: "Female" },
    { name: "Revenant", gender: "Male" },
    { name: "Rampage", gender: "Male" },
    { name: "Kira", gender: "Female" },
    { name: "Lt. Belica", gender: "Female" },
  ];

  const res = {
    heroes,
    count: heroes.length,
  };

  return new Response(JSON.stringify(res));
}
