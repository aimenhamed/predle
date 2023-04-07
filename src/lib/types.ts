import { Hero, HeroPosition, PowerType } from "@prisma/client";

export type CompleteHero = Hero & {
  heroPosition: {
    id: number;
    heroId: number;
    position: HeroPosition | string;
  }[];
  powerType: { id: number; heroId: number; powerType: PowerType | string }[];
};
