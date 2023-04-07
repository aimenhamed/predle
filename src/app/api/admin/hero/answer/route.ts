import { prisma } from "@/lib/db";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const headers = request.headers;
  if (headers.get("Authorization") !== process.env.CRON_PASS) {
    return new Response("Not allowed", { status: 401 });
  }
  let heroList = await prisma.hero.findMany();
  const currentHero = await prisma.currentHero.findFirst();
  if (!currentHero) {
    return new Response("No current hero", { status: 400 });
  }
  heroList = heroList.filter((hero) => hero.id !== currentHero.heroId);

  const newHero = heroList[Math.floor(Math.random() * heroList.length)];

  const newCurrentHero = await prisma.currentHero.update({
    where: { id: currentHero.id },
    data: {
      heroId: newHero.id,
    },
  });
  return new Response(JSON.stringify(newCurrentHero));
}
