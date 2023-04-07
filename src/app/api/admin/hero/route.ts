import { prisma } from "@/lib/db";
import { Hero, Position, PowerType } from "@prisma/client";

export type CreateHeroRequest = {
  powerTypes: { powerType: PowerType }[];
  positions: { position: Position }[];
} & Hero;

export async function POST(request: Request) {
  if (request.headers.get("Authorization") !== process.env.PASSWORD) {
    return new Response("Not allowed", { status: 401 });
  }
  const hero = (await request.json()) as CreateHeroRequest;

  const insertedHero = await prisma.hero.create({
    data: {
      name: hero.name,
      gender: hero.gender,
      rangeType: hero.rangeType,
      powerType: {
        createMany: {
          data: hero.powerTypes,
        },
      },
      heroPosition: {
        createMany: {
          data: hero.positions,
        },
      },
    },
  });

  return new Response(JSON.stringify(insertedHero));
}

export async function PUT(request: Request) {
  if (request.headers.get("Authorization") !== process.env.PASSWORD) {
    return new Response("Not allowed", { status: 401 });
  }
  const hero = (await request.json()) as CreateHeroRequest;

  const updatedHero = await prisma.hero.update({
    where: {
      id: hero.id,
    },
    data: {
      name: hero.name,
      gender: hero.gender,
      rangeType: hero.rangeType,
      powerType: {
        createMany: {
          data: hero.powerTypes,
        },
      },
      heroPosition: {
        createMany: {
          data: hero.positions,
        },
      },
    },
  });

  return new Response(JSON.stringify(updatedHero));
}
