import { prisma } from "@/lib/db";

export async function getHeroes() {
  const heroes = await prisma.hero.findMany({
    include: {
      heroPosition: true,
      powerType: true,
    },
  });

  const todaysHeroRecord = await prisma.currentHero.findFirst();
  if (!todaysHeroRecord) {
    return new Response("No hero found", { status: 404 });
  }
  const todaysHero = heroes.find((hero) => hero.id === todaysHeroRecord.heroId);

  if (!todaysHero) {
    return new Response("No hero found with id", { status: 404 });
  }

  const res = {
    heroes,
    todaysHero,
  };

  return res;
}
